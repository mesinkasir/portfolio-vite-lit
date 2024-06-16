import { LitElement, css, html } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyToko extends LitElement {
  static get properties() {
    return {
      list: {},
      condition: {},
    };
  }

  constructor() {
    super();
    (this.title = 'Creativitas Web Themes'),
      (this.description = 'Awesome Themes Template by Creativitas'),
      (this.doclist = [
        {
          nav: 'BLACKS',
          image:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5eMTzo-d0A4p6o9OH979U7Coqu8Io1AuSsyZQo-DRahqhyphenhyphenx06euPLnFI03eSPZ89fjpkCIpuHM4f2G2Oa3EYVfJO-JAH0lvy3PR9WVdR7e1GFCBxUADj-4aCxGqSl91Puw8eISX8gqZMpgvNStjLAlMx-HVZIXxPFI8BQ0AuOtHlx8HK9A9AzYsLqm2M0/s16000/photographer%20gallery%20website%20image.jpg',
          info: 'Multipurpose Astro JS themes template',
          link: 'https://creativitas.dev/theme/astro-multipurpose/',
        },
        {
          nav: 'TEXT-X',
          image:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHZIphI-1rYH7jIIdyT88c_SPNipzIZfIZefwL7mLr1jMUMJEbEhQ9aEWIcWGtKPU1RZ4POC1ma2e3qTbrN_egIeHKjU9sAi5t5ol6I5ZlqjMjZ5PadjAQ0fHnF0JOCQbZyF1DxniprL99ssdgPXoTzLeMo1fETHg2KTiS1gcALp7FHgrxcun_KyYBe-NO/s16000/minimalist-blog-text-x.webpp',
          info: 'Minimalist Clean Flatfile CMS themes template',
          link: 'https://creativitas.dev/theme/minimalist-clean-website-themes/',
        },
        {
          nav: 'DARKCO',
          image:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi1S5suUlq2S0-K6ZKyIYX0ndWC7cs1I1qR_ZmwHqa7v9K7-ihG3ar0uU9irUeSpopO6atKgBY32Q3L5PgT7Bv_zFPtemvZ1j85enNTpM5T8r96DPSt-Vhe4dJS3l_jULFH3WyVG-kg0tA9zdLytjEvkaF7-OvgD5RgnwxP3heetrdSpGTfgDnFq2OGoS7w/s16000/dark-website-attractive-themes.webp',
          info: 'New dark mode version flatfile CMS',
          link: 'https://creativitas.dev/theme/dark-new-modern-trend-website/',
        },
        {
          nav: 'RENT CAR',
          image:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghpDqhfbD3ZR75EBcZqguS53Kq5Vh1-Z3L48-sD8TtYp23h2jMPskO8b743fQg1wuBDG8yVZJEoFNg3Y4yitT5jVMKzpdzCr-Bu2kz3gWjSN7ny7rXWg6wtTRToSe9h_vAaSgx1d2HyS2oiYLXYCfME8pozcFB2EQ2y3w1yerblV5IYi-xOXKEzoZyqSlv/s16000/astro-rent-a-car.jpg',
          info: 'Built your modern rent car website with astro js + book form',
          link: 'https://creativitas.dev/theme/astro-rent-car/',
        },
        {
          nav: 'TAILWIND BLOG',
          image:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhu-qQcnPeDbjE_V7I7B1u3wZSuBN8DJC_9rIu3oV36r90-7yMhzfjvDhsd76QSsup05ydxjcFhhSXYgR2EBGTwnKMkjWz9am4KVus_yO5mZKGdRyQwrX-h7uu7DaEVVLZGGbvQCvzESq37QOB8qHbX8VG1R2H0v6dl417uAymQskeB1WCxvsVgGJJ_bR00/s16000/tailwindcms.webp',
          info: 'Lets build your project with tailwind blog + backend admin flatfile cms',
          link: 'https://creativitas.dev/theme/tailwind-blog/',
        },
        {
          nav: 'MOBILE WEB',
          image:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXAt-H9GXV6hAqIZ5xsQhyphenhyphenRRngEeZsg03tnTTXnmifBc57MZ8c3_sHgzSkC-Fk7YV8NCLf0H8RoHKbeBceGY1JouG7pngyRP6nBKKGOX376zum0UnrMZaFD9OiW1RKn6afnOzz1H_fBHlNyTxXcDrBb4wL13lKnGMa3FhNVUsrygDvLHrIFFLEISJotyXc/s16000/mobileweb-markdown.png',
          info: 'Get start now built mobile web with markdown PHP',
          link: 'https://creativitas.dev/theme/mobile-web-markdown-php/',
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
      <div class="grid-container los bg-pink">
      ${this.doclist.map(
        (item) => html`
  <div class="grid-item">
  <a href=${item.link} title=${item.nav}><img class="produk" src=${item.image} alt=${item.nav} width="100%" height="100%" loading="lazy"/></a>
  <h3><strong><a href=${item.link} class="text-dark" title=${item.nav}>${item.nav}</a></strong></h3>
  <p>${item.info}</p>
  <p class="pt-3 pb-3"><a href=${item.link} title=${item.nav} class="button">Order ${item.nav}</a></p>
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

window.customElements.define('my-toko', MyToko);
