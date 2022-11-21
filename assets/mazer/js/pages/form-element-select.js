let choices = document.querySelectorAll(".choices");
let initChoice;
choices.forEach(ch => {
  if (ch.classList.contains("multiple-remove")) {
      initChoice = new Choices(ch, {
          delimiter: ",",
          editItems: true,
          maxItemCount: -1,
          removeItemButton: true,
      })
  } else {
      initChoice = new Choices(ch)
  }
});
