import styles from './Estrutura.module.css'

import { useEffect, useState } from 'react'

import Input from "./Input"
import SubmitButton from "./SubmitButton"


function Estrutura({ handleSubmit, listaData }) {

    const [lista, setLista] = useState(listaData || {})




    function handleChange(e) {
        setLista({ ...lista, [e.target.name]: e.target.value })
    }


    return (
        <form className={styles.form}>
            <p>teste</p>
            <Input
            type="text"
            text="Nome"
            name="nome"
            placeholder="Nome completo"
            handleOnChange=""
            value={lista.nome} />
            <Input
           type="number"
           text="Data de nacimento"
           name="nacimento"
           placeholder="DD/MM/AAAA" 
           handleOnChange={handleChange}
           value=""
           />
            <SubmitButton text='Inscrever-se' />
        </form>
    )
}

export default Estrutura