const fetch = require('node-fetch');


fetch('https://PERSONAL_TOKEN@raw.githubusercontent.com/RolandWarburton/Swinburne2020S1/master/INF30020_Information_Systems_Risk_and_Security/INF30020_Information_Systems_Risk_and_Security.md')
	.then(res => res.text())
	.then(body => console.log(body));