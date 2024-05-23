(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    class Grid {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.canvas = document.createElement('canvas');
            this.canvas.width = width;
            this.canvas.height = height;
            const gl = this.canvas.getContext('webgl2', { antialias: false });
            if (!gl) {
                throw new Error('Failed to initialize WebGL context');
            }
            this.gl = gl;
        }
    }

    new Grid();

}));
//# sourceMappingURL=index.umd.js.map
