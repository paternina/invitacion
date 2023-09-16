document.addEventListener("DOMContentLoaded", () => {
  const revelar = document.getElementById("revelar");
  const card = document.querySelector(".card");

  revelar.addEventListener(
    "click",
    () => {
      card.classList.remove("portada");
      card.classList.add("explosion");
      card.classList.add("revealed");

      setTimeout(() => {
        card.innerHTML = `
          <div></div>
            <div class="content w-full color-white text-right mt-2">
                <ul>
                    <li>Lugar: Restaurante Mi Tierra</li>
                    <li>Fecha: 01 Octubre, 2023</li>
                    <li>Hora: 05:00 PM</li>
                    <li>Vestimenta casual</li>
                </ul>
            </div>
            <div class="info w-full mt-4">
                <h1>¡Te esperamos!</h1>
                <h2>Luna Camacho Fernandez</h2>
              </div>
        `;

        card.classList.remove("explosion");

        const destruir = document.getElementById("destruir");
      }, 500);
    },
    { once: true }
  );
});
