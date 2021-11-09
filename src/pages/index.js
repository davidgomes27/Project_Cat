import * as React from "react"
import GlobalStyle from "../Components/ResetGlobal/reset"
import { Helmet } from "react-helmet"
import Header from "../Components/Header/index"
import Main from "../Components/Main/index"
import Footer from "../Components/ZFooter/index"





const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <title>Cat House</title>
      </Helmet>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default IndexPage
