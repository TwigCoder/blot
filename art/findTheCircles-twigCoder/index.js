/*
@title: Where Are Circles?
@author: Pranav Verma
@snapshot: circles.png
*/

const { randInRange, randIntInRange } = blotToolkit;

const width = 125;
const height = 125;
setDocDimensions(width, height);

const t = new bt.Turtle();

function drawStars(centerX, centerY, maxRadius, minStars, maxStars) {
  const stars = [];
  const numStars = randIntInRange(minStars, maxStars);

  for (let i = 0; i < numStars; i++) {
    let angle = randInRange(0, 360);
    let radius = randInRange(maxRadius + 5, maxRadius + 20);

    let x = centerX + radius * Math.cos(angle);
    let y = centerY + radius * Math.sin(angle);

    stars.push([x, y]);
  }

  return stars;
}

function drawCube(x, y, size) {
  const cubeLines = [
    [[x, y], [x + size, y]],
    [[x + size, y], [x + size, y + size]],
    [[x + size, y + size], [x, y + size]],
    [[x, y + size], [x, y]],
    [[x + size / 2, y - size / 2], [x + size + size / 2, y - size / 2]],
    [[x + size + size / 2, y - size / 2], [x + size + size / 2, y + size / 2]],
    [[x + size + size / 2, y + size / 2], [x + size / 2, y + size / 2]],
    [[x + size / 2, y + size / 2], [x + size / 2, y - size / 2]],
    [[x, y], [x + size / 2, y - size / 2]],
    [[x + size, y], [x + size + size / 2, y - size / 2]],
    [[x + size, y + size], [x + size + size / 2, y + size / 2]],
    [[x, y + size], [x + size / 2, y + size / 2]],
  ];

  return cubeLines;
}

function drawRectangularPrism(x, y, width, height, depth) {
  const prismLines = [
    [[x, y], [x + width, y]],
    [[x + width, y], [x + width, y + height]],
    [[x + width, y + height], [x, y + height]],
    [[x, y + height], [x, y]],
    [[x + depth, y - depth], [x + width + depth, y - depth]],
    [[x + width + depth, y - depth], [x + width + depth, y + height - depth]],
    [[x + width + depth, y + height - depth], [x + depth, y + height - depth]],
    [[x + depth, y + height - depth], [x + depth, y - depth]],
    [[x, y], [x + depth, y - depth]],
    [[x + width, y], [x + width + depth, y - depth]],
    [[x + width, y + height], [x + width + depth, y + height - depth]],
    [[x, y + height], [x + depth, y + height - depth]],
  ];

  return prismLines;
}

function drawPyramid(x, y, baseSize, height) {
  const pyramidLines = [
    [[x, y], [x + baseSize, y]],
    [[x + baseSize, y], [x + baseSize, y + baseSize]],
    [[x + baseSize, y + baseSize], [x, y + baseSize]],
    [[x, y + baseSize], [x, y]],
    [[x, y], [x + baseSize / 2, y - height]],
    [[x + baseSize, y], [x + baseSize / 2, y - height]],
    [[x + baseSize, y + baseSize], [x + baseSize / 2, y - height]],
    [[x, y + baseSize], [x + baseSize / 2, y - height]],
  ];

  return pyramidLines;
}

function drawMiniCircle(x, y, radius) {
  const points = [];
  const numPoints = 16;
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI;
    const px = x + radius * Math.cos(angle);
    const py = y + radius * Math.sin(angle);
    if (i === 0) {
      points.push([px, py]);
    } else {
      points.push([px, py]);
    }
  }
  points.push([points[0][0], points[0][1]]);
  return [[...points]];
}

const stars = drawStars(width / 2, height / 2, 40, 150, 200);

stars.forEach(([x, y]) => {
  t.jump([x, y]);
  t.angle = randInRange(0, 360);
  t.arc(2, randInRange(5, 10));
});

const numCubes = randIntInRange(35, 50);
const cubeSize = 4;
for (let i = 0; i < numCubes; i++) {
  const angle = randInRange(0, 360);
  const radius = randInRange(30, 65);

  const x = width / 2 + radius * Math.cos(angle);
  const y = height / 2 + radius * Math.sin(angle);

  const cubeLines = drawCube(x, y, cubeSize);
  drawLines(cubeLines);
}

const numRectPrisms = randIntInRange(10, 15);
const prismWidth = randInRange(8, 12);
const prismHeight = randInRange(8, 12);
const prismDepth = randInRange(6, 8);
for (let i = 0; i < numRectPrisms; i++) {
  const angle = randInRange(0, 360);
  const radius = randInRange(40, 60);

  const x = width / 2 + radius * Math.cos(angle);
  const y = height / 2 + radius * Math.sin(angle);

  const rectPrismLines = drawRectangularPrism(x, y, prismWidth, prismHeight, prismDepth);
  drawLines(rectPrismLines);
}

const numPyramids = randIntInRange(10, 15);
const pyramidBaseSize = randInRange(6, 12);
const pyramidHeight = randInRange(10, 15);
for (let i = 0; i < numPyramids; i++) {
  const angle = randInRange(0, 360);
  const radius = randInRange(30, 65);

  const x = width / 2 + radius * Math.cos(angle);
  const y = height / 2 + radius * Math.sin(angle);

  const pyramidLines = drawPyramid(x, y, pyramidBaseSize, pyramidHeight);
  drawLines(pyramidLines);

  const miniCircleX = width / 2;
  const miniCircleY = height / 2;
  const miniCircleRadius = 4;
  const miniCircleLines = drawMiniCircle(miniCircleX, miniCircleY, miniCircleRadius);
  drawLines(miniCircleLines);

  function drawSingleMiniCircle() {
    const angle = randInRange(0, 360);
    const radius = randInRange(30, 65);

    const miniCircleX = width / 2 + radius * Math.cos(angle);
    const miniCircleY = height / 2 + radius * Math.sin(angle);
    const miniCircleRadius = 0.25;

    const miniCircleLines = drawMiniCircle(miniCircleX, miniCircleY, miniCircleRadius);
    drawLines(miniCircleLines);
  }

  drawSingleMiniCircle();
}

function drawCone(x, y, baseRadius, height) {
  const coneLines = [
    ...drawMiniCircle(x, y, baseRadius),
    [[x - baseRadius, y], [x + baseRadius, y]],
    [[x - baseRadius, y], [x, y - height]],
    [[x + baseRadius, y], [x, y - height]],
  ];

  return coneLines;
}

function drawCylinder(x, y, radius, height) {
  const cylinderLines = [
    ...drawMiniCircle(x, y, radius),
    ...drawMiniCircle(x, y - height, radius),
    [[x - radius, y], [x - radius, y - height]],
    [[x + radius, y], [x + radius, y - height]],
  ];

  return cylinderLines;
}

const numCones = randIntInRange(1, 2); 
const coneBaseRadius = 5;
const coneHeight = 10;

for (let i = 0; i < numCones; i++) {
  const angle = randInRange(0, 360);
  const radius = randInRange(60, 65);

  const x = width / 2 + radius * Math.cos(angle);
  const y = height / 2 + radius * Math.sin(angle);

  const coneLines = drawCone(x, y, coneBaseRadius, coneHeight);
}

const numCylinders = randIntInRange(1, 1); 
const cylinderRadius = 6;
const cylinderHeight = 12;

for (let i = 0; i < numCylinders; i++) {
  const angle = randInRange(0, 360);
  const radius = randInRange(35, 65); 

  const x = width / 2 + radius * Math.cos(angle);
  const y = height / 2 + radius * Math.sin(angle);

  const cylinderLines = drawCylinder(x, y, cylinderRadius, cylinderHeight);
  drawLines(cylinderLines);
}

function drawLetter(letter, startX, startY, size) {
  const lines = [];
  const s = size;

  const letterMap = {
    "W": [[[0, 0], [s / 4, -s]], [[s / 4, -s], [s / 2, 0]], [[s / 2, 0], [3 * s / 4, -s]], [[3 * s / 4, -s], [s, 0]]],
    "H": [[[0, 0], [0, -s]], [[s, 0], [s, -s]], [[0, -s / 2], [s, -s / 2]]],
    "E": [[[0, 0], [0, -s]], [[0, 0], [s / 2, 0]], [[0, -s / 2], [s / 2, -s / 2]], [[0, -s], [s / 2, -s]]],
    "R": [[[0, 0], [0, -s]], [[0, 0], [s / 2, 0]], [[s / 2, 0], [s / 2, -s / 2]], [[s / 2, -s / 2], [0, -s / 2]], [[0, -s / 2], [s, -s]]],
    "S": [[[s / 2, 0], [0, 0]], [[0, 0], [0, -s / 2]], [[0, -s / 2], [s / 2, -s / 2]], [[s / 2, -s / 2], [s / 2, -s]], [[s / 2, -s], [0, -s]]],
    "A": [[[0, -s], [s / 2, 0]], [[s / 2, 0], [s, -s]], [[s / 4, -s / 2], [3 * s / 4, -s / 2]]],
    "L": [[[0, 0], [0, -s]], [[0, 0], [s / 2, 0]]],
    "D": [[[0, 0], [0, -s]], [[0, 0], [s / 2, -s / 4]], [[s / 2, -s / 4], [s / 2, -3 * s / 4]], [[s / 2, -3 * s / 4], [0, -s]]],
    "O": [[[0, 0], [s, 0]], [[s, 0], [s, -s]], [[s, -s], [0, -s]], [[0, -s], [0, 0]]],
    "C": [[[s / 2, 0], [0, 0]], [[0, 0], [0, -s]], [[0, -s], [s / 2, -s]]],
    "I": [[[s / 2, 0], [s / 2, -s]]],
  };

  if (letterMap[letter]) {
    for (let line of letterMap[letter]) {
      const [start, end] = line;
      lines.push([
        [startX + start[0], startY + start[1]],
        [startX + end[0], startY + end[1]],
      ]);
    }
  }
  return lines;
}

function drawWord(word, startX, startY, size, spacing) {
  const wordLines = [];
  let offsetX = 0;
  for (let char of word) {
    if (char !== " ") {
      const letterLines = drawLetter(char, startX + offsetX, startY, size);
      wordLines.push(...letterLines);
    }
    offsetX += size + spacing;
  }
  return wordLines;
}

const whereIsLines = drawWord("WHERE ARE", width / 2 - 25, height / 2 + 20, 5, 2); 
drawLines(whereIsLines);

const circleBottomLines = drawWord("CIRCLES", width / 2 - 15, height / 2 - 20, 5, 2); 
drawLines(circleBottomLines);