# Rxpress and Node
running through a [tutorial](https://youtu.be/L72fhGm1tfE)

## installing dev dependencies
install
```npm i nodemon -D```
and make the script in package.json
```"dev": "nodemon index"```
execute with
```npm run dev```

## other things
* the 'public' folder is usually a static folder
* im using [postman](https://www.getpostman.com/) to test the CRUD API. look at /routes/api/getMember for how that works
	* ```http://localhost:5000/api/data``` will request all data
	* ```http://localhost:5000/api/data/UUIDHERE``` will request a specific uuid