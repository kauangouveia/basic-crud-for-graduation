import { useContext } from "react";
import { ChatRoom } from "./components/ChatRoom";
import { Container } from "./components/Container";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Room } from "./components/Room";
import { StepContext, StepProvider } from "./context/contextSteps";
import { GlobalStyle } from "./styles/global";

export function App() {
  const { setStep, step } = useContext(StepContext)

  return (
    <>
      <GlobalStyle />
      <Container>
        {step === 0 && <Login />}
        {step === 1 && <Register />}
        {step === 2 && <Room />}
        {step === 3 && <ChatRoom />}
      </Container>
    </>
  )
}

