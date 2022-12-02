import { useForm } from "react-hook-form";
import { Box, Button, Container, ContentForm, Td, TransactionsTable } from "./style";
import room from "../../assets/list.svg"
import { StepContext } from '../../context/contextSteps'
import { useContext, useEffect, useState } from "react";
import { ListContext } from "../../context/contextList";
import { api } from "../../service";
import updateList from '../../assets/update.svg'
import remove from '../../assets/delete.svg'
import { deleteVisitor, updateVisitor } from "../../service/visitor";
import { ModalRegister } from "../ModalRegister";
import { VisitorsContext } from "../../context/visitors";



export const ListVisitors = () => {

  interface dataDeleteVisitor {
    cpf: string,
    data_de_cadastro: string,
    id: number,
    idade: string,
    nome: string,
    telefone: string,
    status: string
  }

  const { setStep, step } = useContext(StepContext)
  const { setList, list } = useContext(ListContext)
  const { visitors, setVisitors } = useContext(VisitorsContext)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [actualizing, setActualizing] = useState(false)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const showModalUpdateVisitor = (item: any) => {
    setIsModalOpen(true)
    setVisitors(item)
  }

  


  return (
    <>

      {isModalOpen && <ModalRegister setIsModalOpen={setIsModalOpen} />}
      <ContentForm>
        <Box>
          <img src={room} alt='chat' />
          <h1>Lista de visitantes</h1>
        </Box>
        <Container>
          <TransactionsTable>
            <tbody>
              {list.map((item) => (
                <tr>
                  <Td variant={item?.status === 'ATIVO' ? 'income' : 'outcome'}>{item?.nome}</Td>
                  <Td variant={item?.status === 'ATIVO' ? 'income' : 'outcome'}>
                    <span>
                      {item?.cpf}
                    </span>
                  </Td>
                  <Td variant={item?.status === 'ATIVO' ? 'income' : 'outcome'}>{item?.status}</Td>
                  <Td variant={item?.status === 'ATIVO' ? 'income' : 'outcome'} onClick={() => showModalUpdateVisitor(item)}><img src={updateList} alt='update' /></Td>
                  <Td variant={item?.status === 'ATIVO' ? 'income' : 'outcome'} onClick={() => {deleteVisitor(item),location.reload()}}><img src={remove} alt='remove' /></Td>
                  <Td variant={item?.status === 'ATIVO' ? 'income' : 'outcome'} className='date'>{item?.data_de_cadastro}</Td>
                </tr>
              ))}
            </tbody>
          </TransactionsTable>
        </Container>
        <h3 onClick={() => setStep(1)}>Voltar</h3>
      </ContentForm>
    </>
  )
}





