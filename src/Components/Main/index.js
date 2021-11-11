import React from 'react'
import * as S from "./styles"
import { graphql , useStaticQuery } from "gatsby"

export default function Main() {

    const data = useStaticQuery(graphql`
    
        query{
            alldata{
                mains{

                    btnreservenow
                    backgroundimgmain {
                      url
                    }
                    imgmain1 {
                      url
                    }
                    imgmain2 {
                      url
                    }
                    imgmain3 {
                      url
                    }
                    imgmain4 {
                      url
                    }
                    imgvideofake1 {
                      url
                    }
                    imgvideofake2 {
                      url
                    }
                    pontoamarelo {
                      url
                    }
                    subtitlecatdaycare
                    subtitlewhycathouse
                    titleboarding
                    titlecathouse
                    titledaycare
                    titlegrooming
                    titlejanedoe
                    titleloremamet
                    titleloremconsectur
                    titleloremelit
                    titleloremsit
                    titletraining
                    titlewhatourcustomersay
                    iconplay {
                      url
                    }
                    titlewhycathouse

                }
            }
        }
    
    `)


    const {
        
        btnreservenow,
        subtitlecatdaycare,
        subtitlewhycathouse,
        titleboarding,
        titlecathouse,
        titledaycare,
        titlegrooming,
        titlejanedoe,
        titleloremamet,
        titleloremconsectur,
        titleloremelit,
        titleloremsit,
        titletraining,
        titlewhatourcustomersay,
        titlewhycathouse,
        imgmain1,
        imgmain2,
        imgmain3, 
        imgmain4,
        imgvideofake1,
        imgvideofake2,
        pontoamarelo,
        backgroundimgmain,
        iconplay,

    } = data.alldata.mains[0]

    
    return (
        <S.Container>
            <S.SectionCatBGC back = { backgroundimgmain.url }>
                <S.ContainerIntro>
                    <span className="Title">{titlecathouse}</span>
                    <span className="Subtitle">{subtitlecatdaycare}</span>
                    <span className="Lorem">{subtitlewhycathouse}</span>
                    <S.HyperLink href="">{btnreservenow}</S.HyperLink>
                </S.ContainerIntro>
            </S.SectionCatBGC>
        </S.Container>
    )
}
