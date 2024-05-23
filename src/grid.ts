import Shader from './shader';

import quadVert from './shaders/quad.vert';
import stepFrag from './shaders/step.frag';
import drawFrag from './shaders/draw.frag';

class CellBuffer {
    private gl;
    width;
    height;
    texture;
    textureData;
    framebuffer;

    constructor(gl: WebGL2RenderingContext, width: number, height: number) {
        this.gl = gl;
        this.width = width;
        this.height = height;
        const texture = gl.createTexture();
        if (!texture) {
            throw new Error('Failed to create texture');
        }
        this.texture = texture;
        gl.bindTexture(gl.TEXTURE_2D, this.texture);

        this.textureData = new Uint8Array(width * height);
        for (let i = 0; i < width * height; i++) {
            this.textureData[i] = Math.round(Math.random());
        }

        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.R8UI,
            width,
            height,
            0,
            gl.RED_INTEGER,
            gl.UNSIGNED_BYTE,
            this.textureData,
        );

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        const framebuffer = gl.createFramebuffer();
        if (!framebuffer) {
            throw new Error('Failed to create framebuffer');
        }
        this.framebuffer = framebuffer;
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.framebufferTexture2D(
            gl.FRAMEBUFFER,
            gl.COLOR_ATTACHMENT0,
            gl.TEXTURE_2D,
            this.texture,
            0,
        );
    }

    randomize() {
        for (let i = 0; i < this.width * this.height; i++) {
            this.textureData[i] = Math.round(Math.random());
        }
        const gl = this.gl;
        gl.texSubImage2D(
            gl.TEXTURE_2D,
            0,
            0,
            0,
            this.width,
            this.height,
            gl.RED_INTEGER,
            gl.UNSIGNED_BYTE,
            this.textureData
        );
    }
}

export default class Grid {
    width;
    height;
    canvas;
    radius: number = 7;
    private gl;
    private prevBuffer;
    private nextBuffer;

    private simulationStepShader;
    private drawShaders: Shader[];

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;

        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        const gl = this.canvas.getContext('webgl2', {antialias: false});
        if (!gl) {
            throw new Error('Failed to initialize WebGL context');
        }
        this.gl = gl;

        const quadBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            0, 0,
            1, 0,
            0, 1,

            0, 1,
            1, 0,
            1, 1,
        ]), gl.STATIC_DRAW);

        this.simulationStepShader = new Shader(this.gl, quadVert, stepFrag);
        //this.drawShader = new Shader(this.gl, quadVert, drawFrag);
        this.drawShaders = [];

        this.prevBuffer = new CellBuffer(this.gl, width, height);
        this.nextBuffer = new CellBuffer(this.gl, width, height);
    }

    private setShader(shader: Shader): void {
        const gl = this.gl;
        gl.useProgram(shader.program);

        const a_position = this.simulationStepShader.attribLocations.a_position;
        gl.enableVertexAttribArray(a_position);

        gl.vertexAttribPointer(
            a_position,
            2,
            gl.FLOAT,
            false,
            0,
            0,
        );
        gl.uniform2ui(shader.uniformLocations.u_dimensions, this.width, this.height);
    }

    private swapBuffers(): void {
        const tmp = this.prevBuffer;
        this.prevBuffer = this.nextBuffer;
        this.nextBuffer = tmp;
    }

    private getDrawShaderForRadius(radius: number): Shader {
        const shader = this.drawShaders[radius];
        if (shader) {
            return shader;
        }

        const newShader = new Shader(this.gl, quadVert, drawFrag, [`CELL_RADIUS ${radius}`]);
        this.drawShaders[radius] = newShader;
        return newShader;
    }

    randomize() {
        this.prevBuffer.randomize();
    }

    update(): void {
        const gl = this.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.nextBuffer.framebuffer);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, this.prevBuffer.texture);
        this.setShader(this.simulationStepShader);

        const a_position = this.simulationStepShader.attribLocations.a_position;
        gl.enableVertexAttribArray(a_position);

        gl.vertexAttribPointer(
            a_position,
            2,
            gl.FLOAT,
            false,
            0,
            0,
        );

        gl.drawArrays(gl.TRIANGLES, 0, 6);

        this.swapBuffers();
    }

    draw(): void {
        const gl = this.gl;
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        this.setShader(this.getDrawShaderForRadius(this.radius));
        gl.bindTexture(gl.TEXTURE_2D, this.prevBuffer.texture);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    step(): void {
        this.update();
        this.draw();
    }

    stepForMS(stepTime: number): number {
        const now = Date.now();
        let steps = 0;

        for (;;) {
            // Do a prime number of steps to avoid hiding any oscillations with a period that divides the step count
            for (let i = 0; i < 7; i++) {
                this.update();
                steps++;
            }
            // Ensure the work is actually done so we can accurately measure time
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.prevBuffer.framebuffer);
            this.gl.readPixels(0, 0, 1, 1, this.gl.RGBA_INTEGER, this.gl.UNSIGNED_INT, new Uint32Array(4));

            const elapsed = Date.now() - now;
            if (elapsed >= stepTime) {
                break;
            }
        }
        this.draw();
        return steps;
    }
}
