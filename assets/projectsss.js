let cards = document.querySelectorAll(".card");
for (let card of cards) {
  let see_more = card.querySelectorAll(".up-card")[0];
  let back_grey = card.querySelectorAll(".bottom-card")[0];
  let img = card.querySelectorAll(".img-card")[0];
  let real_content = document.createElement("div");
  real_content.className = "real-content";
  real_content.innerHTML =
    "<h1>Title</h1><div class=\"text-card\"> This is the first website that i built using HTML and CSS</div><div class=\"technos\"><span lang='HTML'>HTML5</span><span lang='CSS'>CSS3</span></div><div class=\"label-collabs\">Collaborateurs : </div><div class=\"collabs\"><span user='1'>Correia-Mateus Dorian</span><span user='2'>Munoz Matteo</span></div><button class='go' href='facebook.fr'><span>Github Link</span></button>";

  if (see_more != null)
    see_more.onclick = function (e) {
      if (see_more.classList.contains("expand")) {
        img.classList.remove("expand");
        see_more.classList.remove("expand");
        back_grey.classList.remove("expand");
        see_more.innerText = "see more ...";
        real_content.classList.remove("expand");
        setTimeout(() => {
          card.removeChild(real_content);
        }, 400);
      } else {
        img.classList.add("expand");
        see_more.classList.add("expand");
        see_more.innerText = "see less ...";
        back_grey.classList.add("expand");
        card.appendChild(real_content);
        setTimeout(() => {
          real_content.classList.add("expand");
        }, 30);
      }
    };
}
