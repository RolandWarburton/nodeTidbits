// find the template based on the routes title in the list of templates (/routeMap.json)
// if the key doesnt exist return a default template

module.exports = getTemplate = (templates, key) => {
    let result = 'templates/template.ejs'
    // console.log(`getting template for ${key}`)
    templates.forEach((template) => {
        if (template.title === key) {
			result = template.templatePath
		}
    })
	// return the result
	return result
}