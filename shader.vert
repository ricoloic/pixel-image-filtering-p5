attribute vec3 aPosition;

void main() {
  vec4 positionVec4 = vec4(aPosition, 1.0);
  // * 2 is to use the full canvas size
  // - 1 is to place it back to a new origini (from the center to the bottom left)
  positionVec4.xy = (positionVec4.xy * 2.0) - 1.0;
  gl_Position = positionVec4;
}
