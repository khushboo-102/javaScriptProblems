// let array = [1,2,3,4,5,6];
//  array.unshift(0);

//  console.log(array);

function insertArray(arry,variable){
    let newArry = [variable];
    for(let i = 0; i< arry.length; i++){
        newArry.push(arry[i])
    }
    return newArry
}
console.log(insertArray([1,2,4],5))