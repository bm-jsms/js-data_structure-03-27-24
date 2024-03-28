/* const myArray = ['Josué', 'Diego', 'Javier'];

console.log(myArray.length);
console.log(myArray);

myArray.push('Cristian');
console.log(myArray); */

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;

		return this.data;
	}
}
