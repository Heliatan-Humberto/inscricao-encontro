import styles from './Estrutura.module.css'

import { useEffect, useState } from 'react'

import Input from "./Input"
import SubmitButton from "./SubmitButton"
import Message from "../layout/Message"


function Estrutura({ handleSubmit, listData }) {

    const [list, setList] = useState(listData || {})
    const [message, setMessage] = useState()
    const [type, setType] =useState()

    const submit = (e) => {

        e.preventDefault();

        if (validarDados()) {
            handleSubmit(list);
        } else {
            setMessage('Por favor, insira os dados válidos.')
            setType('error')
        }
    }

    function validarDados() {
        return validarNome(list.nome) && validarTelefone(list.telefone)
    }

    function handleChange(e) {
        setList({ ...list, [e.target.name]: e.target.value })
    }

    //validar nome e telefone

    function validarNome(nome) {

        return nome && nome.length > 0 && /^[A-Za-z\s]+$/.test(nome);
    }

    function validarTelefone(Telefone) {
        return /^\d{11}$/.test(Telefone)
    }

    return (<>
        {message && <Message type="error" msg={message} />}
        <form onSubmit={submit} className={styles.form}>
            <Input
            type="text"
            text="Nome"
            name="nome"
            placeholder="Nome completo"
            handleOnChange={handleChange}
            value={list.nome ? list.nome: ''}
             />
            <Input
            type="Date"
            text="Data de nascimento"
            name="nascimento"
            placeholder="DD/MM/AAAA" 
            handleOnChange={handleChange}
            value={list.nascimento ? list.nascimento : ''}
           /><Input
           type="number"
           text="Telefone"
           name="telefone"
           placeholder="(xx)xxxxx-xxxx" 
           handleOnChange={handleChange}
           value={list.telefone ? list.telefone : ''}
           />
           <Input
            type="text"
            text="Email"
            name="email"
            placeholder="Digite seu Email"
            handleOnChange={handleChange}
            value={list.email ? list.email : ''}
            />
            <SubmitButton text='Inscrever-se' />
        </form>
    </>)
}

export default Estrutura