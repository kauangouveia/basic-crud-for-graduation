import { Container } from "./components/Container";
import { Login } from "./components/login";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Login />
      </Container>
    </>
  )
}

