const lineHalfMaxLength = 100;
let img;

function preload() {
    img = loadImage('loic.jpeg');
}

function setup() {
    createCanvas(img.width, img.height);

    img.loadPixels();
ù
    let d = pixelDensity();

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let index = 4 * ((d + y) * width * d + (d + x));
            let r = img.pixels[index];
            let g = img.pixels[index + 1];
            let b = img.pixels[index + 2];
            let a = img.pixels[index + 3];

            let cumulative = (r + g + b) / 3;
            cumulative = cumulative > 150 ? map(cumulative, 150, 255, 50, 255) : 0;

            strokeWeight(random(3, 5));
            stroke(cumulative, a);
            line(x, y, x + random(-lineHalfMaxLength, lineHalfMaxLength), y);
        }
    }
}
