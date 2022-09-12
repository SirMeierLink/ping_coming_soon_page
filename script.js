const input = document.querySelector("form input");
const button = document.querySelector("form button");
const error_msg = document.querySelector(".input-box p");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    error();
  } else if (!isEmail(input.value)) {
    error();
  } else {
    success();
  }
});

function error() {
  error_msg.style.display = "block";
  input.classList.add("border-error");
  input.placeholder = "example@email.com";
  input.classList.add("example");
}

function success() {
  error_msg.style.display = "none";
  input.value = "";
  input.classList.remove("border-error");
  input.classList.remove("example");
  input.placeholder = "Your email address...";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
