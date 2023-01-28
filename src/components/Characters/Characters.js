import { ROOT_MODAL } from '../../constants/root'
import { IMG_SIZE_XLARGE, IMG_NOT_AVAILABLE } from '../../constants/api'
import { getDataApi } from '../../utils/getDataApi'
import './Characters.css'
import Notification from '../Notification'

class Characters {

    renderCharacters(data) {
        let htmlContent = ''
        
        const bodyEl = document.querySelector('body')
        bodyEl.classList.add('stop-scrolling')
        data.forEach(({name, thumbnail: {path, extension}}) => {
            if(path.indexOf(IMG_NOT_AVAILABLE) === -1) {
                const imgSrc = path + '/' + IMG_SIZE_XLARGE + '.' + extension
                htmlContent += `
                <li class="characters__item">
                <img class="characters__pic" src="${imgSrc}">
                <span class="characters__name">${name}</span>
                </li>
                `
            }
        })

        const htmlWrapper = `
        <div class="characters__wrapper">
        <img class="characters__modal-close" src="http://localhost:1234/cross.63362622.png?1674687989557">
        <div class="characters__container">
        <div class="characters__list">
        ${htmlContent}
        </div>
        </div>
        </div>
        `

        ROOT_MODAL.innerHTML = htmlWrapper
       
        const closeBtn = document.querySelector('.characters__modal-close')
        closeBtn.addEventListener('click', () => {
            ROOT_MODAL.innerHTML = ''
            bodyEl.classList.remove('stop-scrolling')
        })
    }

    renderNotification() {
        Notification.render()
    }

    async render(uri) {

        const data = await getDataApi.getData(uri)

        if(data.length > 0) {
            this.renderCharacters(data)
        } else {
            this.renderNotification()
        }
        
    }

}

export default new Characters()