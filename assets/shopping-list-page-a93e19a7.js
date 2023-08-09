import{a as h,b as k,c as b}from"./theme-switcher-534ee416.js";function f(e){let o='<ul class="shopping-list">';e.map(t=>{const{_id:i,book_image:n,title:c,description:l,author:d,list_name:u,buy_links:s}=t,p=r("Amazon",s),g=r("Apple Books",s),m=r("Bookshop",s);o+=` <li class="book-card" id="${i}">
      <div class="shopping-image-thumb">
        <img src="${n}" alt="" />
      </div>
      <div class="book-card-info">
      <div class="book">
        <h2 class="book-title">${c}</h2>
        <div class="book-genre">${u}</div>
        <div class="book-description">${l||"We don't have description for this book yet..."}</div>

        <button class="book-card-delete">
        <svg class="book-card-icon">
        <use href="/project-smart4webs1te/src/img/sprite.svg#icon-trash"></use>
        </svg>
        </button>
      </div>
      <div class="book-additional-info">
        <div class="book-author">${d}</div>
        <ul class="book-card-refs">
        <li class="amazon-icon"><a  href="${p}" target="_blank">
        <img src="${h}" alt="" / >
        </a></li>
        <li class="other-icon"><a  href="${g}" target="_blank"><img src="${k}" alt="" / ></a></li>
        <li class="other-icon"><a  href="${m}" target="_blank" ><img src="${b}" alt="" /></a></li>
        </ul>
        
      </div>
      </div>
    </li>`}),o+="</ul>",document.querySelector(".container").insertAdjacentHTML("beforeend",o),document.querySelector(".shopping-list").addEventListener("click",v)}function r(e,o){return o.filter(i=>{if(i.name===e)return i.url})[0].url}function v(e){if(e.target.nodeName!=="BUTTON")return;let o=e.target;for(;o&&!o.hasAttribute("id");)o=o.parentNode;o.remove(),document.querySelector(".shopping-list").children.length<1&&(document.querySelector(".empty-list").style.display="flex"),y(o.id)}function y(e){const o=a().filter(t=>{if(t._id!==e)return t});localStorage.setItem("ShoppingList",JSON.stringify(o))}function a(){return JSON.parse(window.localStorage.getItem("ShoppingList")||"[]")}a().length>0&&(document.querySelector(".empty-list").style.display="none");f(a());
