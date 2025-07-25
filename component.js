class IdCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const text = document.createElement("p");
    text.textContent = "Hello world!";

    shadow.appendChild(text);
  }
}

customElements.define("id-card", IdCard);
