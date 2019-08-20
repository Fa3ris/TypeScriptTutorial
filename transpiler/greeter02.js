function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Fabrice", lastName: "Tsiava" };
document.body.textContent = greeter(user);
