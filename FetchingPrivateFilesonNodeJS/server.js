const fetch = require('node-fetch');

const headers = {
	"Content-Type": "application/json",
	"client_id": "Iv1.33d603d58c45845c",
	"client_secret": "7b34b28d1807d7c07c253d6ef11cad6bbf746e7d",
	"Authorization": "token 2d234d3f357f50a0e6b8f1a0723c12326279bdf5"
}

const headers2 = {
	"Content-Type": "application/json",
	"client_id": "Iv1.33d603d58c45845c",
	"client_secret": "2d234d3f357f50a0e6b8f1a0723c12326279bdf5"
}

fetch('https://2d234d3f357f50a0e6b8f1a0723c12326279bdf5@raw.githubusercontent.com/RolandWarburton/Swinburne2020S1/master/INF30020_Information_Systems_Risk_and_Security/INF30020_Information_Systems_Risk_and_Security.md')
	.then(res => res.text())
	.then(body => console.log(body));