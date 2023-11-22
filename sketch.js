let img;
let shd;
let tresholdSlider;

function calcTreshold() {
    return map(tresholdSlider.value(), 0, 255, 0, 1);
}

function preload() {
    img = loadImage("./loic.jpeg");
    shd = loadShader('./shader.vert', './shader.frag');
}

function setup() {
    createCanvas(img.width, img.height, WEBGL);
    tresholdSlider = createSlider(0, 255, 120, 1);
}

function draw() {
    shader(shd);
    shd.setUniform('u_resolution', [width, height]);
    shd.setUniform('u_texture', img);
    shd.setUniform('u_threshold', calcTreshold());
    rect(-(width / 2), -(height / 2), width, height);
}
