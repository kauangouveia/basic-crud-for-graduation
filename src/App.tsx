import { useContext, useEffect } from "react";
import { ListVisitors } from "./components/ListVIsitors";
import { Container } from "./components/Container";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Room } from "./components/Room";
import { StepContext, StepProvider } from "./context/contextSteps";
import { GlobalStyle } from "./styles/global";
// import { getVisitorService } from "./service/visitor";
import { ListContext } from "./context/contextList";
import { Choose } from "./components/Choose";

export function App() {
  const { setStep, step } = useContext(StepContext)

 

// useEffect(() => { getVisitorService() }, [])

return (
    <>
      <GlobalStyle />
      <Container>
        {/* {step === 0 && <Login />} */}
        {step === 1 && <Choose />}
        {step === 2 && <Register />}
        {step === 3 && <ListVisitors  />}
      </Container>
    </>
  )
}

