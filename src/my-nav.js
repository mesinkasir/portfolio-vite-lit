import { LitElement, css, html } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyNav extends LitElement {
  static get properties() {
    return {
      list: {},
      condition: {},
    };
  }

  constructor() {
    super();
    (this.title = 'Creativitas Web Developer'),
      (this.description =
        'Built and Develope your site with modern technology JAMSTACK Static Site Generator + auto SEO injection'),
      (this.logo =
        'https://creativitas.github.io//assets/img/creativitaswebdev.webp'),
      (this.url = 'https://creativitas.dev'),
      (this.home = 'https://creativitas.dev'),
      (this.info =
        'Select your favorite technology 11ty Eleventy , Jekyll , Astro Js, React Js, Next Js, Gatsby Js , Svelte Kit, Angular , Pelican, Docusaurus, Mkdocs, Docfx, Sphinx , Starlight Js '),
      (this.condition = true);
  }

  render() {
    return html`
      <div>
  <p><a href=${this.home} class="black">${this.home}</a></p>
        <a href=${this.url} title=${this.title}>
          <img src=${this.logo} class="logo" alt="Creativitas" />
        </a>
        <h1>${this.title}</h1>
        <h2>${this.description}</h2>
        <p>${this.info}</p>
      </div>
     <slot></slot>
    `;
  }

  static get styles() {
    return css`
      :host {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
        border-radius:50px;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .black {color:black;}
      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

    `;
  }
}

window.customElements.define('my-nav', MyNav);
