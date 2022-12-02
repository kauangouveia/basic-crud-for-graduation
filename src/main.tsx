import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ListProvider } from './context/contextList';
import { StepProvider } from "./context/contextSteps";
import { VisitorProvider } from './context/visitors';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ListProvider>
      <VisitorProvider>
        <StepProvider>
          <App />
        </StepProvider>
      </VisitorProvider>
    </ListProvider >
  </React.StrictMode>
)
