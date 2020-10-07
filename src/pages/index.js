import React from "react"

import LandingPage from "../components/LandingPage";
import Technologie from "../components/Technologie";
import DlaczegoMy from "../components/DlaczegoMy";
import Form from "../components/Form";
import Portfolio from "../components/Portfolio";

import '../../static/sass/style.sass';
import '../../static/sass/mobile.sass';

export default function Home() {
  return (<div className="app">
      <LandingPage/>
      <DlaczegoMy/>
      <Form />
      <Portfolio/>
      <Technologie/>
  </div>);
}
