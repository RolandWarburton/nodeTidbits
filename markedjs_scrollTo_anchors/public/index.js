const scrollToHash = () => {
	const hash = window.location.hash
	const e = (hash) ? document.getElementById(window.location.hash.replace('#', '')) : undefined;
	if (e) e.scrollIntoView();
	console.log("scroll to hash")
}

const copyUrlToClipboard = (id) => {
	const e = (id) ? document.getElementById(id) : undefined
	if (e) navigator.clipboard.writeText(document.location.href).then(() => { })
}