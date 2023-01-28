import { ROOT_MODAL } from '../../constants/root'
import './Notification.css'

class Notification {

    render() {
        let html = `
        <div class='notification__container'>
        <img class="notification__close" onclick="modal.innerHTML = ''" src="http://localhost:1234/close.2db5ef4d.png?1674690363987">
        <span class='notification__text'>No characters</span>
        </div>
        `

        ROOT_MODAL.innerHTML = html

        setTimeout(() => {
            ROOT_MODAL.innerHTML = ''
        }, 5000)
    }

}

export default new Notification()