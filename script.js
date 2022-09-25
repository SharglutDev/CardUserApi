const container = document.querySelector(".container");

const fetchData = async () => {
  const response = await fetch("https://reqres.in/api/users?page=1");
  const data = await response.json();
  return data;
};

const displayData = async () => {
  const data = await fetchData();
  data.data.map((user, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);
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

displayData();
