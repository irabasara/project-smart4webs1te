import { getBooksAPI } from "./getBoorkAPI"

const loader = document.querySelector('.loader')

const isLoading = () => {
    loader.hidden = false;
    if (getBooksAPI) {
    loader.hidden = true;
        
    }
}

