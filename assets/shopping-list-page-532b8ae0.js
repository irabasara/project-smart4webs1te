import"./theme-switcher-aeeebdfe.js";function k(e){let o='<ul class="shopping-list">';e.map(t=>{const{_id:i,book_image:l,title:c,description:n,author:d,list_name:g,buy_links:s}=t,u=r("Amazon",s),p=r("Apple Books",s),m=r("Bookshop",s);o+=` <li class="book-card" id="${i}">
      <div class="shopping-image-thumb">
        <img src="${l}" alt="" />
      </div>
      <div class="book-card-info">
      <div class="book">
        <h2 class="book-title">${c}</h2>
        <div class="book-genre">${g}</div>
        <div class="book-description">${n||"We don't have description for this book yet..."}</div>

        <button class="book-card-delete">
        <svg class="book-card-icon">
        <use href="/img/sprite.svg#icon-trash"></use>
        </svg>
        </button>
      </div>
      <div class="book-card-refs">
        <div class="book-author">${d}</div>
        <a class="amazon-icon" href="${u}" target="_blank">
        <img src="/img/amazon.svg" alt="" / >
        </a>
        <a class="other-icon" href="${p}" target="_blank"><img src="/img/applebook.svg" alt="" / ></a>
        <a class="other-icon" href="${m}" target="_blank" ><img src="/img/bookshop.svg" alt="" /></a>
      </div>
      </div>
    </li>`}),o+="</ul>",document.querySelector(".container").insertAdjacentHTML("beforeend",o),document.querySelector(".shopping-list").addEventListener("click",h)}function r(e,o){return o.filter(i=>{if(i.name===e)return i.url})[0].url}function h(e){if(e.target.nodeName!=="BUTTON")return;let o=e.target;for(;o&&!o.hasAttribute("id");)o=o.parentNode;o.remove(),document.querySelector(".shopping-list").children.length<1&&(document.querySelector(".empty-list").style.display="flex"),b(o.id)}function b(e){const o=a().filter(t=>{if(t._id!==e)return t});localStorage.setItem("ShoppingList",JSON.stringify(o))}function a(){return JSON.parse(window.localStorage.getItem("ShoppingList")||"[]")}a().length>0&&(document.querySelector(".empty-list").style.display="none");k(a());
