// let count = 1;
// document.getElementById("radio1").checked = true;

// setInterval(nextImage, 2000);

// function nextImage(){
//     count++;
//     if(count > 4){
//         count = 1;
//     }
//     document.getElementById("radio" + count).checked = true;
// }

window.onload = function () {
    const githubContainer = document.querySelector(".github");

    fetch("https://api.github.com/users/GabrielMilczwski/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao tentar conexão com o GitHub");
        }
        return response.json();
      })
      .then((data) => {
        data.forEach((repo) => {
          const existingCard = document.createElement("div");
          existingCard.classList.add("container");
          existingCard.classList.add("box");

          const html = `
            <h4>${repo.name}</h4>
            <p>${repo.description || "Sem descrição"}</p>
            <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>`;
          
          existingCard.innerHTML = html;
          githubContainer.appendChild(existingCard);
        });
      })
      .catch((error) => console.error("Erro:", error));
};