import React from "react"
import styled from "styled-components"
import {data} from "../utils.js"


const IntroWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 120px repeat(2, 1fr);
  justify-items: center;
`;

const LogoMaker = styled.img`
  width: 64px;
  height: 64px;
  grid-column: 1 / -1;
  grid-row: 1;
  align-self: center;
`

const IntroHeader = styled.h1`
  grid-column: 1 / -1;
  grid-row: 2;
  color: #444;
  font-size: 3rem;
  text-align: center;
  font-weight: 400;
`

const IntroContent = styled.h3`
  grid-column 1 / -1;
  grid-row: 3;
  color: #333;
  font-size: 1.5rem;
  font-weight: 400rem;
  text-align: center;
  max-width: 60rem;
  line-height: 140%;
`

export default () => (
<IntroWrapper>
  <LogoMaker src={'makerlogo.svg'} alt="Logo"></LogoMaker>
  <IntroHeader>We've awarded ${data.totalMoneyAwarded} since February 2018</IntroHeader>
  <IntroContent>MakerDAO’s Core Community Development Initiative funds teams creating infrastructure and applications within the Maker ecosystem.</IntroContent>
</IntroWrapper>
);
