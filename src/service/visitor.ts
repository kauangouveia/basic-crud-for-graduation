import { useContext } from 'react';
import { ListContext } from './../context/contextList';
import { api } from './index';
import { format } from 'date-fns'



interface dataDeleteVisitor {
    data: {
        cpf: string,
        data_de_cadastro: string,
        id: number,
        idade: string,
        nome: string,
        telefone: string,
    }
}


export const createVisitor = async (data: any) => {
    try {
        const visitors = {
            ...data,
            data_de_cadastro: format(new Date(), 'yyyy-MM-dd')
        }

        const response = await api.post('/visitors', visitors)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
export const deleteVisitor = async (data: any) => {
    try {
        const response = await api.delete('/visitors', { data })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
export const updateVisitor = async (data: any) => {
    try {
        const response = await api.put('/visitors', data)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}