import { LitElement, css, html } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyKasir extends LitElement {
  static get properties() {
    return {
      list: {},
      condition: {},
    };
  }

  constructor() {
    super();
    (this.title = 'Modern JAMSTACK Website Developer'),
      (this.description =
        'Built your modern JAMSTACK site with creativitas.dev'),
      (this.logo =
        'https://creativitas.github.io//assets/img/creativitaswebdev.webp'),
      (this.url = 'https://creativitas.dev'),
      (this.pos = [
        {
          title: 'Welcome To My Site',
          image: 'https://creativebydre.github.io//assets/img/image.jpg',
          info: 'If you need develop your site, blog or documentation site project you can hire me now ',
          link: 'https://creativitas.dev/services/',
          button: 'Hire Me Now',
        },
      ]);
    this.condition = true;
  }

  render() {
    return html`
      <div>
      <h2><strong><a href=${this.url} title=${this.title}>
      ${this.title}</a></strong></h2>
      <h3>${this.description}</h3>
      <div class="grid-container los bg-yellow">
      ${this.pos.map(
        (p) => html`
      <div class="grid-item">
      <a href=${p.link} title=${p.title}><img class="produk" src=${p.image} alt=${p.title}/></a>
      </div>
      <div class="grid-item p-5">
      <h3><strong><a href=${p.link} title=${p.title} class="text-dark">${p.title}</a></strong></h3>
      <p>${p.info}</p>
      <p class="pt-3"><a href=${p.link} title=${p.title} class="button">${p.button}</a></p>
      </div>`
      )}
      </div>
      <slot></slot>
</div>
    `;
  }

  static get styles() {
    return css`
    :host {
    }
    .los {padding: 5px; border: solid 1px; border-radius:50px;}
    .grid-container {
      display: grid;
      grid-template-columns: auto auto;
      padding: 10px;
    }
    .grid-item {
      padding: 20px;
    }
    img {border-radius:20px;}
    a.button {padding: 8px; border-radius:8px; background-color:black;color:white; text-decoration:none;}
    .bg-yellow {background-color:#F9FCC2;}
    .pt-3 {padding-top:15px;}
    .p-5 {padding:50px;}
    .produk {max-width:100%;}
a {text-decoration:none;}
.text-dark {color:black;}
    @media only screen and (max-width: 600px) {
     
    .grid-container {
      display: grid;
      grid-template-columns: auto;
      padding: 10px;
    }
    }
    `;
  }
}

window.customElements.define('my-kasir', MyKasir);
