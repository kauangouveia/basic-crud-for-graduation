import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type data = {
    status: string;
    cpf: string,
    data_de_cadastro: string,
    id: number,
    nome: string,
    telefone: string
}


interface List {
    list: data[]
    setList: Function
}

interface StepProps {
    children: ReactNode
}

export const ListContext = createContext({} as List)


export const ListProvider = ({ children }: StepProps) => {
    const [list, setList] = useState([{
        cpf: '',
        data_de_cadastro: '',
        id: 0,
        nome: '',
        telefone: ''
    }])

    return (
        <ListContext.Provider value={{ list, setList }}>
            {children}
        </ListContext.Provider>
    )
}