import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import ResumeContainer from './components/resumeContainer';
import './resume.css';

const MainPage = () => {
  const [hasError, setErrors] = useState(false);
  const [resume, setResume] = useState({});
  const [timesRetried, setRetried] = useState(0)

  const timesToRetry = 5;

  const fetchData = () => {
    fetch("http://www.brennanmbrown.com:3000/resume")
    .then(res => 
      res.json()
        .then(jsonRes => {
          console.log(jsonRes)
          setResume(jsonRes)
          setErrors(false);
        })
        .catch(err => setErrors(true)))
    .catch(() => {
      if(timesRetried < timesToRetry) {
        setRetried(timesRetried + 1);
        setErrors(true);
      }
    });
      
}
  useEffect(() => {
    fetchData();
  }, [timesRetried]);

  return (
    <div>
      {hasError ? 
        <span>Error: {JSON.stringify(hasError)}</span>
        : <ResumeContainer resume={resume} />
      }
    </div>
  );
};

ReactDOM.render(
  <MainPage />
  , document.getElementById('app')
)

export default MainPage;