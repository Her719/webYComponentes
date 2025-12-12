function bienvenida(el) {
  const welcomeEl = document.createElement("section");
  welcomeEl.innerHTML = `
    <div class="contenedor-main">
      <h1 class="main__titulo">
        <span class="main__titulo-base">Hola</span>
        <span class="main__titulo-color">soy Fulgencio</span>
      </h1>
      <p class="main__emogi">🦆</p>
    </div>
  `;
  el.appendChild(welcomeEl);

  return fetch(
    "https://cdn.contentful.com/spaces/h6lyi5ip12be/environments/master/entries?access_token=eQvpLhsKaEsakxvcnP_8DZDrUGruzCiYUDfIKiEgdaE&content_type=bienvenida"
  )
    .then((res) => res.json())
    .then((data) => {
      const bienvenidaItem = data.items.find(
        (item) => item.sys.contentType.sys.id === "bienvenida"
      );

      const fields = bienvenidaItem.fields;

      document.querySelector(".main__titulo-base").textContent = fields.titulo;

      document.querySelector(".main__titulo-color").textContent =
        fields.subtitulo;

      document.querySelector(".main__emogi").textContent = fields.emogis;
    });
}

(function () {
  const autoInvocadaWelcomeEl = document.querySelector(".main");
  if (autoInvocadaWelcomeEl) bienvenida(autoInvocadaWelcomeEl);
})();
