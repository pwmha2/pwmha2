class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Macias Herrera Alejandro
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
