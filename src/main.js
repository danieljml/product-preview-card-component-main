const btn = document.querySelector(".rside__btn");

btn.addEventListener("click", () => {
  const res = prompt("Are you gonna buy?/press y or n");
  if (res === "y" || res === "yes" || res === "Y") {
    return alert("Thanks for buying with us ✨");
  }
  return alert("😥");
});
