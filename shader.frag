precision mediump float;

uniform vec2 u_resolution;
uniform sampler2D u_texture; // Input texture
uniform float u_threshold;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;

  // Flip the Y-axis
  uv.y = 1.0 - uv.y;

  // Sample color from the texture
  vec4 texColor = texture2D(u_texture, uv);

  float cum = (texColor.r + texColor.g + texColor.b) / 3.0;

  texColor.rgb *= step(u_threshold, cum);

  texColor.r = pow(texColor.r, 2.);
  texColor.g = pow(texColor.g, 2.);
  texColor.b = pow(texColor.b, 2.);

  gl_FragColor = texColor;
}
