function seccionPortfolio(el) {
  const portfolioEl = document.createElement("section");
  portfolioEl.innerHTML = `<h3 class="servicios__titulo">
        Mis <span class="servicios_titulo-color">Trabajos</span>
      </h3>
      <div class="contenedor-servicios"></div>
      <template id="template-contenido-servicios">
        <div class="servicios_contenedor-cards">
          <img
            src="./media/image-perfil-cortada.png"
            alt=""
            class="servicio__card-img"
          />
          <h4 class="servicio__card-servicio">Desarrollo Paginas Web</h4>
          <p class="servicio__servicio-descripcion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            tempora veritatis veniam pariatur laborum quasi praesentium vero!
            Quo corporis, rem pariatur nulla accusantium aspernatur similique
            saepe minima iusto vero dolorum?
          </p>
          <button class="servicio__btn-mas-descripcion">Ver más</button>
        </div>
      </template>`;

  el.appendChild(portfolioEl);
}
// AUTOINVOCADA PARA QUE SE IMPORTE EL MODULO SIN ROMPER SI NO SE INVOCA
(function () {
  const serviciosImp = document.querySelector(".portfolio");
  if (serviciosImp) seccionPortfolio(serviciosImp);
})();

function addWorkCard(params = {}) {
  const contenedor = document.querySelector(".contenedor-servicios");
  const template = document.querySelector("#template-contenido-servicios");

  template.content.querySelector(".servicio__card-servicio").textContent =
    params.title;

  template.content.querySelector(
    ".servicio__servicio-descripcion"
  ).textContent = params.description;

  template.content.querySelector(".servicio__card-img").src = params.image;

  const clone = document.importNode(template.content, true);
  contenedor.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/h6lyi5ip12be/environments/master/entries?access_token=eQvpLhsKaEsakxvcnP_8DZDrUGruzCiYUDfIKiEgdaE&content_types/servicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const assets = data.includes.Asset;
      const trabajos = data.items.filter(
        (item) => item.sys.contentType.sys.id === "portfolioTrabajo719Her"
      );

      const fieldsCollection = trabajos.map((item) => {
        const imageId = item.fields.imagen.sys.id;
        const imageObj = assets.find((asset) => asset.sys.id === imageId);
        const imageUrl = imageObj ? "https:" + imageObj.fields.file.url : "";
        return {
          title: item.fields.titulo,
          description: item.fields.descripcion,
          image: imageUrl,
        };
      });

      return fieldsCollection;
    });
}

function main() {
  getWorks().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }

    masDescripcion();
  });
}

main();

// ACOMODAR PARA QUE FUNCIONE
function masDescripcion() {
  const buttons = document.querySelectorAll(".servicio__btn-mas-descripcion");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const description = btn.previousElementSibling;

      description.classList.toggle("expanded");

      // Cambiar texto del botón
      if (description.classList.contains("expanded")) {
        btn.textContent = "Ver menos";
      } else {
        btn.textContent = "Ver más";
      }
    });
  });
}
