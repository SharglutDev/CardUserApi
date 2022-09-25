const cards = document.querySelector("#cards");
const previousArrow = document.querySelector("#previous");
const nextArrow = document.querySelector("#next");
const arrows = document.querySelectorAll(".arrow");

let pageDisplayed = 1;

const fetchData = async (pageNum) => {
  const response = await fetch(`https://reqres.in/api/users?page=${pageNum}`);
  const data = await response.json();
  console.log(data);
  data.data.map((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);
    card.innerHTML = `
        <div class="avatar">
            <img src="${user.avatar}" alt="avatar" />
        </div>
        <div class="user-description">
            <h2 class="name">${user.first_name} ${user.last_name}</h2>
            <span class="email">${user.email}</span>
            <span class="id">id : ${user.id}</span>
        </div>
      `;
  });
};
fetchData();

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.id === "next" && pageDisplayed === 1) {
      cards.innerHTML = "";
      pageDisplayed++;
      fetchData(pageDisplayed);
      previousArrow.classList.remove("disabled");
      nextArrow.classList.add("disabled");
    } else if (arrow.id === "previous" && pageDisplayed === 2) {
      cards.innerHTML = "";
      pageDisplayed--;
      fetchData(pageDisplayed);
      previousArrow.classList.add("disabled");
      nextArrow.classList.remove("disabled");
    }
  });
});
