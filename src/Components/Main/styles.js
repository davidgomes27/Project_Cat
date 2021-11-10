import styled from "styled-components"


export const Container = styled.section`
    width: 100%;
    margin-top: 7%;

`

export const SectionCatBGC = styled.div`
    width: 100vw;
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
    align-items: flex-start;
    
    .Title{
        color: #6D4545;
        font-size: 56px;
        text-transform: uppercase;
        font-weight: bolder;
    }

    .Subtitle{

    }

    .Lorem{

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

`