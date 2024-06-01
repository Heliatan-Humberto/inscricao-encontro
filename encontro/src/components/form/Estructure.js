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
            <Input
            type="text"
            text="Nome"
            name="nome"
            placeholder="Nome completo"
            handleOnChange=""
            value={lista.nome} />
            <Input
            type="Date"
            text="Data de nascimento"
            name="nascimento"
            placeholder="DD/MM/AAAA" 
            handleOnChange={handleChange}
            value=""
           /><Input
           type="number"
           text="Telefone"
           name="telefone"
           placeholder="(xx)xxxxx-xxxx" 
           handleOnChange={handleChange}
           value=""
           />
           <Input
            type="text"
            text="Email"
            name="email"
            placeholder="Digite seu Email"
            handleOnChange=""
            value={lista.nome} />
            <SubmitButton text='Inscrever-se' />
        </form>
    )
}

export default Estrutura