let fruits = [
    {"name":"apple","weight":"1lb", "color":"red","cost":"2$" },
    {"name":"cherry","weight":"1lb", "color":"red","cost":"6$" },  
    {"name":"kiwi","weight":"1lb", "color":"green","cost":"4$" },  
    {"name":"banana","weight":"1lb", "color":"yellow","cost":"3$" },  
    {"name":"orange","weight":"1lb", "color":"orange","cost":"5$" }  
        ];

fruitNames = getValuesByPropertyName('name');

function getValuesByPropertyName(key){

    let fruitNames =[];
    for (let i = 0; i < fruits.length; i++){
        let fruit = fruits[i];

        let valueArray = Object.values(fruit);
      
        let keyArray = Object.keys(fruit);
     
        let index = keyArray.indexOf(key);
    
        fruitNames.push(valueArray[index]);
    }
    return fruitNames;
}
console.log (fruitNames);