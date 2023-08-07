import"./mob-menu-8394a373.js";function u(e){let o='<ul class="shopping-list">';e.map(i=>{const{book_image:t,title:a,description:l,author:n,list_name:c,buy_links:s}=i,d=r("Amazon",s),g=r("Apple Books",s),p=r("Bookshop",s);o+=` <li class="book-card" id="${a}">
      <div class="shopping-image-thumb">
        <img src="${t}" alt="" />
      </div>
      <div class="book-card-info">
      <div class="book">
        <h2 class="book-title">${a}</h2>
        <div class="book-genre">${c}</div>
        <div class="book-description">${l||"We don't have description for this book yet..."}</div>
        
        <button class="book-card-delete">
        <svg class="book-card-icon">
        <use href="./img/sprite.svg#icon-trash"></use>
        </svg>
        </button>
      </div>
      <div class="book-card-refs">
        <div class="book-author">${n}</div>
        <a class="amazon-icon" href="${d}" target="_blank">
        <img src="./img/amazon.svg" alt="" / >
        </a>
        <a class="other-icon" href="${g}" target="_blank"><img src="./img/applebook.svg" alt="" / ></a>
        <a class="other-icon" href="${p}" target="_blank" ><img src="./img/bookshop.svg" alt="" /></a>
      </div>
      </div>
    </li>`}),o+="</ul>",document.querySelector(".container").insertAdjacentHTML("beforeend",o),document.querySelector(".shopping-list").addEventListener("click",m)}function r(e,o){return o.filter(t=>{if(t.name===e)return t.url})[0].url}function m(e){if(e.target.nodeName!=="BUTTON")return;let o=e.target;for(;o&&!o.hasAttribute("id");)o=o.parentNode;o.remove(),document.querySelector(".shopping-list").children.length<1&&(document.querySelector(".empty-list").style.display="flex"),h(o.id,localStorage.getItem("shoppingList"))}function h(e,o){const i=JSON.parse(o).filter(t=>{if(t.title!==e)return t});localStorage.setItem("shoppingList",JSON.stringify(i))}localStorage.shoppingList.length>2&&(document.querySelector(".empty-list").style.display="none");u(JSON.parse(localStorage.shoppingList));
