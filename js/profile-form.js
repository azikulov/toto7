document.addEventListener("DOMContentLoaded", () => {
  const profileForm = document.getElementById("profile-form");
  const formInputs = document.getElementById("profile__data");
  const editButtons = profileForm.querySelectorAll(".profile__edit-btn");

  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", (event) => {
      console.log(event.target.previousElementSibling.disabled);
      
      if (event.target.textContent === "Сохранить") {
        event.target.previousElementSibling.disabled = true;
        event.target.textContent = "изменить";
      } else {
        event.target.previousElementSibling.disabled = false;
        event.target.textContent = "Сохранить";
      }
    });
  });
});
