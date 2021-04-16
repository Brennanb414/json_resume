import React from 'react'; 
const AwardsContainer = (
  {awards}
) => {
  return (
    <div className="resume-section resume-half-section right">
      <h2> {'Awards & Certifications'} </h2>
        <div class="indent">
        <ul>
          {awards.map(award => {
            return (
              <li>{award.title}</li>
            )
          })}
        </ul>
        </div>
    </div>
  );
}
export default AwardsContainer