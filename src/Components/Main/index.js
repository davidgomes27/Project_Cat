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
    <S.Container id = "Home" >
      <S.SectionCatBGC  back={backgroundimgmain.url}>
        <S.ContainerIntro>
          <span className="Title">{titlecathouse}</span>
          <span className="Subtitle">{subtitlecatdaycare}</span>
          <span className="Lorem">{subtitlewhycathouse}</span>
          <S.HyperLink href="">{btnreservenow}</S.HyperLink>
        </S.ContainerIntro>
      </S.SectionCatBGC>
      <S.SectionServices id = "OurService">
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
      <S.SectionInfoCatHouse id = "AboutUs">
        <S.BoxContainerInfoCatHouse>
          <S.BoxTextInfoCat>
            <span className="Title">{titlewhycathouse}</span>
            <span className="SubTitle">{subtitlewhycathouse}</span>
          </S.BoxTextInfoCat>
          <S.BoxListInfoCat>
            <S.BoxPoniterYellow>
              <div className="BoxIMG_Pointer_Yellow">
                <img style={{ width: '100%', height: '100%' }} src={pontoamarelo.url} />
              </div>
              <span className="TextLorem">{titleloremconsectur}</span>
            </S.BoxPoniterYellow>
            <S.BoxPoniterYellow>
              <div className="BoxIMG_Pointer_Yellow">
                <img style={{ width: '100%', height: '100%' }} src={pontoamarelo.url} />
              </div>
              <span className="TextLorem">{titleloremamet}</span>
            </S.BoxPoniterYellow>
            <S.BoxPoniterYellow>
              <div className="BoxIMG_Pointer_Yellow">
                <img style={{ width: '100%', height: '100%' }} src={pontoamarelo.url} />
              </div>
              <span className="TextLorem">{titleloremelit}</span>
            </S.BoxPoniterYellow>
            <S.BoxPoniterYellow>
              <div className="BoxIMG_Pointer_Yellow">
                <img style={{ width: '100%', height: '100%' }} src={pontoamarelo.url} />
              </div>
              <span className="TextLorem">{titleloremsit}</span>
            </S.BoxPoniterYellow>
          </S.BoxListInfoCat>
        </S.BoxContainerInfoCatHouse>
      </S.SectionInfoCatHouse>
      <S.SectionCatMovies id = "Reservation">
        <S.ContainerCatMovies>
          <S.BoxTextCatMovie>
            <p className="Title">{titlewhatourcustomersay}</p>
          </S.BoxTextCatMovie>
          <S.BoxCatMovie>
            <div className="BoxMovie">
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/O5zlRruXH4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <span className="SubTitle">{titlejanedoe}</span>
              </div>
            </div>
            <div className="BoxMovie">
              <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/gu1YMiIWg70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div>
                <span className="SubTitle">{titlejanedoe}</span>
              </div>
            </div>
          </S.BoxCatMovie>
        </S.ContainerCatMovies>
      </S.SectionCatMovies>
    </S.Container>
  )
}
