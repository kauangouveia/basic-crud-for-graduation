import { ReactNode, useContext, useEffect } from "react"
import { ListContext } from "../../context/contextList"
// import { getVisitorService } from "../../service/visitor"
import { ContainerDynamic } from "./style"

type ContainerProps = {
    children: ReactNode
}


export const Container = ({ children }: ContainerProps) => {
    const { setList, list } = useContext(ListContext)




    return (
        <>
            <ContainerDynamic>
                {children}
            </ContainerDynamic>
        </>
    )
}