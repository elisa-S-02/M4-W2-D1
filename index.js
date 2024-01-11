console.log("pippo");

const albumFoto = function (query, id) {
  const section = document.querySelector(`#${id}`);

  fetch("https://api.pexels.com/v1/search?query=" + query, {
    headers: {
      Authorization: "NHvfRaqwagAt1vyd4c88InJrgEKcXd9WenCJk4qk3Dz4bevcfRmr6ULK",
    },
  })
    .then((raw) => {
      return raw.json();
    })
    .then((res) => {
      console.log(res);
      let foto = res.photos;
      section.classList.remove("d-none");
      for (let i = 0; i < foto.slice(0, 4).length; i++) {
        const element = foto[i];
        section.innerHTML += `<img class='w-100' src='${element.src.landescape}'/>`;
      }
    });
};
window.onload = function () {
  albumFoto("nature", "natura");
  albumFoto("people", "persone");
  albumFoto("cats", "gatti");
};
