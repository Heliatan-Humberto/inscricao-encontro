import { FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer>
            <ul className={styles.liststyle}>
                <li>
                    <a href="https://www.instagram.com/conectados_em_cristo_mpa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw"> <FaInstagram /> <p>conectados em cristo mpa</p> </a>
                </li>
            </ul>
            <p className={styles.copy}>
                <span>Assembléia de Deus MPA</span> &copy; 2024 
            </p> 
        </footer>
    )
}

export default Footer