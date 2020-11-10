const greeting = () => {
	return new Date().getHours < 12 ? "good morning" : "good afternoon";
};

const name = (name) => {
	return name + "!";
};

const greetUser = (greeting) => (name) => {
	return `${greeting} ${name}`;
};

const result = greetUser(greeting())(name("roland"));
console.log(result);
// returns: good afternoon roland!
