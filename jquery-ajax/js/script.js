const data = [
  {
    firstName: "Ejercico 1 gitHub",
    link: "https://github.com/Diegoperezvila/ejerciciogit",
  },
  {
    firstName: "Taller",
    link: "https://github.com/Diegoperezvila/Taller",
  },
  {
    firstName: "Git",
    link: "https://github.com/Diegoperezvila/GIT",
  },
];

$(function () {
  var users = data;
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var firstName = user.firstName;
    var link = user.link;

    var cardHTML = `
      <main class="profile-card">
        <div class="details">
          <h1 class="name">${firstName}</h1>
        </div>
      </main>
    `;

    // Crear un enlace <a> alrededor de cada tarjeta
    var $card = $(cardHTML);
    var $link = $('<a>').attr('href', link).append($card);

    $(".user-grid").append($link);
  }
});
