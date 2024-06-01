import { useEffect, useState } from 'react'

import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"


function ContainerForm({ handleSubmit, projectData }) {

    const [project, setProject] = useState(projectData || {})

    return (
        <form>
            <p>teste</p>
            <Input
            type="text"
            text="Nome"
            name="nome"
            placeholder="Nome completo"
            handleOnChange=""
            value={project.nome} />
            <Input
           type="number"
           text="Data de nacimento"
           name="nacimento"
           placeholder="DD/MM/AAAA" 
           handleOnChange=''
           value=""
           />
            <SubmitButton text='Cadastrar' />
        </form>
    )
}

export default ContainerForm