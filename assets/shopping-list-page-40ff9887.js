import{a as k,b as m,c as b}from"./footer-11b98634.js";function f(e){let o='<ul class="shopping-list">';e.map(t=>{const{_id:i,book_image:l,title:c,description:n,author:d,list_name:p,buy_links:s}=t,u=r("Amazon",s),g=r("Apple Books",s),h=r("Bookshop",s);o+=` <li class="book-card" id="${i}">
      <div class="shopping-image-thumb">
        <img src="${l}" alt="" />
      </div>
      <div class="book-card-info">
      <div class="book">
        <h2 class="book-title">${c}</h2>
        <div class="book-genre">${p}</div>
        <div class="book-description">${n||"We don't have description for this book yet..."}</div>

        <button class="book-card-delete">
          <svg class="book-card-icon"  width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="book-additional-info">
        <div class="book-author">${d}</div>
        <ul class="book-card-refs">
        <li class="amazon-icon"><a  href="${u}" target="_blank">
        <img src="${k}" alt="" / >
        </a></li>
        <li class="other-icon"><a  href="${g}" target="_blank"><img src="${m}" alt="" / ></a></li>
        <li class="other-icon"><a  href="${h}" target="_blank" ><img src="${b}" alt="" /></a></li>
        </ul>
        
      </div>
      </div>
    </li>`}),o+="</ul>",document.querySelector(".container").insertAdjacentHTML("beforeend",o),document.querySelector(".shopping-list").addEventListener("click",v)}function r(e,o){return o.filter(i=>{if(i.name===e)return i.url})[0].url}function v(e){if(e.target.nodeName!=="BUTTON")return;let o=e.target;for(;o&&!o.hasAttribute("id");)o=o.parentNode;o.remove(),document.querySelector(".shopping-list").children.length<1&&(document.querySelector(".empty-list").style.display="flex"),y(o.id)}function y(e){const o=a().filter(t=>{if(t._id!==e)return t});localStorage.setItem("ShoppingList",JSON.stringify(o))}function a(){return JSON.parse(window.localStorage.getItem("ShoppingList")||"[]")}a().length>0&&(document.querySelector(".empty-list").style.display="none");f(a());
