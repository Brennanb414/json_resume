import React from 'react';
import styled from 'styled-components';

import { badgeImgMapper, otherBadges } from '../userInput'
import WorkContainer from './workContainer'
import EducationContainer from './educationContainer'
import SkillsContainer from './skillsContainer'
import AwardsContainer from './awardsContainer'

const ProfileImage = styled.img`
  border-radius:50px;
	-webkit-box-shadow: 3px 4px 3px 0px #000000;
	box-shadow: 3px 4px 3px 0px #000000;
  margin-right: 1em;
  margin-bottom: 0.5em;
`

const Badge = styled.a`
  display:inline-block; 
  padding:5px;
`

const ResumeContainer = ({
  resume
}) => {
  console.log(resume);
  return !resume.basics ? <p></p> : 
  <>
    <header>
			<div className="flex-parent">
				<div>
					<ProfileImage src={resume.basics.picture} height="250em" />
				</div>
				<div className="flex-header">
					<h1>Brennan Brown</h1>
					<h4>Software Developer</h4>
					<div className="links">
							{resume.basics.email && 'Email: ' + resume.basics.email} <br />
              {resume.basics.profiles && resume.basics.profiles.map(el => {				
                return ( badgeImgMapper[el.network.toLowerCase()] &&
                <Badge href={el.url}>
                  <img src={badgeImgMapper[el.network.toLowerCase()]} width="64px" height="64px" alt={el.network} /> 
                </Badge>)
              })}
              {otherBadges && otherBadges.map(el => {				
                return (  
                <Badge href={el.link}>
                  <img src={el.img} width="64px" height="64px" alt={el.name} /> 
                </Badge>)
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