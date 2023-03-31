function moveNewToYouButton() {
  window.addEventListener('load', function () {
    const buttonsRow = document.querySelector("#chips");
    const newToYouButton = buttonsRow
          .querySelector("yt-chip-cloud-chip-renderer:last-child");
    buttonsRow.prepend(newToYouButton);
    newToYouButton.click();
  });
}

moveNewToYouButton();
