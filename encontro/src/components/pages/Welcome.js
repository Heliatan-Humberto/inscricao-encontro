import { useNavigate } from 'react-router-dom'

import Estrutura from '../form/Estructure'
import styles from './Welcome.module.css'

function Welcome() {
    return (
        <div className={styles.newproject_container}>
            <h1>Inscrição Encontro com Deus</h1>
            <p>formulário de Inscrição:</p>
            <Estrutura />
        </div>
    )
}

export default Welcome