import styled from "styled-components"


export const Container =styled.section`
    width: 100%;
`

export const BoxSocial = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 1690px;
    background-color: #3C4049;
    padding: 5rem 0;

`
export const BoxLogo = styled.div`
   width: 7%;
   display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.500rem;
`

export const BoxIMGLOGO = styled.div`
    width: 50%;

`

export const BoxTitleLogo = styled.div`
    width: 50%;


    .Title{
        display: flex;
        font-size: 110%;
        font-weight: bolder;
        text-transform: uppercase; 
    }

    .SubTitle{
        display: flex;
        font-size: 90%;
        font-weight: bolder;
        text-transform: uppercase;
    }
`

export const BoxContacts = styled.div`
    width: 15%;
    height: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    gap: 2rem;


    .BoxLinks{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .TitleLinks{
        font-size: 1.500em;
    }
`

export const HyperLinks = styled.a`
    text-decoration: none;
    color: #fff;

`

export const BoxCopyHight = styled.div`
    width: 100%;
    max-width: 1690px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2E2F34;

    .CopyHight{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding: 2rem 0;
        
    }

`

export const BoxCreatedBy = styled.div`
    width: 100%;
    max-width: 1690px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #222326;

    .Created_By_VNW{
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding: 2rem 0;
    }

`