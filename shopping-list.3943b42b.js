function o(o,a,r,t){Object.defineProperty(o,a,{get:r,set:t,enumerable:!0,configurable:!0})}function a(o){return o&&o.__esModule?o.default:o}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},e={},n=r.parcelRequired7c6;null==n&&((n=function(o){if(o in t)return t[o].exports;if(o in e){var a=e[o];delete e[o];var r={id:o,exports:{}};return t[o]=r,a.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+o+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(o,a){e[o]=a},r.parcelRequired7c6=n),n.register("kyEFX",(function(a,r){var t,e;o(a.exports,"register",(function(){return t}),(function(o){return t=o})),o(a.exports,"resolve",(function(){return e}),(function(o){return e=o}));var n={};t=function(o){for(var a=Object.keys(o),r=0;r<a.length;r++)n[a[r]]=o[a[r]]},e=function(o){var a=n[o];if(null==a)throw new Error("Could not resolve bundle with id "+o);return a}})),n("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.3943b42b.js","1dwzE":"bg-shopping-list.9d82d098.png","kjRhJ":"bg-shopping-list@2x.80ece8cf.png","db4UH":"amazon.d254faae.png","cmZSK":"amazon@2x.24de444e.png","jJhpi":"apple-books.9b2fbf78.png","ii8tx":"apple-books@2x.fdf3a6a7.png","q1nMR":"bookshop.9b60ea58.png","gBdei":"bookshop@2x.927a7722.png","lp5u4":"sprite.abbc17c3.svg","jWsj5":"book-placeholder-mobile.afdeae61.jpg","a8cj2":"shopping-list.b141290a.js"}'));var s;s=new URL(n("kyEFX").resolve("1dwzE"),import.meta.url).toString();var p;p=new URL(n("kyEFX").resolve("kjRhJ"),import.meta.url).toString();var l;l=new URL(n("kyEFX").resolve("db4UH"),import.meta.url).toString();var i;i=new URL(n("kyEFX").resolve("cmZSK"),import.meta.url).toString();var F;F=new URL(n("kyEFX").resolve("jJhpi"),import.meta.url).toString();var d;d=new URL(n("kyEFX").resolve("ii8tx"),import.meta.url).toString();var u;u=new URL(n("kyEFX").resolve("q1nMR"),import.meta.url).toString();var b;b=new URL(n("kyEFX").resolve("gBdei"),import.meta.url).toString();var c;c=new URL(n("kyEFX").resolve("lp5u4"),import.meta.url).toString();var w;function k(){const o=document.querySelector("#bookList"),r=localStorage.getItem("books"),t=JSON.parse(r);if(!t||!t.length){const r=document.createElement("li");return r.textContent="This page is empty, add some books and proceed to order.",o.insertAdjacentHTML("beforeend",r.innerHTML),void o.insertAdjacentHTML("beforeend",`\n        <li>\n          <picture>\n                <source srcset="${a(s)} 1x, ${a(p)} 2x"\n                 type="image/png" />\n                <img src="${a(s)}" alt=" Empty Bookshelf" />\n            </picture>\n        </li>\n        `)}const e=t.map((o=>{const r=o.buy_links[0].url,t=o.buy_links[1].url,e=o.buy_links[2].url;let n=o.book_image;return n||(n=a(w)),`<li class="wrap-about-book-remove list-item" data-title="${o.title}" data-author="${o.author}">\n              <div class="book-card">\n                 <button type="button" class="book-delete-btn">\n                    <svg class="book-delete-icon">\n                        <use class='use-js' href="${a(c)}#icon-trash"></use>\n                    </svg>\n                </button>\n                    <img src="${n}" alt="${o.title}" class="book-img"> \n                <div class="book-text-content">\n                  <h3 class="book-title">${o.title}</h3>\n                  <p class="book-category">${o.list_name}</p>\n                  <p class="book-desc">${o.description}</p>\n                  <div class="book-copyright">\n                    <p class="book-author">${o.author}</p>\n                        \n                        <ul class="buy-links">\n                        <li class="buy-li buy-amazon">\n                            <a href="${r}" class="book-buy-link amazon-icon" target="_blank">            \n                                <picture class="amazon-picture">\n                                    <source srcset="${a(l)} 1x, ${a(i)} 2x" type="image/png" />\n                                    <img src="${a(l)}" alt=" Empty Bookshelf" class="amazon-book-buy-icon" />\n                                </picture> \n                            </a>\n                        </li>\n                        <li class="buy-li">\n                            <a href="${t}" class="book-buy-link" target="_blank">\n                                <picture class="picture">\n                                    <source srcset="${a(F)} 1x, ${a(d)} 2x" type="image/png" />\n                                    <img src="${a(F)}" alt=" Empty Bookshelf" class="book-buy-icon" />\n                                </picture> \n                            </a>\n                        </li>\n                        <li class="buy-li">\n                            <a href="${e}" class="book-buy-link" target="_blank">\n                                <picture class="picture">\n                                    <source srcset="${a(u)} 1x, ${a(b)} 2x" type="image/png" />\n                                    <img src="${a(u)}" alt=" Empty Bookshelf" class="book-buy-icon" />\n                                </picture> \n                            </a>\n                        </li>\n                    </ul>\n                </div>\n                </div>\n              </div>\n              </li>\n            `})).join("");o.innerHTML=e}w=new URL(n("kyEFX").resolve("jWsj5"),import.meta.url).toString(),n("krGWQ");var m=n("krGWQ");document.querySelector(".js-back"),document.querySelector(".js-text");m.refs.shoppingListWrapper.addEventListener("click",(function(o){const a=localStorage.getItem("books"),r=o.target.closest(".wrap-about-book-remove");document.querySelector(".shopping-list-wrap");if(!o.target.classList.contains("book-delete-btn")&&!o.target.classList.contains("use-js")&&!o.target.classList.contains("book-delete-icon"))return;const t=JSON.parse(a).filter((({author:o,title:a})=>o!==r.dataset.author&&a!==r.dataset.title)),e=JSON.stringify(t);localStorage.setItem("books",e),r.innerHTML="",k()}));var h=n("7Y9D8");const B=[{list_name:"Combined Print and E-Book Nonfiction",_id:"642fd89ac8cf5ee957f12361",title:"1WISH",author:"1Barbara O'Connor",description:"Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга",book_image:"https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"}]},{list_name:"Combined Print and E-Book Nonfiction",_id:"642fd89ac8cf5ee957f12361",title:"2WISH 2 Barbaraaaaaaaa Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara",author:"2Barbara O'Connor 2",description:"Це дуже цікава книга про...2",book_image:"",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"}]},{list_name:"Combined Print and E-Book Nonfiction",_id:"642fd89ac8cf5ee957f12361",title:"3WISH",author:"3Barbara O'Connor",description:"Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга",book_image:"https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"}]},{list_name:"Combined Print and E-Book Nonfiction",_id:"642fd89ac8cf5ee957f12361",title:"4WISH 2 Barbaraaaaaaaa Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara",author:"4Barbara O'Connor 2",description:"Це дуже цікава книга про...2",book_image:"",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"}]},{list_name:"Combined Print and E-Book Nonfiction",_id:"642fd89ac8cf5ee957f12361",title:"5WISH",author:"5Barbara O'Connor",description:"Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга",book_image:"https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"}]},{list_name:"Combined Print and E-Book Nonfiction",_id:"642fd89ac8cf5ee957f12361",title:"6WISH 2 Barbaraaaaaaaa Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara",author:"6Barbara O'Connor 2",description:"Це дуже цікава книга про...2",book_image:"",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"}]},{list_name:"Combined Print and E-Book Nonfiction",_id:"642fd89ac8cf5ee957f12361",title:"7WISH",author:"7Barbara O'Connor",description:"Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга",book_image:"https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"}]},{list_name:"Combined Print and E-Book Nonfiction",_id:"642fd89ac8cf5ee957f12361",title:"8WISH 2 Barbaraaaaaaaa Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara",author:"8Barbara O'Connor 2",description:"Це дуже цікава книга про...2",book_image:"",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"}]},{list_name:"Combined Print and E-Book Nonfiction",_id:"642fd89ac8cf5ee957f12361",title:"9WISH",author:"9Barbara O'Connor",description:"Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга Це дуже цікава книга",book_image:"https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"}]},{list_name:"Combined Print and E-Book Nonfiction",_id:"642fd89ac8cf5ee957f12361",title:"10WISH 2 Barbaraaaaaaaa Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara Barbara",author:"10Barbara O'Connor 2",description:"Це дуже цікава книга про...2",book_image:"",buy_links:[{name:"Amazon",url:"https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"},{name:"Apple Books",url:"https://goto.applebooks.apple/9781250144058?at=10lIEQ"},{name:"Barnes and Noble",url:"https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"},{name:"Books-A-Million",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"},{name:"Bookshop",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"},{name:"IndieBound",url:"https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"}]}];window.addEventListener("load",(()=>{try{localStorage.setItem("books",JSON.stringify(B)),k()}catch(o){console.log(o.message),a(h).Notify.failure("Oops! Something went wrong! Try reloading the page!")}}));
//# sourceMappingURL=shopping-list.3943b42b.js.map
