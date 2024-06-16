import { LitElement, css, html } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyFooter extends LitElement {
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
      (this.info = 'creativebydre@gmail.com'),
      (this.condition = true);
  }

  render() {
    return html`
      <div>
        <a href=${this.url} title=${this.title}>
          <img src=${this.logo} class="logo" alt=${this.title} loading="lazy"/>
        </a>
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <p>${this.info}</p>        
  <p><a href=${this.home} class="black">${this.home}</a></p>
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

window.customElements.define('my-footer', MyFooter);
