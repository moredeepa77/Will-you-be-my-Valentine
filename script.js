const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");

function handleYesClick() {
  window.location.href = "yes_page.html";
}

function handleNoClick() {
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Extra evil mode: also move on hover
noButton.addEventListener("mouseover", handleNoClick);
