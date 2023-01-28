import { ROOT_INDEX } from '../../constants/root'
import './Error.css'

class Error {

    render() {

        const html = `
        <div class="error__container">
        <span class="error__text">
        <p class="error__title">Data is not found</p>
        <p class="error__caption">Please, try it later</p>
        </span>
        </div>
        `

        ROOT_INDEX.innerHTML = html
    }

}

export default new Error()
