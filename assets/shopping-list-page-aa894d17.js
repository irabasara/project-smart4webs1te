import"./theme-switcher-58374dce.js";function h(e){let o='<ul class="shopping-list">';e.map(t=>{const{_id:i,book_image:l,title:c,description:a,author:d,list_name:p,buy_links:s}=t,g=n("Amazon",s),u=n("Apple Books",s),m=n("Bookshop",s);o+=` <li class="book-card" id="${i}">
      <div class="shopping-image-thumb">
        <img src="${l}" alt="" />
      </div>
      <div class="book-card-info">
      <div class="book">
        <h2 class="book-title">${c}</h2>
        <div class="book-genre">${p}</div>
        <div class="book-description">${a||"We don't have description for this book yet..."}</div>

        <button class="book-card-delete">
        <svg class="book-card-icon">
        <use href="/img/sprite.svg#icon-trash"></use>
        </svg>
        </button>
      </div>
      <div class="book-additional-info">
        <div class="book-author">${d}</div>
        <ul class="book-card-refs">
        <li class="amazon-icon"><a  href="${g}" target="_blank">
        <img src="./img/amazon.png" alt="" / >
        </a></li>
        <li class="other-icon"><a  href="${u}" target="_blank"><img src="./img/appleshop.png" alt="" / ></a></li>
        <li class="other-icon"><a  href="${m}" target="_blank" ><img src="./img/boockshop.png" alt="" /></a></li>
        </ul>
        
      </div>
      </div>
    </li>`}),o+="</ul>",document.querySelector(".container").insertAdjacentHTML("beforeend",o),document.querySelector(".shopping-list").addEventListener("click",k)}function n(e,o){return o.filter(i=>{if(i.name===e)return i.url})[0].url}function k(e){if(e.target.nodeName!=="BUTTON")return;let o=e.target;for(;o&&!o.hasAttribute("id");)o=o.parentNode;o.remove(),document.querySelector(".shopping-list").children.length<1&&(document.querySelector(".empty-list").style.display="flex"),b(o.id)}function b(e){const o=r().filter(t=>{if(t._id!==e)return t});localStorage.setItem("ShoppingList",JSON.stringify(o))}function r(){return JSON.parse(window.localStorage.getItem("ShoppingList")||"[]")}r().length>0&&(document.querySelector(".empty-list").style.display="none");h(r());
