import React from 'react'
import * as S from "./styles"
import { graphql, useStaticQuery } from 'gatsby'



export default function Header() {

    const data = useStaticQuery(graphql`
    
        query{
            alldata{
                headers{

                    icontell {
                        url
                    }
                    logoCat {
                        url
                    }
                    titlelogo
                    subtitlelogo
                    btncontactus
                    btnhome
                    btnnumber
                    btnourservices
                    btnreservation
                    btnaboutus


                }
            }
        }    
    `)


    const {
        icontell,
        logoCat,
        titlelogo,
        subtitlelogo,
        btncontactus,
        btnhome,
        btnnumber,
        btnourservices,
        btnreservation,
        btnaboutus

    } = data.alldata.headers[0]
    return (
        <S.Container>
            <S.BoxLogo>
                <S.BoxIMG>
                    <img style={{width:'100%', height:'100%'}} src={logoCat.url} alt="imagem de um gato"/>
                </S.BoxIMG>
                <S.BoxTextLogo>
                    <spam className="spam1">{titlelogo}</spam>
                    <spam className="spam2">{subtitlelogo}</spam>
                </S.BoxTextLogo>
            </S.BoxLogo>
            <S.BoxNav>
                <S.HypperLink href="">{btnhome}</S.HypperLink>
                <S.HypperLink href="">{btnaboutus}</S.HypperLink>
                <S.HypperLink href="">{btnourservices}</S.HypperLink>
                <S.HypperLink href="">{btnreservation}</S.HypperLink>
                <S.HypperLink href="">{btncontactus}</S.HypperLink>
                <S.HypperLink href=""><img style={{width:'27%', padding:'0 1rem'}} src={icontell.url}/>{btnnumber}</S.HypperLink>
            </S.BoxNav>
        </S.Container>
    )
}