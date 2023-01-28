import { API_URL, API_COMICS, API_CHARACTERS, IMG_SIZE_XLARGE, IMG_NOT_AVAILABLE } from '../../constants/api'
import { getDataApi } from '../../utils/getDataApi'
import { ROOT_INDEX } from '../../constants/root'
import Error from '../Error'
import Characters from '../Characters'
import './Comics.css'

class Comics {
    
    renderComics(data) {
        let htmlContent = ''
        data.forEach(({id, title, thumbnail: {path, extension}, characters: {available}}) => {

            if(path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
                const uri = API_URL + API_COMICS + '/' + id + '/' + API_CHARACTERS
                const imgSrc = path + '/' + IMG_SIZE_XLARGE + '.' + extension
                const charactersAvailable = ' comics__characters-available'
    
                htmlContent += `
                <li class='comics__item${available > 0 ? charactersAvailable : ""}' data-uri='${uri}'>
                <span class='comics__name'>${title}</span>
                <img class='comics__img' src='${imgSrc}'>
                </li>
                `
            }
        })

        const htmlWrapper = `
        <ul class='comics__container'>
        ${htmlContent}
        </ul>
        `

        ROOT_INDEX.innerHTML = htmlWrapper
    }

    async render () {
        const data = await getDataApi.getData(API_URL + API_COMICS)
        
        data ? this.renderComics(data) : Error.render()
    }

    eventListener() {
        document.querySelectorAll('.comics__item').forEach(el => {
            const uri = el.getAttribute('data-uri')
            const charactersAvailable = el.getAttribute('data-chars')
            el.addEventListener('click', () => {
                Characters.render(uri)
            })
        })
    }
}

export default new Comics()