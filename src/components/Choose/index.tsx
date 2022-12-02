import { Box, Content } from "./style";
import { StepContext } from '../../context/contextSteps'
import { useContext } from "react";
import registerChoose from '../../assets/registerChoose.svg'
import listChoose from '../../assets/listChoose.svg'
import { api } from "../../service";
import { ListContext } from "../../context/contextList";

export const Choose = () => {

  const { setStep, step } = useContext(StepContext)
  const { setList, list } = useContext(ListContext)

  const getVisitorService = async () => {
    try {
        const response = await api.get('/visitors')
        const { data } = response
        setList(data)

    } catch (error) {
        console.log(error)
    }
}
  return (
    <>
      <Content>
        <Box onClick={() => setStep(2)}>
          <img src={registerChoose} alt="registrar" />
          <h1>Registrar</h1>
        </Box>
        <Box onClick={() =>{ setStep(3), getVisitorService()}} >
          <img src={listChoose} alt="listar" />
          <h1>Listar</h1>
        </Box>
      </Content>
    </>
  )
}





