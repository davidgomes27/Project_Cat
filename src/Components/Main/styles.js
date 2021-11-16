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
    background-position: center 30%;
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

        img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
        
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
    

    .Title{
        font-size: 32px;
        font-weight: bold;
    }

    .SubTitle{
        text-align: left;
        font-size: 22px;
        margin: 1rem 0;
    }
`


export const BoxListInfoCat = styled.div`
    width: 52%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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

    .TextLorem{
        font-size: 22px;
    }

`

export const SectionCatMovies = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FEAF02;
    padding: 3rem 0;
`

export const ContainerCatMovies = styled.div`
    width: 80%;
    max-width: 1690px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const BoxTextCatMovie = styled.div`
    width: 100%;
    text-align: center;
    padding: 2rem 0 3rem 0;
   

    p:first-letter{
        text-transform: uppercase;
    }
    .Title{
        color: #fff;
        font-size: 2em;
    }


    
    

`

export const BoxCatMovie = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .BoxMovie{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        padding: 0.500rem 0.500rem 1rem 0.500rem;
    }

    .SubTitle{
        font-size: 1.300em;
        text-transform: capitalize;
        font-weight: bold;
    }

`


