import styled from "styled-components"


export const Container = styled.section`
    width: 100%;
    margin-top: 7%;

`

export const SectionCatBGC = styled.section`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${prop => prop.back});
`

export const ContainerIntro = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 5%;
    
    .Title{
        color: #472d2d;
        font-size: 56px;
        height: 10%;
        text-transform: uppercase;
        font-weight: bolder;
    }

    .Subtitle{
        
        color: #472d2d;
        font-size: 48px;
        height: 9%;
        text-transform: capitalize;
        
    }

    .Lorem{
        display: flex;
        color: #472d2d;
        width: 38%;
        height: 20%;
        font-size: 24px;
        text-align: right;
        
    }

`

export const HyperLink = styled.a`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 324px;
    height: 78px;
    background-color: #FEAF02;
    text-decoration: none;
    text-transform: uppercase;
    transition: 1s;
    border-radius: 4px;

    &:hover{
        -webkit-box-shadow: 0px 2px 9px -1px rgba(0,0,0,0.67);
        -moz-box-shadow: 0px 2px 9px -1px rgba(0,0,0,0.67);
        box-shadow: 0px 2px 9px -1px rgba(0,0,0,0.67);

        text-shadow: 5px 0px 2px rgba(149, 150, 150, 1);
    }

`

export const SectionServices = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1600px;
    padding: 5rem 0;


`

export const BoxCardsServices = styled.div`
    width: 80%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`

export const CardService = styled.div`
    width: 25%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.70rem;

    .BoxIMG{
        
        width: 100%;
        height: 200px;
        
    }

    .Text{
        color: #373737;
        font-size: 24px;
        font-weight: bold;
        text-transform: capitalize;
    }

    .HyperLink{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #FFFFFF;
        width: 195px;
        height: 53px;
        background: #FEAF02 0% 0%;
        border-radius: 4px;
        transition: 1s;
        

        &:hover{
            -webkit-box-shadow: 0px 2px 9px -1px rgba(0,0,0,0.67);
            -moz-box-shadow: 0px 2px 9px -1px rgba(0,0,0,0.67);
            box-shadow: 0px 2px 9px -1px rgba(0,0,0,0.67);
            text-shadow: 5px 0px 2px rgba(149, 150, 150, 1);
        }
    }
`

export const SectionInfoCatHouse = styled.section`
    width: 100%;
    background-color: #00000029;
    
`

export const BoxContainerInfoCatHouse = styled.div`
    width: 50%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;


`

export const BoxTextInfoCat = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: self-start;
    flex-direction: column;
`


export const BoxListInfoCat = styled.div`
    width: 50%;

`


export const BoxPoniterYellow = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;


    .BoxIMG_Pointer_Yellow{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0.500rem 0 0;
    }

`