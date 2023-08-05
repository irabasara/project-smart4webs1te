// export class Auth {
//     static async create(user) {
//        const response = await fetch('https://books-app-goit-default-rtdb.firebaseio.com/user.json', {
//             method: 'POST',
//             body: JSON.stringify(user),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         const response = response.json;
//         return console.log('response', response);
        
//     }
// }
export function renderForm(name){
    return `
    <div class="backdrop">
  <div class="auth-modal-wrapper">
    <button type="button" class="auth-close-btn">
      <svg width="20" height="20">
        <use href="../img/sprite.svg#icon-close"></use>
      </svg>
    </button>
    <form class="auth-modal">
      <input type="text" name="email" placeholder="email" autocomplete="off" />
      <input
        type="text"
        name="password"
        placeholder="password"
        autocomplete="off"
      />
      <button type="submit" class="sign-up" id="submit">Sign in</button>
      <div class="auth-sign-btn">
        <button id="sign-up">Sign up</button>
        <button class="active" id="sign-in">Sign in</button>
      </div>
    </form>
  </div>
</div>`
}
