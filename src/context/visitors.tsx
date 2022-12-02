import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type data = {
    id: number,
    nome: string,
    cpf: string,
    idade: string,
    telefone: string,
    data_de_cadastro: string
}


interface Visitors {
    visitors: data
    setVisitors: Function
}

interface StepProps {
    children: ReactNode
}

export const VisitorsContext = createContext({} as Visitors)


export const VisitorProvider = ({ children }: StepProps) => {
    const [visitors, setVisitors ] = useState({
        cpf: '',
        data_de_cadastro: '',
        id: 0,
        nome: '',
        telefone: '',
        idade: ''
    })

    return (
        <VisitorsContext.Provider value={{ visitors, setVisitors }}>
            {children}
        </VisitorsContext.Provider>
    )
}