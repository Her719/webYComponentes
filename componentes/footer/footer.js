function elFooter(el) {
  const footerEl = document.createElement("section");
  footerEl.innerHTML = `<section class="footer">
  <div class="contenedor__footer">
        <img
          src="./media/Logo 719-Her menosOscuro.png"
          alt=""
          class="footer__logo-footer"
        />
        <div class="content__footer__menu">
          <a href="./index.html" class="footer-menu"
            ><p class="footer__logo-menu">🏠</p>
            Home</a
          >
          <a href="./servicios.html" class="footer-menu"
            ><p class="footer__logo-menu">👤</p>
            Servicios</a
          >
          <a href="./contact.html" class="footer-menu"
            ><p class="footer__logo-menu">📞</p>
            Contacto</a
          >
        </div>
        <div class="content__footer-redes">
          <img
            src="./media/logo-linkedin.png"
            alt=""
            class="footer__logo-redes"
          />
          <img
            src="./media/logo-github.png"
            alt=""
            class="footer__logo-redes"
          />
          <img
            src="./media/logo-twitter.png"
            alt=""
            class="footer__logo-redes"
          />
        </div>
        <span class="footer__registro-legal">
          ©2025
          <a href="" class="footer__registro-legal__link">
            https://apx.school</a
          >
        </span>
      </div>
      </section>`;

  el.appendChild(footerEl);
}

(function () {
  const footerImp = document.querySelector(".footer-p");
  if (footerImp) elFooter(footerImp);
})();
