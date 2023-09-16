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
            <div class="content w-full text-right mt-2">
                <ul>
                    <li class="font-dancing">Restaurante: Mi Tierra</li>
                    <li class="font-dancing">Dirección: Cra. 53 #53 - 90</li>
                    <li class="font-dancing">Fecha: 01 Octubre, 2023</li>
                    <li class="font-dancing">Hora: 05:00 PM</li>
                    <li class="font-dancing">Vestimenta formal (No Jeans)</li>
                </ul>
            </div>
            <div class="info w-full mt-4">
                <h1 class="font-dancing expanded">¡Te esperamos!</h1>
                <h2>Luna Camacho Fernandez</h2>
              </div>
        `;

        card.classList.remove("explosion");
      }, 500);
    },
    { once: true }
  );
});
