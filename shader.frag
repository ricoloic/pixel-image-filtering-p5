precision mediump float;

uniform vec2 u_resolution;
uniform sampler2D u_texture; // Input texture
uniform float u_treshold;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;

  // Flip the Y-axis
  uv.y = 1.0 - uv.y;

  // Sample color from the texture
  vec4 texColor = texture2D(u_texture, uv);

  float cum = (texColor.r + texColor.g + texColor.b) / 3.0;

  if (cum < u_treshold) {
    texColor.r = 0.0;
    texColor.g = 0.0;
    texColor.b = 0.0;
  }

  gl_FragColor = texColor;
}
