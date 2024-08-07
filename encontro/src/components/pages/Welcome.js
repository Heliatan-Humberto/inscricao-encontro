import { useNavigate } from 'react-router-dom'

import Estrutura from '../form/Estructure'
import styles from './Welcome.module.css'

function Welcome() {

    const navigate = useNavigate()

    function createPost(list) {

        //conect
        fetch("mysql://root:rajxgfKIRAcNxQHGnYyRZFynIqnyMWiz@roundhouse.proxy.rlwy.net:59730/railway", {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(list),
         })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)

                navigate('/Inscrito');
            })
            .catch(err => console.log(err))

        }
    return (
        <div className={styles.newproject_container}>
            <h1>Inscrição Encontro com Deus</h1>
            <Estrutura handleSubmit={createPost}/>
        </div>
    )
}

export default Welcome