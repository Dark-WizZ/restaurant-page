import './style.css';
import './font/font.css'
import PageLoad from './page-load.js';
import Menu from './menu.js'
import Contact  from './contact.js';

(function(){
  let index = {
    init: function(){
      this.domRefer();
      this.domCreate();
      this.bindElem();
      PageLoad();
    },
    domRefer: function(){
      this.content = document.querySelector('.content');
      this.home = document.querySelector('.home');
      this.menu = document.querySelector('.menu');
      this.contact = document.querySelector('.contact');

    },
    domCreate: function(){
      // console.log(this.content);
    },
    bindElem: function(){
      this.home.addEventListener('click', this.homeClick.bind(this));
      this.menu.addEventListener('click', this.menuClick.bind(this));
      this.contact.addEventListener('click', this.contactClick.bind(this));
    },
    homeClick: function() {
      this.clearContent();
      PageLoad();
    },
    menuClick: function(){
      this.clearContent();
      Menu();
    },
    contactClick: function(){
      this.clearContent();
      Contact();
    },
    clearContent: function(){
      console.log(this);
      this.content.textContent = '';
    },
  }
  index.init();
})()

