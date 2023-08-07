import{r as t,g as i,N as c}from"./mob-menu-8394a373.js";t.container.addEventListener("click",f);i("top-books").then(({data:o})=>{b(o),o===0&&c.Notify.failure("There are no books in this category")});function u(o){return o.map(({book_image:e,title:s,author:a,_id:n})=>{})}function b(o){const e=o.map(({list_name:s,books:a})=>`<h3 class="js-list-name">${s}</h3 >
        <ul class="js-overlow-bestBooks">${u(a)}</ul>
        <btn class="js-btn-bestBooks" data-js="${s}">See more</btn>`).join("");t.container.insertAdjacentHTML("beforeend",e)}function f(o){if(o.preventDefault(),o.target.classList.contains("js-btn-bestBooks")){let e=o.target.dataset.js;t.container="",i(`category?category=${e}`).then(({data:s})=>{t.nameCat.textContent=e;const a=s.map(({book_image:n,title:r,author:l,_id:k})=>`<li class="js-list-allBooks id=${k}">
            <img src="${n}" alt="${r}" loading="lazy" class="img-bestBooks"/>
            <h3 class="js-named-bestBooks">${r}</h3>
            <p class="js-autor-bestBooks">${l}</p>
        </li>`).join("");t.cover.innerHTML=a,s===0&&c.Notify.failure("There are no books in this category")}).catch(s=>console.error(s))}}
