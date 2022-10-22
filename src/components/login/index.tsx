import { useForm } from "react-hook-form";
import { Box, Button, ContentForm, Form, Input, Label } from "./style";
import chat from "../../assets/chat.svg"

export const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
 
        console.log(data)
    }


    return (
        <>
            <ContentForm onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <img src={chat} alt='chat' />
                    <h2>Chat Real</h2>
                    <h3>Faça login e comece utilizar</h3>
                </Box>
                <Form>
                    <Label>Endereço de e-mail</Label>
                    <Input type="email" placeholder="Digite seu e-mail" {...register('email')}/>
                    <Label>Sua senha</Label>
                    <Input type="password" placeholder="Digite sua senha" {...register('password')}/>
                    <Button>Entrar na plataforma</Button>
                </Form>
            </ContentForm>
        </>
    )
}





