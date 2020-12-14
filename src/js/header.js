//-- этот import нужно подключать в каждый файл, чтобы jquery работала
// import $ from "jquery";
// ------------------------------------------------


let wrapper = document.querySelector(".wrapper");
let header = document.querySelector(".header__body");
let headerOverlay = document.querySelector(".header__menu_overlay");
let burger = document.querySelector(".header__burger");
let close2 = document.querySelector(".icon-close2");
let phone = document.querySelector(".header__phone");
let body = document.body;
let menu = document.querySelector("#header__menu");
let phoneLink = document.querySelector(".header__phone-link");
let headerSearch = document.querySelector(".header__search");

wrapper.addEventListener("click", function (event) {
  
  
  if (event.target == burger) {
    menu.classList.add("header__menu_act");
    phoneLink.classList.add("header__phone_act");
    headerSearch.classList.add("header__phone_act");
    menu.appendChild(phoneLink);
    menu.appendChild(headerSearch);

    body.style.overflow = "hidden";
  } else {
  if (
    headerOverlay !== event.target &&
    document.querySelector("input") !== event.target &&
    document.querySelector("span") !== event.target &&
    document.querySelector(".icon-Vector") !== event.target
  ) {
    menu.classList.remove("header__menu_act");
    header.appendChild(phoneLink);
    header.appendChild(headerSearch);
    phoneLink.classList.remove("header__phone_act");
    headerSearch.classList.remove("header__phone_act");
    body.style.overflow = "visible";
  }
  }
});


window.addEventListener("resize", function (event) {
  if (document.documentElement.clientWidth > 1145) {

    if (menu.classList.contains("header__menu_act")) {
        menu.classList.remove("header__menu_act");
        header.appendChild(phoneLink);
        header.appendChild(headerSearch);
        phoneLink.classList.remove("header__phone_act");
        headerSearch.classList.remove("header__phone_act");
        body.style.overflow = "visible";
    }

  } 
});

// ----- header меняется в размерах и цвете
   window.addEventListener("scroll", function (event) {
     if (window.pageYOffset > 150) {
       header.style.cssText = `height: 55px;	`;
       document.querySelector(
         ".header"
       ).style.cssText = `background-color: rgba(0,0,0, 0.6);`;
     } else {
       header.style.cssText = `height: 70px;`;
        document.querySelector(
          ".header"
        ).style.cssText = `background-color: #F5F5F5;`;
     }
   });

   // ============кнопка на начало если вдруг не понравится 
   // $(document).ready(function (e) {
   //     $(".scrollup").click(function () {
   //       $("html, body").animate(
   //         {
   //           scrollTop: 0,
   //         },
   //         1000
   //       );
   //     });
   //   }),
   //     $(document).ready(function (e) {
   //       $(window).scroll(function () {
   //         if ($(this).scrollTop() > 200) {
   //           $(".scrollup").fadeIn();
   //         } else {
   //           $(".scrollup").fadeOut();
   //         }
   //       });
   //     }),

   (function () {
     "use strict";

     var upDownBtn = document.querySelector(".up_down_btn");
     var check;

     function trackScroll() {
       var scrolled = window.pageYOffset;
       var coords = 200;

       if (scrolled > coords) {
         upDownBtn.classList.add("up_down_btn-show");
         upDownBtn.innerHTML = "&uarr;";
         upDownBtn.setAttribute("title", "Наверх");
         check = false;
       }
       if (scrolled < coords) {
         upDownBtn.innerHTML = "&darr;";
         upDownBtn.setAttribute("title", "Вниз");
         check = true;
       }
     }

     function backToTop() {
       upDownBtn.classList.add("up_down_btn-disabled");
       if (!check) {
         (function goTop() {
           if (window.pageYOffset !== 0) {
             window.scrollBy(0, -15);
             setTimeout(goTop, 0);
           } else {
             upDownBtn.classList.remove("up_down_btn-disabled");
           }
         })();
         return;
       } else if (check) {
         (function goBottom() {
           var match = Math.ceil(
             window.pageYOffset + document.documentElement.clientHeight
           );

           if (match != document.documentElement.scrollHeight) {
             window.scrollBy(0, 15);
             setTimeout(goBottom, 0);
           } else {
             upDownBtn.classList.remove("up_down_btn-disabled");
           }
         })();
         return;
       }
     }

     window.addEventListener("scroll", trackScroll);
     upDownBtn.addEventListener("click", backToTop);
   })();