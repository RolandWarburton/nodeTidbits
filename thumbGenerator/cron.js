const CronJob = require("cron").CronJob;
const genthumbs = require("./genthumbs");

const job = new CronJob(
	"*/10 * * * *",
	function () {
		genthumbs();
	},
	null,
	true,
	"Australia/Melbourne"
);
