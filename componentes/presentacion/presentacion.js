function presentacion(el) {
  const presentationEl = document.createElement("section");
  presentationEl.innerHTML = `
    <div class="contenedor-perfil">
        <div class="perfil__contenedor-presentacion">
          <h2 class="perfil__presentacion-titulo">Soy Fulgencio</h2>
          <p class="perfil__presentacion-descripcion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit qui
            ducimus, provident enim, sunt consectetur beatae sint rerum quam ex
            odio. Nihil natus fugit cupiditate eum eos autem repellendus
            accusantium.
          </p>
        </div>
        <img
          src="./media/image-perfil-cortada.png"
          alt=""
          class="perfil__presentacion-img"
        />
      </div>
  `;
  el.appendChild(presentationEl);

  return fetch(
    "https://cdn.contentful.com/spaces/h6lyi5ip12be/environments/master/entries?access_token=eQvpLhsKaEsakxvcnP_8DZDrUGruzCiYUDfIKiEgdaE&content_type=presentacion"
  )
    .then((res) => res.json())
    .then((data) => {
      const presentacionEl = data.items.find(
        (item) => item.sys.contentType.sys.id === "presentacion"
      );
      const assets = data.includes.Asset;
      const fields = presentacionEl.fields;

      const imageId = fields.imagen.sys.id;
      const imageObj = assets.find((asset) => asset.sys.id === imageId);
      const imageUrl = imageObj ? "https:" + imageObj.fields.file.url : "";

      document.querySelector(".perfil__presentacion-titulo").textContent =
        fields.titulo;

      document.querySelector(".perfil__presentacion-descripcion").textContent =
        fields.descripcion;

      document.querySelector(".perfil__presentacion-img").src = imageUrl;
    });
}

(function () {
  const autoInvocadaPresentacion = document.querySelector(".perfil");
  if (autoInvocadaPresentacion) presentacion(autoInvocadaPresentacion);
})();
