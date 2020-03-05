import React from 'react'; 
const AwardsContainer = (
  {awards}
) => {
  return (
    <>
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
    </>
  );
}
export default AwardsContainer