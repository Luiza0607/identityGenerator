const fs = require('fs');

const genders = ['M', 'F'];

const maleNames = [
	'Jake',
	'Jack',
	'Harry',
	'Jacob',
	'William',
	'George',
	'James',
	'Ronald',
	'Connor',
	'Thomas',
	'Mike'
];
const femaleNames = [
	'Sophia',
	'Emily',
	'Mary',
	'Linda',
	'Harriet',
	'Susan',
	'Madison',
	'Rachel',
	'Lily',
	'Michelle',
	'Amanda'
];
const lastNames = [
	'Smith',
	'Jones',
	'Williams',
	'Taylor',
	'Carter',
	'Johnson',
	'Miller.',
	'Davis',
	'Brown',
	'Thompson',
	'Cruz'
];


function randChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i = 0; i < 20; i++) {
	const gender = randChoice(genders);
	const firstname = randChoice(gender == 'M' ? maleNames : femaleNames);
	const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	const age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
	
	const person = {
		gender,
		firstname,
		lastName,
		age,
	};

	people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
	if (err) {
		console.log('Something went wrong');
		throw err;
	}
	console.log('File has been successfully generated! Check people.json');
});