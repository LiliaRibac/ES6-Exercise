function allPermutations(){
    let array =[];
    array.push(arguments[0]);

    for(let i =1; i<arguments.length; i++){
    let arrayleangth = array.length;
    for (let j =0; j<arrayleangth; j++){
        let a = array[j].toString();
        for(let k =0; k<a.length; k++){
            let str =a.substring(0,k) + arguments[i] + a.substring(k, a.length);
            array.push(parseInt(str))
        }
        let str= a + arguments[i];
        array.push(parseInt(str));
    }
    array.splice(0, arrayleangth)
}
return array.sort();
}

let perm = allPermutations(1,2,3);
document.write("Permutations of 1,2,3 :</br>");
document.write(perm);

let perm2 = allPermutations(1,2,3,4);
document.write("<br><br>Permutations of 1,2,3,4 :</br>");
document.write(perm2);

