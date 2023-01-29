document.addEventListener("DOMContentLoaded", () => {
  const profileForm = document.getElementById("profile-form");
  const formInputs = document.getElementById("profile__data");
  const editButtons = profileForm.querySelectorAll(".profile__edit-btn");

  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", (event) => {
      if (event.target.textContent === "Сохранить") {
        event.target.previousElementSibling.disabled = true;
        event.target.textContent = "изменить";
        event.target.type = "submit";
      } else {
        event.target.previousElementSibling.disabled = false;
        event.target.previousElementSibling.focus();
        event.target.textContent = "Сохранить";
        event.target.type = "button";
      }
    });
  });
});
