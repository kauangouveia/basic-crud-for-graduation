import styled from 'styled-components';


export const ContentForm = styled.div`
    width: 600px;
    height: auto;
    padding:  3rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #23232a;
    .withOutRegister{
        width: auto;
        color: white;
        margin-top: 10px;
        cursor: pointer;
    }
    h3{
        margin-top: 1rem;
        cursor: pointer;
        color: white;
    }
    `
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    `
export const Label = styled.label`
    margin-bottom: 12px;
    margin-top: 16px;
    color: white;
    font-weight: 600;
`
export const Input = styled.input`
   width: 400px;
   height: 50px;
   padding: 10px;
   color: white;
   border-radius: 4px;
   border: 1px solid gray;
   background-color: transparent;
   `
export const Button = styled.button`
   width: 400px;
   height: 50px;
   margin-top: 25px;
   border: 0px;
   border-radius: 4px;
   background-color: #81D8F7;
   color: black;  
   font-weight: 700;
   cursor: pointer;

   &:hover,focus{
    box-shadow: 0 0.5em 0.5em -0.4em #81D8F7;
    transform: translateY(-0.25em);
    transition: 112;
}

`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        margin-bottom: 10px;
        width: 50%;
    }

    h2{
        margin-bottom: 5px;
        color: white;
        text-decoration: underline;
    }
    h3{
        margin-bottom: 5px;
        color:#7C7C8A;
    }

    
`
export const ContainerModal = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #37373769;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
`
export const Select = styled.select`
    background: white;
    margin-top: 1rem;
    border-radius: 8px;
    height: 3rem;
    color: black;
    font-size: .8rem;
    padding-left: 0.7rem;
`


