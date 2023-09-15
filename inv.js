document.addEventListener("DOMContentLoaded", () => {
  const revelar = document.getElementById("revelar");
  const card = document.querySelector(".card");

  revelar.addEventListener(
    "click",
    () => {
      card.classList.add("explosion");

      setTimeout(() => {
        card.innerHTML = `
            <div>
                <h1 class="title">¡Estás invitado!</h1>
                <h2 class="subtitle">Luna Camacho Fernandez</h2>
            </div>
            <div class="content">
                <ul>
                    <li>Lugar: Mi Tierra, restaurante</li>
                    <li>Fecha: 01 Octubre, 2023</li>
                    <li>Hora: 05:00 PM</li>
                    <li>Vestimenta casual</li>
                </ul>
            </div>
            <div class="footer">
                <button id="destruir">Destruir</button>
            </div>
        `;

        card.classList.remove("explosion");

        const destruir = document.getElementById("destruir");

        destruir.addEventListener(
          "click",
          () => {
            card.classList.add("explosion");

            setTimeout(() => {
              card.innerHTML = `
                    <h1 class="title">Mensaje destruido</h1>
                    <p>¡Ya no puedes verme más!</p>
                    <button id="revelar" disabled>¡Bloqueado!</button>
                `;

              card.classList.remove("explosion");
            }, 500);
          },
          { once: true }
        );
      }, 500);
    },
    { once: true }
  );
});
