import { LitElement, css, html } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyResto extends LitElement {
  static get properties() {
    return {
      list: {},
      condition: {},
    };
  }

  constructor() {
    super();
    (this.title = 'Creativitas Services'),
      (this.description =
        'Website Blog and Documentation Site Developer Services'),
      (this.doclist = [
        {
          nav: 'Static Site Generator',
          image:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfA78a30lyyYdC_WkOIbyyWbN-tBwzZYIychcTCUO8BYauQQaOOQ5qOU0sZGLuXKffU-CFQq4ryix3cnQavq3iRPQz3seMfO0wvZS7q_y-2EAG9pH3twZeoM-tUIMP5ZmC_YDTEZ6I-0CVbASnpLvYciifoacqx-GATfbiWQgxiUig5s5qBQ7_6rJJdhl7/s16000/design-your-modern-website-using-jekyll.png',
          info: 'Develop your jamstack sratic site generator 11ty jekyll astro js or python pelican',
          link: 'https://creativitas.dev/service/build-develop-website-with-jekyll-eleventy-astro-static-site-generator/',
        },
        {
          nav: 'React Website',
          image:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6F58REuurEQKxtw_OmrmaDBtweibKE1duZMsWD3SaCeijFV1OxkbouUO7jnAKvPnU3EBRf5ceEKDZiktzplVDst8aNDY6SJJO8ozzisDJ7JrOhAWxODtjBLpiZcAOMrYsFk6tqk39cJuJKYFeMsGqSqfFK7stDJ4T4vn4aZ6mare1o7kNcB67VWUWaI-f/s16000/create-your-website-with-new-technology.jpg',
          info: 'Develop your website project with modern web react js, next js, gatsby js',
          link: 'https://creativitas.dev/service/react-website-blog-dev-next-gatsby-remix/',
        },
        {
          nav: 'Documentation Site',
          image:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoZvF9eZKlu1_EHyqnoAxCampTNf61j1i54EJdej90ZDyIjSs_rAOn6q4FprXQ1cUydWRrgPOexYEV4DILihkITW0PNjBwULKAnZjCP_G_M1zHeaM-V4fFjEwkm3Mo6m4UOT5z2L94jY1cu4aTahzVf1KbO-XmsD5BLT2MCyq90HoP9eTEPqQWOprAaMIJ/s16000/design-modern-documentation-website-astro-js-stalight.jpg',
          info: 'Develope your documentation website with docusaurus, starlight, mkdocs, sphinx, docfx',
          link: 'https://creativitas.dev/service/documentation-website-developer/',
        },
        {
          nav: 'PWA Website',
          image:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnkJJMCaH6aJwVHfYC1cel93BweXycLofI-DUw-TXJpURf9uhAEAYu4JRpTsQ9TutNAgym8U7oworHe1i_W8HtGJQ_rQkV76-3q4Yppf8mbotrzuXYynbww_EnRQKspROrcXzMdKF3Tx2Cw3s21MbwcBhdOvfegZGLR5zqH8FfFuASAf3-i62hqVdBzP-s/s16000/design-your-website-with-progresive-web-application.jpg',
          info: 'Develop your modern PWA website with Svelte kit, Angular, Blazor WASM',
          link: 'https://creativitas.dev/service/modern-pwa-website-angular-svelte-blazor/',
        },
        {
          nav: 'Full SEO Website',
          image:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEit-MAEBgk8hW3wvroNdD1Nc3owfEqabTPJ9_73X-AN3Hd2cWYAmC8mwsy-VVM7Nx9KXIeNBwWMPT7rwwndrXFDAZElv6PMtA4ibFujhtHHRCGTGXcqgi7tOuTuU0ME5j2M50Yni673rfflzn48uqIcPurO9YtjEhyphenhyphenTLSb9Owi8SwaYRKDne9mEilDQNq09/s16000/create-your-custom-website-and-app.jpg',
          info: 'Let build your custom website with full SEO injection script',
          link: 'https://creativitas.dev/service/custom-website-seo-developer/',
        },
      ]);
    this.condition = true;
  }

  render() {
    return html`
      <div class="pt-5">
      <h2><strong><a href=${this.url} title=${this.title}>
      ${this.title}</a></strong></h2>
      <h3>${this.description}</h3>
      <div class="grid-container los bg-blue">
      ${this.doclist.map(
        (item) => html`
  <div class="grid-item">
  <a href=${item.link} title=${item.nav}><img class="produk" src=${item.image} alt=${item.nav} width="100%" height="100%" loading="lazy"/></a>
  <h3><strong><a href=${item.link} class="text-dark" title=${item.nav}>${item.nav}</a></strong></h3>
  <p>${item.info}</p>
  <p class="pt-3 pb-3"><a href=${item.link} title=${item.nav} class="button">${item.nav}</a></p>
  </div>`
      )}
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
    .center {margin:auto;}
    a.button {padding: 8px; border-radius:8px; background-color:black;color:white; text-decoration:none;}
    a {text-decoration:none;}
    .text-dark {color:black;}
    .bg-pink {background-color:#FCD0FD;}
    .bg-blue {background-color:#D0FAFD;}
    .pt-3 {padding-top:15px;}
    .pt-3 {padding-bottom:15px;}
    .pt-5 {padding-top:50px;}
    .p-5 {padding:50px;}
    .produk {max-width:100%;height:250px; object-fit:cover;}
img {border-radius:20px;}
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

window.customElements.define('my-resto', MyResto);
