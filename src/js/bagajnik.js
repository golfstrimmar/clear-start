//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------

// <!-- №1 кнопка с выездом -->
$(document).ready(function () {
  $(".btn-6")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    });
  $("[href=#]").click(function () {
    return false;
  });
});

// ----%2--------подключение инстаграмма-----------------------------
function instagramFeed(container = ".instagram-feed") {
  const wrapper = document.querySelector(container);
  const username = wrapper.getAttribute("data-username");
  const count = wrapper.getAttribute("data-count");
  const host = "https://www.instagram.com/";
  const url = host + username;
  const hostImageUrl = host + "p/";

  let userFeed = {};

  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      // get content from script tag
      data = data.split("window._sharedData = ")[1].split("</script>")[0];
      data = JSON.parse(data.substr(0, data.length - 1));
      data = data.entry_data.ProfilePage;
      data = data[0].graphql.user;

      userFeed = {
        fullName: data.full_name,
        username: data.username,
        biography: data.biography,
        follow: data.edge_follow,
        followed: data.edge_followed_by,
        id: data.id,
        externalUrl: data.external_url,
        medias: [],
      };

      const medias = data.edge_owner_to_timeline_media.edges;
      medias.forEach((element) => {
        const imagesImgUrl = element.node.thumbnail_src;
        const imagesUrl = element.node.shortcode;
        const imagesCaption =
          element.node.edge_media_to_caption.edges[0].node.text;
        const imagesLike = element.node.edge_media_preview_like.count;
        const imagesComments = element.node.edge_media_to_comment.count;

        userFeed.medias.push({
          urlImage: imagesImgUrl,
          url: hostImageUrl + imagesUrl,
          caption: imagesCaption,
          likes: imagesLike,
          comments: imagesComments,
        });
      });

      return userFeed;
    })
    .then((userFeed) => {
      let htmlFeed = "";
      for (let i = 0; i < count; i++) {
        const media = userFeed.medias[i];

        htmlFeed += `<div class="instagram-images__item">
                    <a href="${media.url}" target="_blank" class="instagram-images__item-image">
                        <img src="${media.urlImage}">
                    </a>
                    <span class="instagram-images__item-image-absolute">
                        <span class="instagram-images__item-like"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 3.532 10 7.874 0 4.162-3.627 6.72-7.893 7.721l-2.107 2.958-2.107-2.958c-4.304-1.011-7.893-3.617-7.893-7.721 0-4.342 4.486-7.874 10-7.874zm0-2c-6.627 0-12 4.42-12 9.874 0 4.512 3.678 8.317 8.701 9.496l3.299 4.63 3.299-4.63c5.023-1.18 8.701-4.985 8.701-9.496 0-5.454-5.373-9.874-12-9.874z"/></svg> ${media.comments}</span>
                        <span class="instagram-images__item-like"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg> ${media.likes}</span>
                    </span>
                    <a href="${media.url}" target="_blank" class="instagram-images__item-title">
                        ${media.caption}
                    </a>
                </div>`;
      }

      wrapper.innerHTML = htmlFeed;
    });
}

// Feed 1
instagramFeed(".instagram-images");

// =====%3========= счетчик см. №6==========================


// -----№5--------блок выезжает по ховеру на другой блок. можно этому блоку задать любые свойства  через js / например заставить его распологаться в нужном месте независимо от расположения родителя. --------------------
   let timeOutSliding;
     $("#sliding-wrap").on("mouseenter", function () {
       let sliding = $("#sliding-wrap").offset().left;
       let offsetLeft = 50;
       let leftSizeOffset = offsetLeft - sliding;
       $("#sliding").css({
         'transform': "translateX("+ leftSizeOffset + "px) rotate(720deg)",
         'opacity': '1',
         'background': '#d24a4c',
         'transition': 'opacity 2s, background 3s ease , transform 0.5s ease-out'

       });
       clearInterval(timeOutSliding);
     });

      $("#sliding-wrap").on("mouseleave", function () {
        $("#sliding").css({
          'transform': 'translate( -100vw, 20%) rotate(-720deg)',
          'opacity': '0',
          'background': '#0DBFE2' 
        });
        timeOutSliding = setInterval(function () {
          $("#sliding").css({
            'transform':'translate( -100vw, 20%) rotate(-720deg)',
            'opacity': '0',
            'background': '#0DBFE2',
          });
        }, 500);
        clearInterval(timeOutSliding);
      });



// ----------------- #6 счетчик spincrement -------------------------
    // $(document).ready(function () {
    //   var show = true;
    //   var countbox = ".fct-counters";
    //   $(window).on("scroll resize", function () {
    //     if (!show) return false;

    //     var w_top = $(window).scrollTop();
    //     var e_top = $(countbox).offset().top;

    //     var w_height = $(window).height();
    //     var d_height = $(document).height();

    //     var e_height = $(countbox).outerHeight();

    //     if (
    //       w_top + 200 >= e_top ||
    //       w_height + w_top == d_height ||
    //       e_height + e_top < w_height
    //     ) {
    //       $(".spincrement").spincrement({
    //         thousandSeparator: "",
    //         duration: 8000,
    //       });

    //       show = false;
    //     }
    //   });
    // });




//-----№7-------- блок выезжает-заезжает  по скролу страницы----
// let windowOffset;
// let Caramba = $("#caramba");
// let lastScrollTop1 = 0;
// let xCaramba = 0; 

// $(window).on('scroll', function () {
//       windowOffset = window.pageYOffset;
//          if (
//            windowOffset >= Caramba.offset().top - viewPort &&
//            windowOffset <= Caramba.offset().top + 200
//          ) {
//            let st1 = $(this).scrollTop();
//            if (st1 > lastScrollTop1) {
//              xCaramba -= 2;
//              Caramba.parent().css(
//                "transform",
//                "translateX(" + xsomeText + "px)"
//              );
//            } else {
//              xCaramba += 2;
//              Caramba.parent().css(
//                "transform",
//                "translateX(" + xCaramba + "px)"
//              );
//            }
//            lastScrollTop1 = st1;
//          }
// });
// let portfolio = $("#caramba");
//   let lastScrollTop3 = 0;
//   let xAbout = 0;
//       $(window).on("scroll", function () {
//         windowOffset = window.pageYOffset;
//         if (
//           windowOffset >= portfolio.offset().top - viewPort &&
//           windowOffset <= portfolio.offset().top + 200
//         ) {
//           let st3 = $(this).scrollTop();
//           if (st3 > lastScrollTop3) {
//             xAbout += 2;
//             portfolio.parent().css("transform", "translateX(" + xAbout + "px)");
//           } else {
//             xAbout -= 2;
//             portfolio.parent().css("transform", "translateX(" + xAbout + "px)");
//           }
//           lastScrollTop3 = st3;
//         }
//       });


//-----------№8------ блок выезжает плавно при достижении края окна расположения блока.
// -------------------события по скролу страницы---------------------------
// let distanceTop = $("#slid").offset().top;    -  расстояние от верхнего края документа до начала блока #slid
// window.pageYOffset                            -  расстояние от верхнего края документа до верхнего края окна
// let viewPort = window.innerHeight;            -  высота видимой части окна (экран)
//  if (window.pageYOffset > distanceTop)    -  условие срабатывает когда документ проскролится на растояние больше чем растояние от верха документа до верха блока. то есть сейчас верх блока касается верха окна 
//  if (window.pageYOffset > distanceTop - viewPort )    --условие сработает когда документ проскролится на расстояние больше чем отступ от верха у блока плюс размер страницы. то есть сейчас блок тоько появляется внизу экрана
// if (window.pageYOffset > distanceTop - viewPort + 150)  это значит немного уменьшаем отступ на 150px. сейс блок немного выехал снизу экрана и на этот момент цепляется какой-то метод. например можно сделать его выезд, изменениее цвета, и т.д. и заезд обратно если скролить обратно


let distanceTop = $("#slid").offset().top;
let viewPort = window.innerHeight;

$(window).scroll(function () {
if (window.pageYOffset > distanceTop - viewPort + 250) {
$("#slid-title").css({
color: "#9fff0f",
transform: "translate(10%)",
opacity: 1,
"font-size": "80px",
"background-color": "green",
transition: "transform 1s, opacity 2s, color 3s",
});
} else {
$("#slid-title").css({
opacity: 0,
transform: "translate(-100vw)",
});
}
});

//--------------------- туда-сюда(пока не рабатет)
// let distanceTop = $("#slid").offset().top;
// let viewPort = window.innerHeight;
// let xSlid = 0;

// $(window).scroll(function () {

// if (
//   window.pageYOffset >= distanceTop - viewPort &&
//   window.pageYOffset <= distanceTop + 200
// )
//  {

// let st = $(this).scrollTop();
// let lastScrollTop = 0;

// if (st > lastScrollTop) {
//          xSlid += 2;
//          $("#slid-title").css({
//            transform: "translateX(" + xSlid + "px)",
//          });
//   } else {
//            xSlid -= 2;
//            $("#slid-title").css({
//              transform: "translateX(" + xSlid + "px)",
//            });
//           }
//           lastScrollTop = st;
//   } 
// });


