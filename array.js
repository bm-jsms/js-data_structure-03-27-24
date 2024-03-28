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

	pop() {
		/* this.data[this.length - 1] = '';
		this.length--;

		return this.data; */

		const lastItem = this.data[this.length - 1];

		delete this.data[this.length - 1];
		this.length--;

		return lastItem;
	}
}

const myArray = new MyArray();

myArray.push('Josué');
console.log(myArray);

myArray.push('Daniel');
console.log(myArray);

console.log(myArray.get(1));

console.log(myArray);
myArray.pop();
console.log(myArray);
