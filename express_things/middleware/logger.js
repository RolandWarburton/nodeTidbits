// create middleware
// middleware will run on every response (i think?)
const logger = (req, res, next) => {
	// req = this request against node
	// protocal = http :// host = the domain or ip | originalUrl = the requested pages url
	console.log(`${req.protocol}://${req.get('host')}${
			req.originalUrl}:${
			new Date(Date.now() * 1000).toUTCString()}`);
			
	// you always need to tell express to continue (to either more middleware or just keep running)
	next();
}

module.exports = logger;