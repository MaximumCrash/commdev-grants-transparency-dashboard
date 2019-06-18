import React from "react"
import styled from "styled-components"


const StatsWrapper = styled.section`
display: grid;
grid-template-columns: repeat(auto-fit, 300px);
grid-gap: 5rem;
justify-content: space-around;
`

const StatsContainer = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
background: hsla(255,255,255,0.4);
`

const StatsNumber = styled('h1')`
font-size: 4rem;
`


const StatsTitle = styled.h3`
`


export default () => (
  <StatsWrapper>
    <StatsContainer>
      <StatsNumber>491</StatsNumber>
      <StatsTitle>Grant Applications Submitted</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>491</StatsNumber>
      <StatsTitle>Grant Applications Submitted</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>491</StatsNumber>
      <StatsTitle>Grant Applications Submitted</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>491</StatsNumber>
      <StatsTitle>Grant Applications Submitted</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>491</StatsNumber>
      <StatsTitle>Grant Applications Submitted</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>491</StatsNumber>
      <StatsTitle>Grant Applications Submitted</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>491</StatsNumber>
      <StatsTitle>Grant Applications Submitted</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>491</StatsNumber>
      <StatsTitle>Grant Applications Submitted</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>491</StatsNumber>
      <StatsTitle>Grant Applications Submitted</StatsTitle>
    </StatsContainer>
  </StatsWrapper>
);
