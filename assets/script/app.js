'use strict';

//Account dialogue functiions
const loginButton = document.querySelector('.login-button');
const login = document.querySelector('.log-in');
const formBox = document.querySelector('.form-box');
const darkBkg = document.querySelector('.dark-background');

function showCreateAccount() {
    login.classList.remove("hidden");
    login.classList.add("shown");
    formBox.classList.add("translateY");
    console.log('test');
}
function hideCreateAccount() {
    login.classList.remove("shown");
    login.classList.add("hidden");
    formBox.classList.remove("translateY");
}
loginButton.addEventListener("click", showCreateAccount);
darkBkg.addEventListener("click", hideCreateAccount);
formBox.addEventListener("click", (event) => {
    event.stopPropagation();
});

//Email validation
function isEmail(email) {
    let hasAt = false;
    let hasDot = false;
    for(let i = 0; i < email.length-5; i++) {
        if(email.charAt(i) === '@') {
            hasAt = true;
            i = email.length+1
        }
    }
    if(email.charAt(email.length-3) === '.' || email.charAt(email.length-4) === '.')
        hasDot = true;
    if(hasAt && hasDot)
        return true;
    return false;
}

const footerButton = document.querySelector(".footer-button");
const footerEmail = document.querySelector(".footer-email");
const dialogueEmail = document.querySelector(".email");
const dialogueButton = document.querySelector(".button");
const dialogueFirstName = document.querySelector('.fname');
const dialogueLastName = document.querySelector('.lname');
const passField = document.querySelector('.password');
const passText = document.querySelector('.pass-text');

function validateEmail(event, form) {
    event.preventDefault();
    let email = form.value;
    let validEmail = false;
    if(email != "") {
        validEmail = isEmail(email);
    }
    if(validEmail) {
        form.style.borderColor = "rgb(23, 216, 23)";
        return true;
    }
    else {
        form.style.borderColor = "rgb(250, 49, 49)";
        return false;
    }
}
footerButton.addEventListener("click", (evnt) => {
    validateEmail(evnt, footerEmail);
});

//Password/name validation
function validName(name) {
    if(name.value != '' && name.value.length > 1) {
        name.style.borderColor = "rgb(23, 216, 23)";
        return true;
    }
    else {
        name.style.borderColor = "rgb(250, 49, 49)";
        return false;
    }
}
function validPassword() {
    if(passField.value.length < 5) {
        passText.classList.remove('hide-password-text');
        passField.style.borderColor = "rgb(250, 49, 49)";
        return false;
    }
    else {
        passText.classList.add('hide-password-text');
        passField.style.borderColor = "rgb(23, 216, 23)";
        return true;
    }
}
function defualtBorders() {
    passField.style.borderColor = "rgba(0, 0, 0, 0.229)";
    dialogueFirstName.style.borderColor = "rgba(0, 0, 0, 0.229)";
    dialogueLastName.style.borderColor =  "rgba(0, 0, 0, 0.229)";
    dialogueEmail.style.borderColor = "rgba(0, 0, 0, 0.229)";
}
function hideAndRemove() {
    hideCreateAccount();
    defualtBorders();
    passField.value = '';
    dialogueFirstName.value = '';
    dialogueLastName.value = '';
    dialogueEmail.value = '';
}
dialogueButton.addEventListener("click", (evnt) => {
    let email = validateEmail(evnt, dialogueEmail);
    let firstName = validName(dialogueFirstName);
    let lastName = validName(dialogueLastName);
    let password = validPassword();
    if(email && firstName && lastName && password) {
        setTimeout(hideAndRemove, 600);
    }
});
//End Verification

//Top movies scroll
//Did this to adjust for mouse scrolling.
const topMoviesDiv = document.querySelector(".top-ten-movies");
topMoviesDiv.addEventListener('wheel', function(event) {
    event.preventDefault();
    topMoviesDiv.scrollLeft += event.deltaY;
});

// SCROLL LANDING-PAGE //
const container = document.querySelector(".scroll");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const arrows = document.querySelectorAll(".scroll-button");
let currentIndex = 0;
const boxes = document.querySelectorAll(".box");

function scrollRight() {
  currentIndex++;
  if (currentIndex >= boxes.length) {
    currentIndex = 0;
  }
  const nextBox = boxes[currentIndex];
  container.scroll({
    left: nextBox.offsetLeft,
    behavior: "smooth"
  });
}

function scrollLeft() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = boxes.length - 1;
  }
  const previousBox = boxes[currentIndex];
  container.scroll({
    left: previousBox.offsetLeft,
    behavior: "smooth"
  });
}
rightButton.addEventListener("click", scrollRight);
leftButton.addEventListener("click", scrollLeft);
// END SCROLL LANDING-PAGE

// SCROLL-LANDING ARROW VISIBILITY 
function showButtons() {
    leftButton.classList.add("visible");
    rightButton.classList.add("visible");
}

function hideButtons() {
    leftButton.classList.remove("visible");
    rightButton.classList.remove("visible");
}

container.addEventListener('mouseover', showButtons);
container.addEventListener('mouseout', hideButtons);

leftButton.addEventListener('mouseover', showButtons);
rightButton.addEventListener('mouseover', showButtons);

leftButton.addEventListener('mouseout', hideButtons);
rightButton.addEventListener('mouseout', hideButtons);
// END SCROLL-LANDING ARROW VISIBILITY 