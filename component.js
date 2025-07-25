class IdCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.className = "container";

    const header = document.createElement("div");
    header.className = "header";

    const body = document.createElement("div");
    body.className = "body";

    const photoWrapper = document.createElement("div");
    photoWrapper.className = "photo-wrapper";

    const photo = document.createElement("img");
    photo.className = "photo";
    body.appendChild(photo);

    const name = document.createElement("div");
    body.appendChild(name);

    const footer = document.createElement("div");
    footer.className = "footer";

    container.appendChild(header);
    container.appendChild(body);
    container.appendChild(footer);

    shadow.appendChild(container);
  }
}

customElements.define("id-card", IdCard);
