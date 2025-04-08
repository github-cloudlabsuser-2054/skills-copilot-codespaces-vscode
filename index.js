function reverseSentence(sentence) {
    // Reverse the sentence
    let reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    reversed = reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return reversed;
}

// Example usage of reverseSentence
const input = "hello world this is javascript";
const result = reverseSentence(input);
console.log(result); // Output: "Javascript is this world hello"

// Example: Map through an array of arrays of objects to extract names
const data = [
    [
        { id: 1, name: "John", age: 28 },
        { id: 2, name: "Jane", age: 32 }
    ],
    [
        { id: 3, name: "Bob", age: 25 }
    ]
];

// Extract names
const names = data.flatMap(innerArray => innerArray.map(item => item.name));
console.log(names); // Output: ['John', 'Jane', 'Bob']