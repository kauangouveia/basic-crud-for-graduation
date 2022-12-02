import styled from 'styled-components';


export const Content = styled.div`
    width: 500px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:2rem;
    color: white;
    
`
export const Box = styled.div`
    width: 250px;
    height: 230px;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid gray;
    cursor: pointer;
    &:hover,focus{
    box-shadow: 0 0.5em 0.5em -0.4em #81D8F7;
    transform: translateY(-0.25em);
    transition: 112;
}
    img{
        width: 70%;
    }

    :last-child{
        h1{
            margin-top: .6rem;
        }
    }
`
