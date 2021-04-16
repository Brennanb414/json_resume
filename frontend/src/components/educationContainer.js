import React from 'react';

import { dateConversionFromNumbers } from '../utils/common'

const EducationContainer = ({
  educations
}) => {

  let combinedEducation = {};

  //combine degrees under the same institution header
  educations.forEach(el => {
    !combinedEducation[el.institution] ? combinedEducation[el.institution] = [el] 
    : combinedEducation[el.institution].push(el);
  })

  return (
    <div className="resume-section resume-half-section">
      <h2>Education</h2>
      <div className="indent">
      {Object.keys(combinedEducation).map(institution => {
        return (
        <>
        <div class="flex-parent">
        <div class="flex-header"> {institution} </div>
          <div class="flex-subheader"> {dateConversionFromNumbers(combinedEducation[institution][0].startDate)} - {dateConversionFromNumbers(combinedEducation[institution][0].endDate) || 'Present'} </div>
        </div>
          {combinedEducation[institution].map(education => {
            return education.studyType === 'Minor' ? <div class="indent"> <h6 class="education"> 
              {`${education.studyType}: ${education.area} `}
            </h6></div> 
            : <h5 class="education"> 
              {`${education.studyType}: ${education.area} `}
            </h5> 
              
          })}
        </>
        )})}
      </div>
    </div>
  )
}

export default EducationContainer;