function headerMenu(el) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `<header class="header">
        <div class="header-cont">
          <img
            src="./media/Logo 719-Her menosOscuro.png"
            alt=""
            class="header__logo-header"
          />
          <div class="header__menu-movile">
            <div class="menus-movile"></div>
            <div class="menus-movile"></div>
            <div class="menus-movile"></div>
          </div>
          <div class="content-menu-pc">
            <nav class="header__menu-pc">
              <ul class="menu-pc__lista">
                <li class="menu-pc__option">
                  <a href="./portfolio.html">Portfolio</a>
                </li>
                <li class="menu-pc__option">
                  <a href="./servicios.html">Servicios</a>
                </li>
                <li class="menu-pc__option">
                  <a href="./contact.html">Contacto</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="content-menu-desplegado">
          <nav class="header__menu-desplegado">
            <div class="header__menu-desplegado__cerrar">&times;</div>
            <ul class="menu-desplegado__lista">
              <li class="menu-desplegado__option">
                <a href="./portfolio.html">Portfolio</a>
              </li>
              <li class="menu-desplegado__option">
                <a href="./servicios.html">Servicios</a>
              </li>
              <li class="menu-desplegado__option">
                <a href="./contact.html">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>`;

  const abreVentanaEl = headerEl.querySelector(".header__menu-movile");
  const cerrarVentanaEl = headerEl.querySelector(
    ".header__menu-desplegado__cerrar"
  );
  const ventanaEl = headerEl.querySelector(".header__menu-desplegado");

  abreVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "flex";
  });

  cerrarVentanaEl.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });

  el.appendChild(headerEl);
}

(function () {
  const headerImp = document.querySelector(".content-header");
  if (headerImp) headerMenu(headerImp);
})();
