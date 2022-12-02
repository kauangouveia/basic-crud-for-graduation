import { useForm } from "react-hook-form";
import { Box, Button, ContainerModal, ContentForm, Form, Input, Label, Select } from "./style";
import chat from "../../assets/register.svg"
import { StepContext } from '../../context/contextSteps'
import { useContext } from "react";
import { api } from "../../service";
import { createVisitor } from "../../service/visitor";
import { VisitorsContext } from "../../context/visitors";
import { updateVisitor } from "../../service/visitor";



type ModalRegisterProps = {
    setIsModalOpen: Function
}


export const ModalRegister = ({ setIsModalOpen }: ModalRegisterProps) => {

    const { setStep, step } = useContext(StepContext)
    const { visitors, setVisitors } = useContext(VisitorsContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        const newData = {
            id: visitors.id,
            data_de_cadastro: visitors.data_de_cadastro,
            ...data
        }
        updateVisitor(newData)
    }


    return (
        <>
            <ContainerModal>

                <ContentForm onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <img src={chat} alt='chat' />
                        <h2>Edite um visitante</h2>
                    </Box>
                    <Form>
                        <Label>Nome</Label>
                        <Input type="name" placeholder="Digite  e-mail" {...register('nome')} required />
                        <Label>CPF</Label>
                        <Input type="text" placeholder="Digite  CPF" {...register('cpf')} required />
                        <Label>Idade</Label>
                        <Input type="text" placeholder="Digite  idade" {...register('idade')} required />
                        <Label>Telefone</Label>
                        <Input type="text" placeholder="Digite  telefone" {...register('telefone')} required />
                        <Label>Permanente</Label>
                        <Select {...register("permanente")}>
                            <option value="true">SIM</option>
                            <option value="false">NÃO</option>
                        </Select>
                        <Button>Atualizar</Button>
                    </Form>
                    <h3 onClick={() => setIsModalOpen(false)}>Voltar</h3>
                </ContentForm>
            </ContainerModal>
        </>
    )
}





