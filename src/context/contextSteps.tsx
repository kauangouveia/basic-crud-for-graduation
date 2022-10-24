import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Step {
    step: number
    setStep: Function
}
interface StepProps {
    children: ReactNode
}

export const StepContext = createContext({} as Step)


export const StepProvider = ({ children }: StepProps) => {
    const [step, setStep] = useState(0)
    return (
        <StepContext.Provider value={{ setStep, step }}>
            {children}
        </StepContext.Provider>
    )
}