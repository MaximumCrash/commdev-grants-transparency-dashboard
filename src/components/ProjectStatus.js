import React from "react"
import styled from "styled-components"
import {data, pieData} from "../utils.js"
import {pStatus} from '../../static/data/dataformat.js'
import {Pie} from 'react-chartjs-2'
import Chart from "chart.js";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.elements.arc.borderColor = '#1AAB9B';
Chart.defaults.global.elements.arc.backgroundColor = '#fcf6e4';
Chart.defaults.global.elements.arc.borderWidth = 1;
Chart.defaults.pie.hover.mode = "none";

const ProjectStatusRow = styled.div`
grid-column: 2 / -1;
display: flex;
flex-direction: flex-row;
flex-wrap: nowrap;
overflow-x: auto;
justify-content: flex-start;
`

const ProjectStatusContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background: hsla(255,255,255,0.4);
min-width: 200px;
`

const ProjectStatusChart = styled.div`
width: 48px;
height: 48px;
border-radius: 100px;
background-color: #1AAB9B;
`

const ProjectStatusNumber = styled.h6`
color: #444;
`

const ProjectStatusLabel = styled.h6`
color: #231536;
`


export default () => (
  <ProjectStatusRow>
  {
    Object.values(pStatus).map( status => (
      <ProjectStatusContainer key={status.toString()}>
          <ProjectStatusNumber>{data.NofProjectStatus[status]}</ProjectStatusNumber>
        <ProjectStatusChart>
          <Pie
            data={pieData('status', status)}
            width={100}
            height={50}
            options = {{
              maintainAspectRatio: false,
              /* color: '#fff' */
            }}
          />
        </ProjectStatusChart>
          <ProjectStatusLabel>{status}</ProjectStatusLabel>
      </ProjectStatusContainer>
    ))
  }
  </ProjectStatusRow>
)
