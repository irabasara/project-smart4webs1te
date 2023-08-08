import{g as i,N as g,o as u}from"./theme-switcher-ce6c91d7.js";const s={bestBooks:document.querySelector(".home-title-book"),container:document.querySelector(".js-container-bestBooks"),cover:document.querySelector(".js-coverAllBooks"),nameCat:document.querySelector(".js-add-name-category")};s.container.addEventListener("click",b);i("top-books").then(({data:e})=>{k(e),e===0&&g.Notify.failure("There are no books in this category")});function m(e){return e.map(({book_image:t,title:o,author:a,_id:r})=>`<li class="js-list-bestBooks" id=${r}>
            <img src="${t}" alt="${o}" data-id="${r}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${o}</h3>
            <p class="js-autor-bestBooks">${a}</p>
        </li>`).join("")}function k(e){const t=e.map(({list_name:o,books:a})=>`<h3 class="js-list-name">${o}</h3 >
        <ul class="js-overlow-bestBooks">${m(a)}</ul>
        <btn class="js-btn-bestBooks" data-js="${o}">See more</btn>`).join("");s.container.insertAdjacentHTML("beforeend",t)}function b(e){if(e.preventDefault(),e.target.classList.contains("img-bestBooks")){const t=e.target.dataset.id;console.log("id",t),e.target.addEventListener("click",u(t))}if(e.target.classList.contains("js-btn-bestBooks")){let t=e.target.dataset.js;s.container="",i(`category?category=${t}`).then(({data:o})=>{s.nameCat.textContent=t;const a=o.map(({book_image:r,title:n,author:l,_id:c})=>`<li class="js-list-allBooks" id=${c}>
            <img src="${r}" alt="${n}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${n}</h3>
            <p class="js-autor-bestBooks">${l}</p>
        </li>`).join("");s.cover.innerHTML=a,o===0&&g.Notify.failure("There are no books in this category")}).catch(o=>console.error(o))}}const d=document.querySelector(".all-categories");document.querySelector(".categories__item");d.addEventListener("click",y);i("category-list").then(({data:e})=>f(e));function f(e){let t=e.map(({list_name:o})=>`<li class="categories__item categories__link" data-category="${o}">${o}</li>`).join("");d.insertAdjacentHTML("beforeend",t)}function y(e){if(e.preventDefault(),e.target.classList.contains("categories__item")){let t=e.target.dataset.category;s.container="",t==="All categories"?(i("top-books").then(({data:o})=>{k(o)}),data===0&&Notiflix.Notify.failure("There are no books in this category")):i(`category?category=${t}`).then(({data:o})=>{s.container="",s.bestBooks.textContent=t;const a=o.map(({book_image:r,title:n,author:l,_id:c})=>`<li class="js-list-allBooks id=${c}">
              <img src="${r}" alt="${n}" data-id="${c}" loading="lazy" class="img-bestBooks"/>
              <h3 class="js-named-bestBooks">${n}</h3>
              <p class="js-autor-bestBooks">${l}</p>
          </li>`).join("");s.cover.innerHTML=a,o===0&&Notiflix.Notify.failure("There are no books in this category")}).catch(o=>console.error(o))}}
