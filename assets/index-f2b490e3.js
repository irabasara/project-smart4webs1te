import{g as i,N as g,o as u}from"./theme-switcher-b4f9cd24.js";const s={bestBooks:document.querySelector(".home-title-book"),container:document.querySelector(".js-container-bestBooks"),cover:document.querySelector(".js-coverAllBooks"),nameCat:document.querySelector(".js-add-name-category")};s.container.addEventListener("click",b);i("top-books").then(({data:e})=>{d(e),e===0&&g.Notify.failure("There are no books in this category")});function m(e){return e.map(({book_image:t,title:o,author:a,_id:n})=>`<li class="js-list-bestBooks" id=${n}>
            <img src="${t}" alt="${o}" data-id="${n}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${o}</h3>
            <p class="js-autor-bestBooks">${a}</p>
        </li>`).join("")}function d(e){const t=e.map(({list_name:o,books:a})=>`<h3 class="js-list-name">${o}</h3 >
        <ul class="js-overlow-bestBooks">${m(a)}</ul>
        <btn class="js-btn-bestBooks" data-js="${o}">See more</btn>`).join("");s.container.insertAdjacentHTML("beforeend",t)}function b(e){if(e.preventDefault(),e.target.classList.contains("img-bestBooks")){const t=e.target.dataset.id;console.log("id",t),e.target.addEventListener("click",u(t))}if(e.target.classList.contains("js-btn-bestBooks")){let t=e.target.dataset.js;s.container="",i(`category?category=${t}`).then(({data:o})=>{s.nameCat.textContent=t;const a=o.map(({book_image:n,title:r,author:l,_id:c})=>`<li class="js-list-allBooks" id=${c}>
            <img src="${n}" alt="${r}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${r}</h3>
            <p class="js-autor-bestBooks">${l}</p>
        </li>`).join("");s.cover.innerHTML=a,o===0&&g.Notify.failure("There are no books in this category")}).catch(o=>console.error(o))}}const k=document.querySelector(".all-categories");document.querySelector(".categories__item");k.addEventListener("click",y);i("category-list").then(({data:e})=>f(e));function f(e){let t=e.map(({list_name:o})=>`<li class="categories__item categories__link" data-category="${o}">${o}</li>`).join("");k.insertAdjacentHTML("beforeend",t)}function y(e){if(e.preventDefault(),e.target.classList.contains("categories__item")){let t=e.target.dataset.category;console.log(t),s.container="",t?i(`category?category=${t}`).then(({data:o})=>{s.bestBooks.textContent=t,s.nameCat.classList.add("is-hidden");const a=o.map(({book_image:n,title:r,author:l,_id:c})=>`<li class="js-list-allBooks id=${c}">
              <img src="${n}" alt="${r}" data-id="${c}" loading="lazy" class="img-bestBooks"/>
              <h3 class="js-named-bestBooks">${r}</h3>
              <p class="js-autor-bestBooks">${l}</p>
          </li>`).join("");s.cover.innerHTML=a,o===0&&Notiflix.Notify.failure("There are no books in this category")}).catch(o=>console.error(o)):i("top-books").then(({data:o})=>{d(o),o===0&&Notiflix.Notify.failure("There are no books in this category")})}}
