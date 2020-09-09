//------------- это подключает jquery------
import $ from 'jquery';
// ------------------------------------
// ----------это подключает все стили и в этом файле есть scss bootstrap из node modules------
import './scss/style.scss';
// ----------------------------------------------




// import "./js/jquery.spincrement.min.js";  ???не работает решить???
import './js/common.js'
import "./js/bagajnik.js";

// import './css/main.css';
// import "./js/bootstrap.bundle";
// import "./js/bootstrap";
// import './css/bootstrap-grid.css';
// import './css/bootstrap.css';
// import 'node_modules/bootstrap/scss/bootstrap';
// import "node_modules/bootstrap/scss/grid";
// import "slick-carousel"; 
// import "mixitup";
// import "./js/sliMy.js";
// import 'vue'
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
// window.Vue = require('vue') 
// alert("ppppp"); 


// проверка присутствия jquery
$(document).ready(function () {
  $(".title").css({'color': '#9fff0f', 'font-size':'20px','text-align':'center','width':'100%', 'padding':'20px', 'background':'purple'});
  
  $(".title").html("если виден текст, то на сайте работает jquery потому что  сам div и свойства данного div  зашли через js");

 });



