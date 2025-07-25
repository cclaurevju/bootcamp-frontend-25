class IdCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.style.borderStyle = "solid";
    container.style.borderWidth = "5px";
    container.style.borderColor = "black";
    container.style.aspectRatio = "9/10";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "space-between";
    // container.style.width = "300px";

    const header = document.createElement("div");
    header.style.width = "100%";

    const brand = document.createElement("img");
    brand.src = "static/brand.png";
    brand.style.width = "100%";
    header.appendChild(brand);

    const body = document.createElement("div");
    body.style.backgroundColor = "#282828";
    body.style.width = "100%";
    body.style.height = "100%";
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.alignItems = "center";
    body.style.justifyContent = "space-evenly";

    const photo = document.createElement("img");
    photo.src = "static/photo.png";
    photo.style.overflow = "hidden";
    photo.style.borderRadius = "10%";
    photo.style.aspectRatio = "9/10";
    photo.style.width = "70%";
    body.appendChild(photo);

    const name = document.createElement("div");
    name.textContent = "Bart Simpson";
    name.style.textAlign = "center";
    name.style.color = "white";
    name.style.fontWeight = "900";
    name.style.fontSize = "10vw";
    body.appendChild(name);

    const footer = document.createElement("div");
    footer.style.width = "100%";

    footer.style.backgroundColor = "#ee283f";

    const role = document.createElement("p");
    role.textContent = "Developer";
    role.style.textAlign = "center";
    role.style.color = "white";
    role.style.fontWeight = "900";
    role.style.fontSize = "10vw";
    role.style.margin = "5%";
    footer.appendChild(role);

    container.appendChild(header);
    container.appendChild(body);
    container.appendChild(footer);

    shadow.appendChild(container);
  }
}

customElements.define("id-card", IdCard);
