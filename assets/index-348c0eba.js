import{r as a,g as i,N as l,o as b}from"./mob-menu-2286cea3.js";a.container.addEventListener("click",m);i("top-books").then(({data:s})=>{j(s),s===0&&l.Notify.failure("There are no books in this category")});function u(s){return s.map(({book_image:e,title:o,author:t,_id:n})=>`<li class="js-list-bestBooks id=${n}">
            <img src="${e}" alt="${o}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${o}</h3>
            <p class="js-autor-bestBooks">${t}</p>
        </li>`).join("")}function j(s){const e=s.map(({list_name:o,books:t})=>`<h3 class="js-list-name">${o}</h3 >
        <ul class="js-overlow-bestBooks">${u(t)}</ul>
        <btn class="js-btn-bestBooks" data-js="${o}">See more</btn>`).join("");a.container.insertAdjacentHTML("beforeend",e)}function m(s){if(s.preventDefault(),s.target.classList.contains("js-btn-bestBooks")){let e=s.target.dataset.js;a.container="",i(`category?category=${e}`).then(({data:o})=>{a.nameCat.textContent=e;const t=o.map(({book_image:n,title:r,author:c,_id:k})=>`<li class="js-list-allBooks id=${k}">
            <img src="${n}" alt="${r}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${r}</h3>
            <p class="js-autor-bestBooks">${c}</p>
        </li>`).join("");a.cover.innerHTML=t,b(),o===0&&l.Notify.failure("There are no books in this category")}).catch(o=>console.error(o))}}
