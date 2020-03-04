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
    <>
    <h2>Skills</h2>
    <div class="indent">
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
    </>
  )
}

export default SkillsContainer;