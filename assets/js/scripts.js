// Bonus Task: Random Background Color on Hover
// Generating Random Color
function randomColor() {
  let color = [];
  // To set color with rgb() we need 3 values, so looping over 3 times
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

// Generate Random Color Event
const shapeCards = document.getElementsByClassName("randomColorCard");
for (const shapeCard of shapeCards) {
  shapeCard.addEventListener("mouseenter", function () {
    shapeCard.style.backgroundColor = randomColor();
  });
}

// Calculate Area Function
function calculateArea(btnID) {
  // Getting the Area Name
  const calculateAreaName = areaName(btnID);

  // Calculate Area for Triangle
  if (btnID === "triangleAreaCalculateBtn") {
    // Getting Input Field Values
    const triangleBaseValue = document.getElementById("triangleBase").value;
    const triangleHeightValue = document.getElementById("triangleHeight").value;

    // Error Check Checking
    const errorCheck = checkError(triangleBaseValue, triangleHeightValue); // if true == error, false == no error;

    if (errorCheck == false) {
      const calculateAreaValue = 0.5 * triangleBaseValue * triangleHeightValue;
      showAreaValue(calculateAreaValue.toFixed(2), calculateAreaName); // Showing Area Value
    }
  }

  // Calculate Area for Rectangle
  else if (btnID === "rectangleAreaCalculateBtn") {
    // Getting Input Field Values
    const rectangleWidthValue = document.getElementById("rectangleWidth").value;
    const rectangleLengthValue = document.getElementById("rectangleLength").value;

    // Error Check Checking
    const errorCheck = checkError(rectangleWidthValue, rectangleLengthValue); // if true == error, false == no error;

    if (errorCheck == false) {
      const calculateAreaValue = rectangleWidthValue * rectangleLengthValue;
      showAreaValue(calculateAreaValue.toFixed(2), calculateAreaName);
    }
  }

  // Calculate Area for Parallelogram
  else if (btnID === "parallelogramAreaCalculateBtn") {
    // Getting Input Field Values
    const parallelogramBaseValue = document.getElementById("parallelogramBase").value;
    const parallelogramHeightValue = document.getElementById("parallelogramHeight").value;

    // Error Check Checking
    const errorCheck = checkError(parallelogramBaseValue, parallelogramHeightValue); // if true == error, false == no error;

    if (errorCheck == false) {
      const calculateAreaValue = parallelogramBaseValue * parallelogramHeightValue;
      showAreaValue(calculateAreaValue.toFixed(2), calculateAreaName);
    }
  }

  // Calculate Area for Rhombus
  else if (btnID === "rhombusAreaCalculateBtn") {
    // Getting Input Field Values
    const rhombusDiagonal1Value = document.getElementById("rhombusDiagonal1").value;
    const rhombusDiagonal2Value = document.getElementById("rhombusDiagonal2").value;

    // Error Check Checking
    const errorCheck = checkError(rhombusDiagonal1Value, rhombusDiagonal2Value); // if true == error, false == no error;

    if (errorCheck == false) {
      const calculateAreaValue = 0.5 * rhombusDiagonal1Value * rhombusDiagonal2Value;
      showAreaValue(calculateAreaValue.toFixed(2), calculateAreaName); // Showing Area Value
    }
  }

  // Calculate Area for Pentagon
  else if (btnID === "pentagonAreaCalculateBtn") {
    // Getting Input Field Values
    const pentagonPerimeterValue = document.getElementById("pentagonPerimeter").value;
    const pentagonApothemValue = document.getElementById("pentagonApothem").value;

    // Error Check Checking
    const errorCheck = checkError(pentagonPerimeterValue, pentagonApothemValue); // if true == error, false == no error;

    if (errorCheck == false) {
      const calculateAreaValue = 0.5 * pentagonPerimeterValue * pentagonApothemValue;
      showAreaValue(calculateAreaValue.toFixed(2), calculateAreaName); // Showing Area Value
    }
  }

  // Calculate Area for Ellipse
  else if (btnID === "ellipseAreaCalculateBtn") {
    // Getting Input Field Values
    const ellipseAxisAValue = document.getElementById("ellipseAxisA").value;
    const ellipseAxisBValue = document.getElementById("ellipseAxisB").value;

    // Error Check Checking
    const errorCheck = checkError(ellipseAxisAValue, ellipseAxisBValue); // if true == error, false == no error;

    if (errorCheck == false) {
      const calculateAreaValue = 3.14 * ellipseAxisAValue * ellipseAxisBValue;
      showAreaValue(calculateAreaValue.toFixed(2), calculateAreaName); // Showing Area Value
    }
  }
}

// Area Name Function
function areaName(buttonID) {
  const calculateButtonID = document.getElementById(buttonID);
  const areaName = calculateButtonID.parentNode.childNodes[1].innerText;
  return areaName;
}

// Error Checking Function
function checkError(firstInput, secondInput) {
  if (firstInput == "" || secondInput == "") {
    alert("Empty input field is not allowed!\nPlease enter only positive number.");
    return true;
  } 
  else if (isNaN(firstInput) || isNaN(secondInput)) {
    alert("Please enter only number type value.");
    return true;
  } 
  else if (firstInput < 0 || secondInput < 0) {
    alert("Please enter only positive number.");
    return true;
  } 
  else {
    return false;
  }
}

// Calculated Area Value Show Function
function showAreaValue(areaValue, areaName) {
  const calculatedAreaResultID = document.getElementById("calculatedAreaResult");
  const row = calculatedAreaResultID.insertRow(); // Inserting new row for showing new calculated result
  // const rowNumber = calculatedAreaResultID.rows.length;
  row.innerHTML = `
    <td class="serialNumber"></td>
    <td>${areaName}</td>
    <td>${areaValue}cm<sup>2</sup></td>
    <td><a href="#" class="btn btn-primary fw-semibold">Convert</a></td>
    <td><a href="#" class="btn btn-danger fw-semibold">Delete</a></td>
  `;
  dynamicSerialNo(); // Dynamic Serial No Setting
}

// Dynamic Serial Number Show Function
function dynamicSerialNo() {
  const serialNumbers = document.getElementsByClassName("serialNumber");
  for (let i = 1; i <= serialNumbers.length; i++) {
    serialNumbers[i - 1].innerText = i;
  }
}

// Calculate Button Event
const calculateButtons = document.getElementsByClassName("calculateBtn");
for (const calculateButton of calculateButtons) {
  calculateButton.addEventListener("click", function (e) {
    e.preventDefault(); // Stopping page to scroll when clicked on a tag.
    const btnID = e.target.getAttribute("id"); // Getting the button id dynamically
    calculateArea(btnID); // Calculate Area Function
  });
}
