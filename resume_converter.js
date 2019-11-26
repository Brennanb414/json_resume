const fs = require('fs');

const resume = JSON.parse(fs.readFileSync('resume.json'));

// head
let htmlDoc = `<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>${resume.basics.name} - Resume</title>
<link rel="stylesheet" href="./resume.css">
${fs.existsSync("./media/favicon.ico") ? '<link rel="icon" href="./media/favicon.ico" type="image/png">' : ''}
</head>
`;

// header
htmlDoc += `<body style="font-family: verdana;">
<header>
  <div class="flex-parent">
    ${fs.existsSync(resume.basics.picture) ? `<div>
      <img src="${resume.basics.picture}" height="250em">
    </div>` : ''}
    <div class="flex-header">
      <h1>${resume.basics.name}</h1>
      ${resume.basics.label ? `<h4>${resume.basics.label}</h4>` : ''}
      <div class="links">
        ${resume.basics.email ? `Email: ${resume.basics.email}<br>` : ''}							
          <a href="https://github.com/brennanb414" style="display:inline-block; padding:5px">
           
            <img src="./Brennan Brown - Resume_files/GitHub-Mark-120px-plus.png" width="64px" height="64px" alt="Github"> 
          
          </a>
         
          
          <a href="https://www.linkedin.com/in/brennanb414/" style="display:inline-block; padding:5px">
           
            <img src="./Brennan Brown - Resume_files/square-linkedin-512.png" width="64px" height="64px" alt="LinkedIn"> 
          
          </a>
         
          
          <a href="http://brennanmbrown.com/whos_that/pokemon" style="display:inline-block; padding:5px">
           
            <img src="./Brennan Brown - Resume_files/25_7T5ZmLR_YDDGxsW.png" width="64px" height="64px" alt="Who&#39;s That Pokemon!"> 
          
          </a>
         
          
          <a href="http://brennanmbrown.com/whos_that/bugemon" style="display:inline-block; padding:5px">
           
            <img src="./Brennan Brown - Resume_files/pixel_dragonfly_FSeMCoA_4SwGPKK.png" width="64px" height="64px" alt="Who&#39;s That Bugemon"> 
          
          </a>
        
      </div>
    </div>
  </div>
</header>`
// cap off html and write the new file
htmlDoc += '</body></html>';
fs.writeFile(`${resume.basics.name}.html`, htmlDoc, (err) => {console.log(err)});


