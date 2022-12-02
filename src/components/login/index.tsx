import { useForm } from "react-hook-form";
import { Box, Button, ContentForm, Form, Input, Label } from "./style";
import visitor from "../../assets/visitor.svg"
import { StepContext } from '../../context/contextSteps'
import { useContext, useEffect } from "react";
import { ListContext } from "../../context/contextList";
import { api } from "../../service";
// import { getVisitorService } from "../../service/visitor";

export const Login = () => {

    const { setStep, step } = useContext(StepContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = (data: any) => {
        console.log(step)
        console.log(data)
        setStep(1)
    }



   

    return (
        <>
            <ContentForm onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <img src={visitor} alt='chat' />
                    <h2>Controle de visitantes</h2>
                    <h3>Faça login e cadastre um visitante</h3>
                </Box>
                <Form>
                    <Label>Endereço de e-mail</Label>
                    <Input type="email" placeholder="Digite seu e-mail" {...register('email')} />
                    <Label>Sua senha</Label>
                    <Input type="password" placeholder="Digite sua senha" {...register('password')} />
                    <Button>Entrar na plataforma</Button>
                </Form>
                <div className="withOutRegister">
                    <h5>
                        Não tem cadastro? Crie um agora!
                    </h5>
                </div>
            </ContentForm>
        </>
    )
}





