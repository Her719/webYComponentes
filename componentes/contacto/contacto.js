function mostraralerta(mensaje, tipo = "success") {
  const alerta = document.getElementById("alerta");

  alerta.textContent = mensaje;

  // remover clases previas
  alerta.classList.remove("hidden", "error", "show");

  // aplicar estilo según tipo
  if (tipo === "error") {
    alerta.classList.add("error");
  }

  // mostrar
  setTimeout(() => alerta.classList.add("show"), 10);

  // ocultar después de 3 segundos
  setTimeout(() => {
    alerta.classList.remove("show");
    setTimeout(() => alerta.classList.add("hidden"), 300);
  }, 3000);
}

function formContact(el) {
  const componentEl = document.createElement("section");
  componentEl.innerHTML = `<div class="contacto__contenedor">
        <h2 class="contacto__title">Escribime</h2>
        <form action="" class="formulario">
          <div class="form__cont-name-email">
            <label class="formulario__label-nombre form-tipografia"
              >Nombre
              <input
                class="formulario__input-nombre form-tipografia"
                placeholder="Tu nombre"
                type="name"
                name="name"
              />
            </label>
            <label class="formulario__label-email form-tipografia"
              >Email
              <input
                class="formulario__input-email form-tipografia"
                placeholder="tu@mail.com"
                type="email"
                name="email"
              />
            </label>
          </div>
          <label class="formulario__label-mensaje form-tipografia"
            >Mensaje<br />
            <textarea
              class="formulario__input-mensaje form-tipografia"
              type="text"
              name="mensaje"
            ></textarea
            ><br />
          </label>
          <button type="submit" class="formulario__boton form-tipografia">
            Enviar
            <p class="boton_emoji">📨</p>
          </button>
        </form>
        <div id="alerta" class="alerta hidden">Mensaje enviado correctamente ✔️</div>
      </div>`;

  const formularioEl = componentEl.querySelector(".formulario");
  formularioEl.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const formu = evento.target;
    const nombre = formu.name.value;
    const email = formu.email.value;
    const comentario = formu.mensaje.value;

    fetch("https://apx.school/api/utils/email-to-student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "vanyher14@gmail.com",
        message: `Nuevo mensaje de Contacto:
          Nombre: ${nombre},
          Email: ${email},
          Mensaje: ${comentario}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Mensaje enviado!:", data);
        formu.reset();

        // 🟢 alerta de éxito
        mostraralerta("Mensaje enviado correctamente ✔️", "success");
      })
      .catch((error) => {
        console.error("Error:", error);

        // 🔴 alerta de error
        mostraralerta("No se pudo enviar el mensaje ❌", "error");
      });
  });
  el.appendChild(componentEl);
}

(function () {
  const contactoEl = document.querySelector(".contacto");
  if (contactoEl) formContact(contactoEl);
})();
