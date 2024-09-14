// Enable strict mode to catch common coding mistakes.
"use strict";

// Selecting elements from the HTML document.
let signupContent = document.querySelector(".signup-form-content"),
  stagebtn1b = document.querySelector(".stagebtn1b"),
  stagebtn2a = document.querySelector(".stagebtn2a"),
  stagebtn2b = document.querySelector(".stagebtn2b"),
  stagebtn3a = document.querySelector(".stagebtn3a"),
  stagebtn3b = document.querySelector(".stagebtn3b"),
  stagebtn4a = document.querySelector(".stagebtn4a"),
  stagebtn4b = document.querySelector(".stagebtn4b"),
  stagebtn5a = document.querySelector(".stagebtn5a"),
  stagebtn5b = document.querySelector(".stagebtn5b"),
  signupContent1 = document.querySelector(".stage1-content"),
  signupContent2 = document.querySelector(".stage2-content"),
  signupContent3 = document.querySelector(".stage3-content"),
  signupContent4 = document.querySelector(".stage4-content"),
  signupContent5 = document.querySelector(".stage5-content");

// A function to calculate the user's age based on their date of birth.
const calcAge = function () {
  const birthDate = document.getElementById("dob");
  const today = new Date();
  const userage = today.getFullYear() - new Date(birthDate.value).getFullYear();
  return userage;
};

// Selecting radio buttons and initializing a variable to store the selected option.
const tuitionRadioY = document.getElementById("tuitionRadioY");
const tuitionRadioN = document.getElementById("tuitionRadioN");
const gicY = document.getElementById("gicY");
const gicN = document.getElementById("gicN");
let selectedOption = "";

// A function to get the selected option from radio buttons.
const getCheckedRadioBtn = function (radiobtnY, radiobtnN) {
  if (radiobtnY.checked) {
    selectedOption = "Yes";
  } else if (radiobtnN.checked) {
    selectedOption = "No";
  }

  return selectedOption;
};

// Functions to handle transitions between form stages.
const stage1to2 = function () {
  // Hide/show form content to transition between stages.
  signupContent2.classList.remove("hidden");
  signupContent1.classList.add("hidden");
  signupContent3.classList.add("hidden");
  signupContent4.classList.add("hidden");
  signupContent5.classList.add("hidden");
  document.querySelector(".stageno-1").innerText = "✔";
  document.querySelector(".stageno-1").style.backgroundColor = "#8789ff";
  document.querySelector(".stageno-1").style.color = "#fff";
};

// ... (similar code for other stages)
const stage2to1 = function () {
  signupContent2.classList.add("hidden");
  signupContent1.classList.remove("hidden");
  signupContent3.classList.add("hidden");
  signupContent4.classList.add("hidden");
  signupContent5.classList.add("hidden");
};

const stage2to3 = function () {
  signupContent2.classList.add("hidden");
  signupContent1.classList.add("hidden");
  signupContent4.classList.add("hidden");
  signupContent5.classList.add("hidden");
  signupContent3.classList.remove("hidden");
  document.querySelector(".stageno-2").innerText = "✔";
  document.querySelector(".stageno-2").style.backgroundColor = "#8789ff";
  document.querySelector(".stageno-2").style.color = "#fff";
};

const stage3to2 = function () {
  signupContent2.classList.remove("hidden");
  signupContent1.classList.add("hidden");
  signupContent3.classList.add("hidden");
  signupContent4.classList.add("hidden");
  signupContent5.classList.add("hidden");
};

const stage3to4 = function () {
  signupContent2.classList.add("hidden");
  signupContent1.classList.add("hidden");
  signupContent4.classList.remove("hidden");
  signupContent5.classList.add("hidden");
  signupContent3.classList.add("hidden");
  document.querySelector(".stageno-3").innerText = "✔";
  document.querySelector(".stageno-3").style.backgroundColor = "#8789ff";
  document.querySelector(".stageno-3").style.color = "#fff";
};

const stage4to3 = function () {
  signupContent2.classList.add("hidden");
  signupContent1.classList.add("hidden");
  signupContent3.classList.remove("hidden");
  signupContent4.classList.add("hidden");
  signupContent5.classList.add("hidden");
};

const stage4to5 = function () {
  signupContent2.classList.add("hidden");
  signupContent1.classList.add("hidden");
  signupContent4.classList.add("hidden");
  signupContent5.classList.remove("hidden");
  signupContent3.classList.add("hidden");
  document.querySelector(".stageno-4").innerText = "✔";
  document.querySelector(".stageno-4").style.backgroundColor = "#8789ff";
  document.querySelector(".stageno-4").style.color = "#fff";
};

const stage5to4 = function () {
  signupContent2.classList.add("hidden");
  signupContent1.classList.add("hidden");
  signupContent3.classList.add("hidden");
  signupContent4.classList.remove("hidden");
  signupContent5.classList.add("hidden");
};

// Event listeners for button clicks to move between stages.
stagebtn1b.addEventListener("click", stage1to2);

// ... (similar event listeners for other stages)
stagebtn2a.addEventListener("click", stage2to1);
stagebtn2b.addEventListener("click", stage2to3);
stagebtn3a.addEventListener("click", stage3to2);
stagebtn3b.addEventListener("click", stage3to4);
stagebtn4a.addEventListener("click", stage4to3);
stagebtn4b.addEventListener("click", stage4to5);
stagebtn5a.addEventListener("click", stage5to4);

// Handling dropdown menus.
const dropmenu = document.querySelectorAll(".dropdown");

dropmenu.forEach((dropdown) => {
  const select = dropdown.querySelector(".btn-details");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  // Event listener to toggle the dropdown menu.
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  // Event listener to select an option from the dropdown.
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");

      menu.classList.remove("menu-open");
    });
  });
});

// Functions to open and close a popup.
function openPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Event listener for the form submission button.
const submitForm = document.querySelector(".submit");

submitForm.addEventListener("click", () => {
  // Construct an email body using form data.
  const emailBody = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Email Template</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #696cff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #f2f2f2;
          background-color: #696cff;
          text-align: center;
        }
  
        p,
        li {
          font-size: 16px;
          line-height: 1.6;
          color: #696cff;
        }
  
        .innerContainer {
          background-color: #f2f2f2;
          padding: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Your SOP Details</h1>
        <div class="innerContainer">
          <p>Email: ${document.getElementById("email").value}</p>
          <p>
            Name: ${document.getElementById("fname").value}
            ${document.getElementById("lname").value}
          </p>
          <p>Age: ${calcAge()}</p>
          <p>
            Highest Level of Education:
            ${document.getElementById("deg").innerText}
          </p>
          <p>Institute Name: ${document.getElementById("iName").value}</p>
          <p>Specification: ${document.getElementById("sName").value}</p>
          <p>Work Experience: ${document.getElementById("Exp").value}</p>
          <p>
            Institute you get admitted to in Canada:
            ${document.getElementById("cIName").value}
          </p>
          <p>
            Your program of study in Canada:
            ${document.getElementById("pOS").value}
          </p>
          <p>Country you are from: ${
            document.getElementById("appCoun").value
          }</p>
          <p>Future goals: ${document.getElementById("futGoals").value}</p>
          <p>English Scores:</p>
          <ul>
            <li>Listening: ${document.getElementById("Listen").value}</li>
            <li>Reading: ${document.getElementById("read").value}</li>
            <li>Speaking: ${document.getElementById("speak").value}</li>
            <li>Writing: ${document.getElementById("write").value}</li>
          </ul>
          <p>
            Paid your first year tuition fee: ₹ ${getCheckedRadioBtn(
              tuitionRadioY,
              tuitionRadioN
            )}
          </p>
          <p>
            Tuition fee you paid: ${document.getElementById("tuitionFee").value}
          </p>
          <p>Do you do a GIC: ${getCheckedRadioBtn(gicY, gicN)}</p>
          <p>Amount paid for GIC: ₹ ${document.getElementById("gic").value}</p>
        </div>
      </div>
    </body>
  </html>
  `;

  // Sending an email using the Email.send() function.
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "effizient.sop.noreply@gmail.com",
    Password: "13C1576733DF1135C5C92D8E02E22FE8DB5C",
    To: document.getElementById("email").value,
    From: "effizient.sop.noreply@gmail.com",
    Subject: "Response from SOP Generator by EFFIZIENT",
    Body: emailBody,
  }).then((message) => {
    // Update the progress indicator and show a success popup.
    document.querySelector(".stageno-5").innerText = "✔";
    document.querySelector(".stageno-5").style.backgroundColor = "#8789ff";
    document.querySelector(".stageno-5").style.color = "#fff";

    openPopup();

    // Close the popup and reload the page after a delay.
    setTimeout(() => {
      closePopup();
      location.reload();
    }, 3000);
  });
});
