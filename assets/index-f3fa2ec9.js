import{g as i,N as k}from"./theme-switcher-668756b1.js";const s={bestBooks:document.querySelector(".home-title-book"),container:document.querySelector(".js-container-bestBooks"),cover:document.querySelector(".js-coverAllBooks"),nameCat:document.querySelector(".js-add-name-category")};s.container.addEventListener("click",d);i("top-books").then(({data:o})=>{u(o),o===0&&k.Notify.failure("There are no books in this category")});function m(o){return o.map(({book_image:t,title:e,author:a,_id:r})=>`<li class="js-list-bestBooks id=${r}">
            <img src="${t}" alt="${e}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${e}</h3>
            <p class="js-autor-bestBooks">${a}</p>
        </li>`).join("")}function u(o){const t=o.map(({list_name:e,books:a})=>`<h3 class="js-list-name">${e}</h3 >
        <ul class="js-overlow-bestBooks">${m(a)}</ul>
        <btn class="js-btn-bestBooks" data-js="${e}">See more</btn>`).join("");s.container.insertAdjacentHTML("beforeend",t)}function d(o){if(o.preventDefault(),o.target.classList.contains("js-btn-bestBooks")){let t=o.target.dataset.js;s.container="",i(`category?category=${t}`).then(({data:e})=>{s.nameCat.textContent=t;const a=e.map(({book_image:r,title:n,author:c,_id:l})=>`<li class="js-list-allBooks id=${l}">
            <img src="${r}" alt="${n}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${n}</h3>
            <p class="js-autor-bestBooks">${c}</p>
        </li>`).join("");s.cover.innerHTML=a,e===0&&k.Notify.failure("There are no books in this category")}).catch(e=>console.error(e))}}const g=document.querySelector(".all-categories");document.querySelector(".categories__item");g.addEventListener("click",f);i("category-list").then(({data:o})=>b(o));function b(o){let t=o.map(({list_name:e})=>`<li class="categories__item categories__link" data-category="${e}">${e}</li>`).join("");g.insertAdjacentHTML("beforeend",t)}function f(o){if(o.preventDefault(),o.target.classList.contains("categories__item")){let t=o.target.dataset.category;s.container="",t==="All categories"?(i("top-books").then(({data:e})=>{u(e)}),data===0&&Notiflix.Notify.failure("There are no books in this category")):i(`category?category=${t}`).then(({data:e})=>{s.container="",s.bestBooks.textContent=t;const a=e.map(({book_image:r,title:n,author:c,_id:l})=>`<li class="js-list-allBooks id=${l}">
              <img src="${r}" alt="${n}" loading="lazy" class="img-bestBooks"/>
              <h3 class="js-named-bestBooks">${n}</h3>
              <p class="js-autor-bestBooks">${c}</p>
          </li>`).join("");s.cover.innerHTML=a,e===0&&Notiflix.Notify.failure("There are no books in this category")}).catch(e=>console.error(e))}}
