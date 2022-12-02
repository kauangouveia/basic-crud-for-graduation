import styled from 'styled-components';


export const ContentForm = styled.div`
    width: 500px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
    h1{
        color:white;
    }
    
    `
interface PriceHighLightProps {
    variant?: 'income' | 'outcome'
}

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;
    
    tr{
        .date{
            font-size: 1rem;
            /* background-color:red; */
            padding: 0;
        }
    }
`
export const Container = styled.table`
    width: 800px;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;
    padding: 1rem;
    height: auto;
    border: solid 1px gray;
    border-radius: 16px;

`
export const Td = styled.td<PriceHighLightProps>`
        padding: 1.25rem 2rem;
        background-color: white;
        width: auto;
        height: 30px;
        border-top: 3px solid ${props => props.variant === 'income' ? '#18ff18' : 'red'};
        border-bottom: 3px solid ${props => props.variant === 'income' ? '#18ff18' : 'red'};
        &:first-child{
            border-left: 3px solid ${props => props.variant === 'income' ? '#18ff18' : 'red'};
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
        &:last-child{
            border-right: 3px solid ${props => props.variant === 'income' ? '#18ff18' : 'red'};
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }

        img{
            width: 25px;
            cursor: pointer;
        }
`
