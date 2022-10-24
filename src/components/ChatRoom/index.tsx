import { useForm } from "react-hook-form";
import { Box, Button, ContentForm, Form, Input, Label } from "./style";
import room from "../../assets/room.svg"
import { StepContext } from '../../context/contextSteps'
import { useContext } from "react";




export const ChatRoom = () => {

    const { setStep, step } = useContext(StepContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(step)
        console.log(data)
        setStep(3)
    }


    return (
        <>
            <ContentForm onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <img src={room} alt='chat' />
                </Box>
                <Form>
                    <Label>ID da sala</Label>
                    <Input type="number" min={1} placeholder="Digite a sala desejada" {...register('room')} />
                    <Button>Entrar na sala</Button>
                </Form>
                <h3 onClick={() => setStep(0)}>Voltar</h3>
            </ContentForm>
        </>
    )
}





