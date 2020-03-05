import React from 'react';

import { dateConversionFromNumbers } from '../utils/common'

const WorkContainer = ({
  works
}) => {

  let combinedWorks = {};

  //combine positions under the same company header
  works.forEach(el => {
    !combinedWorks[el.company] ? combinedWorks[el.company] = [el] 
    : combinedWorks[el.company].push(el);
  })

  return (
  <>
    <h2>Experience</h2>
    <div className='indent'>
      {Object.keys(combinedWorks).map(company => {
        return (
        <>
          <div class="flex-parent">
            <div class="flex-header"> {company} </div>
            <div class="flex-subheader"></div>
            <div class="flex-subheader"></div>
          </div>
          {combinedWorks[company].map( work =>
            <>
            <div class="flex-parent">
              <div class="flex-header"><h5 class="role">{work.position}</h5></div>
              <div class="flex-subheader">{dateConversionFromNumbers(work.startDate)} - {dateConversionFromNumbers(work.endDate) || 'Present'}</div>
              <div class="flex-subheader"></div>
            </div>
            <ul>
              {work.highlights.map(highlight => {
                return <li>{highlight}</li>
              })}
            
            </ul>
            </>
            )}
          </>
        )
      })}
    </div>
  </>
  )
}

export default WorkContainer;