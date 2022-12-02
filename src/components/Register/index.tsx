import { useForm } from "react-hook-form";
import { Box, Button, ContentForm, Form, Input, Label, Select } from "./style";
import chat from "../../assets/register.svg"
import { StepContext } from '../../context/contextSteps'
import { useContext } from "react";
import { api } from "../../service";
import { createVisitor } from "../../service/visitor";

export const Register = () => {

    const { setStep, step } = useContext(StepContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        createVisitor(data)
        setStep(1)
    }


    return (
        <>
            <ContentForm onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <img src={chat} alt='chat' />
                    <h2>Registre um visitante</h2>
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
                    <Button>Cadastrar</Button>
                </Form>
                <h3 onClick={() => setStep(1)}>Voltar</h3>
            </ContentForm>
        </>
    )
}





