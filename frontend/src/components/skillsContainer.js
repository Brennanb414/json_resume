import React from 'react';

const SkillsContainer = ({
  skills
}) => {

  let combinedSkills = {};

  //combine degrees under the same institution header
  skills.forEach(el => {
    !combinedSkills[el.level] ? combinedSkills[el.level] = [el.name] 
    : combinedSkills[el.level].push(el.name);
  })

  return (
    <div className="resume-section">
      <h2>Skills</h2>
      <div className="indent">
      {Object.keys(combinedSkills).map(level => {
        return (
          <>
          <div class="skill-header">
            {level} :
          </div>
          <div class="skill"> 
            {combinedSkills[level].join(' | ')} 
          </div> <br />
          </>
        )})}
      </div>
    </div>
  )
}

export default SkillsContainer;