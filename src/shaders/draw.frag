in vec2 v_texcoord;
uniform uvec2 u_dimensions;
uniform highp usampler2D u_texture;
out vec4 fragColor;

vec3 srgb_mix(vec3 x, vec3 y, float a) {
    return pow(mix(
        pow(x, vec3(2.2)),
        pow(y, vec3(2.2)),
        a
    ), vec3(1.0 / 2.2));
}

void main() {
    ivec2 cellCoord = ivec2(v_texcoord * vec2(u_dimensions));
    uint cell = texelFetch(u_texture, cellCoord, 0).r;
    float f_cell = float(cell);

    uint density = 0u;

    for (int y = -CELL_RADIUS; y <= CELL_RADIUS; y++) {
        for (int x = -CELL_RADIUS; x <= CELL_RADIUS; x++) {
            ivec2 avgCoord = cellCoord + ivec2(x, y);
            density += texelFetch(u_texture, avgCoord, 0).r;
        }
    }

    float density_norm = (float(density) - 2.0) / float(CELL_RADIUS * CELL_RADIUS);

    vec4 cell_color = vec4(srgb_mix(
        vec3(0.0, 0.25, 1.0),
        vec3(1.0, 0.0, 0.25),
        smoothstep(0.0, 1.0, pow(density_norm, 0.6))
    ), 1.0);

    fragColor = mix(
        vec4(0.0, 0.0, 0.0, 1.0),
        cell_color,
        f_cell
    );
}
