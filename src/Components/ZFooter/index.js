import React from 'react'
import * as S from "./styles"
import { graphql , useStaticQuery } from 'gatsby'
 

export default function Footer() {

    const data = useStaticQuery(graphql`
    
        query{
            alldata{
                footers {
                    imglogocat {
                      url
                    }
                    btnaboutus
                    btncontactus
                    btnfacebook
                    btngoogle
                    btnhome
                    btnourservices
                    btnpinterest
                    btnreservation
                    btntwitter
                    subtitlelogo
                    title12345North
                    titlecopyrght
                    titlecreatedbyvnw
                    titledaycare
                    titleemail
                    titlelogo
                    titlemelbourne
                    titlemonday
                    titlenumber
                    titleourlocation
                    titlequicklinks
                    titlesaturday
                    titlesocials
                }
            } 
        }
    
    `)

    const {
        
        imglogocat,
        btnaboutus,
        btncontactus,
        btnfacebook,
        btngoogle,
        btnhome,
        btnourservices,
        btnpinterest,
        btnreservation,
        btntwitter,
        subtitlelogo,
        title12345North,
        titlecopyrght,
        titlecreatedbyvnw,
        titledaycare,
        titleemail,
        titlelogo,
        titlemelbourne,
        titlemonday,
        titlenumber,
        titleourlocation,
        titlequicklinks,
        titlesaturday,
        titlesocials,

    } = data.alldata.footers[0]


    return (
        <S.Container id ="Contactus">
            <S.BoxSocial>
                <S.BoxLogo >
                    <S.BoxIMGLOGO>
                        <img style={{width:'100%' , height:'100%'}} src={imglogocat.url} alt="imagem de um gato refenrente ao logotipo"/>
                    </S.BoxIMGLOGO>
                    <S.BoxTitleLogo>
                        <span className="Title">{titlelogo}</span>
                        <span className="SubTitle">{subtitlelogo}</span>
                    </S.BoxTitleLogo>
                </S.BoxLogo>
                <S.BoxContacts>
                    <div>
                        <sapn className="TitleLinks">{titleourlocation}</sapn>
                    </div>
                    <div className="BoxLinks">
                        <span>{title12345North}</span>
                        <span>{titlenumber}</span>
                        <span>{titleemail}</span>
                    </div>
                </S.BoxContacts>
                <S.BoxContacts>
                    <div>
                        <span className="TitleLinks">{titledaycare}</span>
                    </div>
                    <div className="BoxLinks">
                        <span>{titlemonday}</span>
                        <span>{titlesaturday}</span>
                    </div>
                </S.BoxContacts>
                <S.BoxContacts>
                    <div>
                        <span className="TitleLinks">{titlequicklinks}</span>
                    </div>
                    <div className="BoxLinks">
                        <S.HyperLinks href="#Home">{btnhome}</S.HyperLinks>
                        <S.HyperLinks href="#AboutUs">{btnaboutus}</S.HyperLinks>
                        <S.HyperLinks href="#OurService">{ btnourservices}</S.HyperLinks>
                        <S.HyperLinks href="#Reservation">{btnreservation}</S.HyperLinks>
                        <S.HyperLinks href="#Contactus">{btncontactus}</S.HyperLinks>
                    </div>
                </S.BoxContacts>
                <S.BoxContacts>
                    <div>
                        <span className="TitleLinks">{titlesocials}</span>
                    </div>
                    <div className="BoxLinks">
                        <S.HyperLinks href="">{btntwitter}</S.HyperLinks>
                        <S.HyperLinks href="">{btnfacebook}</S.HyperLinks>
                        <S.HyperLinks href="">{btngoogle}</S.HyperLinks>
                        <S.HyperLinks href="">{btnpinterest}</S.HyperLinks>
                    </div>
                </S.BoxContacts>
            </S.BoxSocial>
            <S.BoxCopyHight>
                <div className="CopyHight">
                    <span>{titlecopyrght}</span>
                </div>
            </S.BoxCopyHight>
            <S.BoxCreatedBy>
                <div className="Created_By_VNW">
                    <span>{titlecreatedbyvnw}</span>
                </div>
            </S.BoxCreatedBy>
        </S.Container>
    )
}
