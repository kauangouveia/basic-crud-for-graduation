import { useForm } from "react-hook-form";
import { Box, Button, ContentForm, Form, Input, Label } from "./style";
import chat from "../../assets/register.svg"
import { StepContext } from '../../context/contextSteps'
import { useContext } from "react";

export const Register = () => {

    const { setStep, step } = useContext(StepContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(step)
        console.log(data)
        setStep(2)
    }


    return (
        <>
            <ContentForm onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <img src={chat} alt='chat' />
                </Box>
                <Form>
                    <Label>Seu Nome</Label>
                    <Input type="name" placeholder="Digite seu e-mail" {...register('name')} />
                    <Label>Seu Email</Label>
                    <Input type="email" placeholder="Digite sua senha" {...register('email')} />
                    <Label>Sua Senha</Label>
                    <Input type="email" placeholder="Digite sua senha" {...register('password')} />
                    <Button>Cadastrar-se</Button>
                </Form>
                <h3 onClick={() => setStep(0)}>Voltar</h3>
            </ContentForm>
        </>
    )
}





