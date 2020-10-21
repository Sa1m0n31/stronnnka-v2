import React from "react"

import { Helmet } from 'react-helmet';

import LandingPage from "../components/LandingPage";
import Technologie from "../components/Technologie";
import DlaczegoMy from "../components/DlaczegoMy";
import Form from "../components/Form";
import Portfolio from "../components/Portfolio";
import Lighthouse from "../components/Lighthouse";
import Footer from "../components/Footer";

import '../../static/sass/style.sass';
import '../../static/sass/mobile.sass';

export default function Home() {
  return (<div className="app">
      <Helmet htmlAttributes={{lang: "pl"}}>
          <meta charSet="utf-8" />
          <title>Skylo - profesjonalne witryny dla firm</title>
          <meta name="description" content="Tanie i profesjonalne projekty stron internetowych"/>
          <link rel="icon" type="icon/png" href={require("../../static/img/skylo-favicon.png")} sizes="16x16" />
      </Helmet>
      <LandingPage/>
      <DlaczegoMy/>
      <Form />
      <Portfolio/>
      <Technologie/>
      <Lighthouse/>
      <Footer/>
  </div>);
}
