import React from "react"
import styled from "styled-components"
import {data} from "../utils.js"

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

const StatsNumber = styled.h3`

`


const StatsTitle = styled.h6`
`


export default () => (
  <StatsWrapper>
    <StatsContainer>
      <StatsNumber>{data.appsSubmitted.toString()}</StatsNumber>
      <StatsTitle>Grant Applications Submitted</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>{data.appsAccepted}</StatsNumber>
      <StatsTitle>Grant Applications Accepted</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>{data.nCountries}</StatsNumber>
      <StatsTitle>Countries Represented</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>${data.totalMoneyAwarded}</StatsNumber>
      <StatsTitle>Funds Awarded</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>${data.totalMoneyDispersed}</StatsNumber>
      <StatsTitle>Funds Dispersed</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>${data.averageAwardedMoney}</StatsNumber>
      <StatsTitle>Average Awarded</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>{data.milestones.total}</StatsNumber>
      <StatsTitle>Milestontes completed</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>{data.milestones.last30days}</StatsNumber>
      <StatsTitle>Milestones completed (30 days)</StatsTitle>
    </StatsContainer>
    <StatsContainer>
      <StatsNumber>{data.currentlyActive}</StatsNumber>
      <StatsTitle>Currently active projects</StatsTitle>
    </StatsContainer>
  </StatsWrapper>
);
