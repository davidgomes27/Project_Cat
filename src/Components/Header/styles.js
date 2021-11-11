import styled from "styled-components"



export const Container = styled.section`
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: #fff;
    box-shadow: 0px 3px 6px #00000029;
    z-index: 999999;
    top: 0px;
    

`

export const BoxLogo =styled.div`
    width: 8%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const BoxIMG = styled.div`
    width: 39%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxTextLogo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .spam1{

        display: flex;
        font-size: 110%;
        font-weight: bolder;
        text-transform: uppercase;
    }

    .spam2{
        display: flex;
        font-size: 90%;
        font-weight: bolder;
        text-transform: uppercase;
    }
`

export const BoxNav = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 3rem;
`


export const BoxHyperLink = styled.div`


`
export const HypperLink = styled.a`
    color: #000;
    font-size: 16px;
    text-decoration: none;
    color: #373737;
    text-transform: uppercase;
    
    &:hover{
        border-bottom: #000 solid 0.500px;
        
    }


`


