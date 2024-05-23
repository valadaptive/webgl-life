in vec2 v_texcoord;
uniform uvec2 u_dimensions;
uniform highp usampler2D u_texture;
out uvec4 fragColor;

uint getNeighborCount(uvec2 coord) {
    uint neighbors = 0u;

    // left column
    if (coord.x > 0u) {
        if (coord.y > 0u) {
            neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(-1, -1), 0).r;
        }
        neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(-1, 0), 0).r;
        if (coord.y < u_dimensions.y) {
            neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(-1, 1), 0).r;
        }
    }

    // center column
    if (coord.y > 0u) {
        neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(0, -1), 0).r;
    }
    if (coord.y < u_dimensions.y) {
        neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(0, 1), 0).r;
    }

    // right column
    if (coord.x < u_dimensions.x) {
        if (coord.y > 0u) {
            neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(1, -1), 0).r;
        }
        neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(1, 0), 0).r;
        if (coord.y < u_dimensions.y) {
            neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(1, 1), 0).r;
        }
    }

    return neighbors;
}

void main() {
    uvec2 cellCoord = uvec2(v_texcoord * vec2(u_dimensions));

    uint cell = 0u;
    uint neighbors = getNeighborCount(cellCoord);

    if (neighbors == 3u) {
        cell = 1u;
    } else if (neighbors == 2u) {
        cell = texelFetch(u_texture, ivec2(cellCoord), 0).r;
    }

    fragColor = uvec4(cell, 0, 0, 0);
}
