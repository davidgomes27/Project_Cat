import styled from "styled-components"


export const Container = styled.section`
    width: 100%;
    margin-top: 7%;

`

export const SectionCatBGC = styled.div`
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