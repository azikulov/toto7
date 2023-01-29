document.addEventListener("DOMContentLoaded", () => {
  const editButtons = document.querySelectorAll(
    ".tbody-future-circulation tr td:nth-child(3)"
  );

  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", (event) => {
      let target = event.target;
      let firstInput = target.parentElement.previousElementSibling.firstElementChild;
      let secondInput =
        target.parentElement.previousElementSibling.previousElementSibling
          .firstElementChild;

      if (event.target.textContent === "Сохранить") {
        firstInput.disabled = true;
        secondInput.disabled = true;
        event.target.textContent = "редактировать";
        event.target.type = "submit";
      } else {
        firstInput.disabled = false;
        secondInput.disabled = false;
        firstInput.focus();
        event.target.textContent = "Сохранить";
        event.target.type = "button";
      }
    });
  });

  const commpletedEditionEditButtons = document.querySelectorAll(
    "#form-completed-edition tbody tr td:nth-child(4)"
  );

  commpletedEditionEditButtons.forEach((editButton) => {
    editButton.addEventListener("click", (event) => {
      let target = event.target;
      let firstInput =
        target.parentElement.previousElementSibling.previousElementSibling
          .firstElementChild;
      let secondInput =
        target.parentElement.previousElementSibling.previousElementSibling
          .previousElementSibling.firstElementChild;

      if (event.target.textContent === "Сохранить") {
        firstInput.disabled = true;
        secondInput.disabled = true;
        event.target.textContent = "редактировать";
        event.target.type = "submit";
      } else {
        firstInput.disabled = false;
        secondInput.disabled = false;
        firstInput.focus();
        event.target.textContent = "Сохранить";
        event.target.type = "button";
      }
    });
  });
});