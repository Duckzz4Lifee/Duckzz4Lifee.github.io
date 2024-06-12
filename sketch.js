let factor = 1

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('grey');
  let points = 50
  translate(width/2, height/2)
  for(let i=0; i < points; i++){
  let angle = i * 2 * PI / points
  let x = 200 * cos(angle)
  let y = 200 * sin(angle)
  circle(x, y, 5)
    let x2 = 200 * cos(angle * factor)
    let y2 = 200 * sin(angle * factor)
    line(x, y, x2, y2)
  }
  factor += 0.01
 
}
