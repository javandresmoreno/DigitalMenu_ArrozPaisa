let circle = document.getElementById("circular-text");

let circleArray = circle.textContent.split("");
circle.textContent = "";

for (let i = 0; i < circleArray.length; i++) {
  circle.innerHTML +=
    '<span style="transform:rotate(' +
    (i + 1) * 10 +
    'deg)">' +
    circleArray[i] +
    "</span>";
}

let circleTwo = document.getElementById("circular-text-2");

let circleArrayTwo = circleTwo.textContent.split("");
circleTwo.textContent = "";

for (let i = 0; i < circleArrayTwo.length; i++) {
  circleTwo.innerHTML +=
    '<span style="transform:rotate(' +
    (i + 1) * 8 +
    'deg)">' +
    circleArrayTwo[i] +
    "</span>";
}
