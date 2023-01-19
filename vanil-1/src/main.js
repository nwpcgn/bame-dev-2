import './app.scss';
import './style.css';
import {
  store,
  component
} from 'reefjs';

const HTML = document.querySelector("html");

let dataStore = store({
  brand: 'nwp-app',
  theme: 'dark',
  isMod: false,
  nav_bar: [{
    name: 'Start',
    path: '/'
  }],
  article: [],
  fspace: [],
  detail: {}
});


const toggleTheme = () => {
  if (dataStore.theme === 'dark') {
    dataStore.theme = "light";
  } else {
    dataStore.theme = "dark";
  };
  localStorage.setItem("nwp-theme", dataStore.theme);
  HTML.setAttribute("data-theme", dataStore.theme);
};
const initTheme = () => {
  if (localStorage.getItem("nwp-theme")) {
    dataStore.theme = localStorage.getItem("nwp-theme");
  };
  HTML.setAttribute("data-theme", dataStore.theme)
};
const toggelModal = () => {
    if (dataStore.isMod) {
      dataStore.isMod = false;
    } else {
      dataStore.isMod = true;
    }
};

const icon1 = `<svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 17V3a7 7 0 000 14zm0 1a8 8 0 100-16 8 8 0 000 16z" clip-rule="evenodd"/></svg>`;
const icon2 = `<svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M 10,17 V 3 a -7,7 0 0 1 0,14 z m 0,1 a -8,8 0 1 1 0,-16 -8,8 0 0 1 0,16 z" clip-rule="evenodd" /></svg>`;
const themeSwitchT = (data) => `<a href="#/" data-toggle-theme role="button-x">${data.theme === 'dark' ? icon1 : icon2}</a>`;
const navBarT = (data) => `<nav class="app-bar container-fluid"><ul><li><strong>${data.brand}</strong></li></ul><ul>${data.nav_bar.map(function (link) { return `<li><a href="#${link.path}">${link.name}</a></li>`; })}<li>${themeSwitchT(data)}</li></ul></nav>`;
const articleT = (data) => `<article><header>Article</header><ul class="list">${data.article.map(function (article, id) { return `<li><a href="#/" data-detail="${id}"><div><h4>${article.title}.</h4><p>${article.body}</p></div></a></li>`; }).join('')}</ul></article>`;
const episodesT = (data) => `<article><header>Final-Space</header><ul class="list">${data.fspace.map(function (article, id) { return `<li><a href="#/" data-detail="${id}"><div class="media"><div><h4><span>${article.id}</span> - ${article.name}</h4><p>${article.director} / ${article.writer}</p></div><aside><figure><img src="${article.img_url}" alt="${article.name}"></figure></aside></div></a></li>`; }).join('')}</ul></article>`;
const detT = (data) => `
<dialog ${dataStore.isMod ? 'open' : '' }>
    <article>
        <header><a href="#/" aria-label="Close" class="close" data-toggel-modal></a> Details </header>
        <div><pre>${JSON.stringify(data.detail, null, 2)}</pre></div>
    </article>
</dialog>`;


// The template
function template1() {
  return `
  ${navBarT(dataStore)}
  <main>
      <div class="page">
      <section>
      <h1>Nwp-Studio</h1>
      <p>The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names</p>
          
              <article>
                  <header>Hello Vite!</header>
                  <p><button role="button" data-toggel-modal> Click </button></p>
                  <p class="read-the-docs"> Click on the Vite logo to learn more </p>
              </article>
              ${dataStore.fspace.length ? episodesT(dataStore) : ''}
              ${dataStore.article.length ? articleT(dataStore) : ''}
          </section>
      </div>
  </main>
  ${detT(dataStore)}
  `;
}

// The component
component('#app', template1, true);

const fetchData = (url = 'https://jsonplaceholder.typicode.com/posts') => {

  fetch(url).then(function (response) {
    return response.json();
  }).then(function (d) {
    dataStore.fspace = d;
    console.log("fetchData:", d)
  });
};

const clickHandler = (event) => {
  let el_01 = event.target.closest('[data-toggle-theme');
  if (el_01) {
    event.preventDefault();
    toggleTheme();
  }
  let el02 = event.target.closest("[data-toggel-modal]");
  if (el02) {
    event.preventDefault();
    toggelModal();
  }
  let el03 = event.target.closest("[data-detail]");
  if (el03) {
    event.preventDefault();
    let id = el03.dataset.detail;
    dataStore.detail = dataStore.fspace[id];
    toggelModal();
  }

};

const submitHandler = (event) => {
  if (event.target.matches('form')) {
    event.preventDefault();
    console.log("Form try to submit", event.target);
  }
};

// document.addEventListener('reef:render', function (event) {
//   console.log('The UI was just updated inside this element.');
//   console.log(event.target);
// });

document.addEventListener('submit', submitHandler);
document.addEventListener('click', clickHandler);

const run = () => {
  console.log("app run");
  initTheme();
  fetchData("https://finalspaceapi.com/api/v0/episode/");
};

window.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded");
  run();
});