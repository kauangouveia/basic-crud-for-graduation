import { ReactNode } from "react"
import { ContainerDynamic } from "./style"

type ContainerProps = {
    children: ReactNode
}


export const Container = ({ children }: ContainerProps) => {
    return (
        <>
            <ContainerDynamic>
                {children}
            </ContainerDynamic>
        </>
    )
}