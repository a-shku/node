function User(name) {
	this.name=name;
	}
	
User.prototype.hello = function(who) {
	console.log("Hello, " + who.name);
	};
	
	var vasya = new User("Вася");
	var petya = new User("petya");
	
	vasya.hello(petya);