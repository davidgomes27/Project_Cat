import React from 'react'
import * as S from "./styles"
import { graphql, useStaticQuery } from "gatsby"

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
                    titlelearnmore

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
    titlelearnmore,
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
      <S.SectionCatBGC back={backgroundimgmain.url}>
        <S.ContainerIntro>
          <span className="Title">{titlecathouse}</span>
          <span className="Subtitle">{subtitlecatdaycare}</span>
          <span className="Lorem">{subtitlewhycathouse}</span>
          <S.HyperLink href="">{btnreservenow}</S.HyperLink>
        </S.ContainerIntro>
      </S.SectionCatBGC>
      <S.SectionServices>
        <S.BoxCardsServices>
          <S.CardService>
            <div className="BoxIMG">
              <img src={imgmain1.url} alt="imagem de um gato" />
            </div>
            <span className="Text">{titleboarding}</span>
            <a className="HyperLink" href="">{titlelearnmore}</a>
          </S.CardService>
          <S.CardService>
            <div className="BoxIMG">
              <img src={imgmain2.url} alt="imagem de um gato" />
            </div>
            <span className="Text">{titledaycare}</span>
            <a className="HyperLink" href="">{titlelearnmore}</a>
          </S.CardService>
          <S.CardService>
            <div className="BoxIMG">
              <img src={imgmain3.url} alt="imagem de um gato" />
            </div>
            <span className="Text">{titletraining}</span>
            <a className="HyperLink" href="">{titlelearnmore}</a>
          </S.CardService>
          <S.CardService>
            <div className="BoxIMG">
              <img src={imgmain4.url} alt="imagem de um gato" />
            </div>
            <span className="Text">{titlegrooming}</span>
            <a className="HyperLink" href="">{titlelearnmore}</a>
          </S.CardService>
        </S.BoxCardsServices>
      </S.SectionServices>
      <S.SectionInfoCatHouse>
        <S.BoxContainerInfoCatHouse>
          <S.BoxTextInfoCat>
            <span>{titlewhycathouse}</span>
            <span>{subtitlewhycathouse}</span>
          </S.BoxTextInfoCat>
          <S.BoxListInfoCat>
            <S.BoxPoniterYellow>
              <div className="BoxIMG_Pointer_Yellow">
                <img style={{ width: '100%', height: '100%' }} src={pontoamarelo.url} />
              </div>
              <span>{titleloremconsectur}</span>
            </S.BoxPoniterYellow>
            <S.BoxPoniterYellow>
              <div className="BoxIMG_Pointer_Yellow">
                <img style={{ width: '100%', height: '100%' }} src={pontoamarelo.url} />
              </div>
              <span>{titleloremamet}</span>
            </S.BoxPoniterYellow>
            <S.BoxPoniterYellow>
              <div className="BoxIMG_Pointer_Yellow">
                <img style={{ width: '100%', height: '100%' }} src={pontoamarelo.url} />
              </div>
              <span>{titleloremelit}</span>
            </S.BoxPoniterYellow>
            <S.BoxPoniterYellow>
              <div className="BoxIMG_Pointer_Yellow">
                <img style={{ width: '100%', height: '100%' }} src={pontoamarelo.url} />
              </div>
              <span>{titleloremsit}</span>
            </S.BoxPoniterYellow>
          </S.BoxListInfoCat>
        </S.BoxContainerInfoCatHouse>
      </S.SectionInfoCatHouse>
    </S.Container>
  )
}
