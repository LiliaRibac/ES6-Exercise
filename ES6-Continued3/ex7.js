function getUnique(array) {
    let count = [];
    let unique = [];
    
    for (let i = 0; i < array.length; i++) {
        count[array[i]] = 0;
    }

    for (let i = 0; i < array.length; i++) {
        count[array[i]]++;
    }

    for (let i = 0; i < array.length; i++) {
        if (count[array[i]] == 1)
        unique.push(array[i]);
    }
    return unique;

}

let words = ['one', 'two', 'three', 'four', 'one', 'four', 'three'];

let unique = getUnique(words)

document.write("Original array:<br>");
for (let i = 0; i < words.length; i++) {
    document.write(words[i]);
    if (i != words.length - 1)
        document.write(", ");
}

document.write("<br><br>Uniqu elements:<br>");
for (let i = 0; i < unique.length; i++) {
    document.write(unique[i]);
    if (i != unique.length - 1)
        document.write(", ")
}