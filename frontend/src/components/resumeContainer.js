import React from 'react';

import { badgeImgMapper, otherBadges } from '../userInput'
import WorkContainer from './workContainer'
import EducationContainer from './educationContainer'
import SkillsContainer from './skillsContainer'
import AwardsContainer from './awardsContainer'

const ResumeContainer = ({
  resume
}) => {
  console.log(resume);
  return !resume.basics ? <p></p> : 
  <>
    <header>
			<div className="flex-parent">
				<div>
					<img className="profile-image" src={resume.basics.picture} height="250em" />
				</div>
				<div className="flex-header">
					<h1>Brennan Brown</h1>
					<h4>Software Developer</h4>
					<div className="links">
							{resume.basics.email && 'Email: ' + resume.basics.email} <br />
              {resume.basics.profiles && resume.basics.profiles.map(el => {				
                return ( badgeImgMapper[el.network.toLowerCase()] &&
                <div className="badge" href={el.url}>
                  <img src={badgeImgMapper[el.network.toLowerCase()]} width="64px" height="64px" alt={el.network} /> 
                </div>)
              })}
              {otherBadges && otherBadges.map(el => {				
                return (  
                <div className="badge" href={el.link}>
                  <img src={el.img} width="64px" height="64px" alt={el.name} /> 
                </div>)
              })}								
					</div>
				</div>
			</div>
		</header>
    <div className="parent">
      {resume.work && <WorkContainer works={resume.work}/>}
      <div className="flex-parent">
        {resume.education && <EducationContainer educations={resume.education} />}
        {resume.awards && <AwardsContainer awards={resume.awards} />}
      </div>
      {resume.skills && <SkillsContainer skills={resume.skills} />}
    </div>
  </>
}

export default ResumeContainer;