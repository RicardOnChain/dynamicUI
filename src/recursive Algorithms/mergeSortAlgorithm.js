const mergeSort= (array) => {
    if (array.length == 1) return array

    let middle = Math.floor(array.length/2)

    let leftArray= array.slice(0,middle)
    let rigthArray= array.slice(middle)
    let value1 = mergeSort(leftArray)
    let value2 = mergeSort(rigthArray)
    console.log("This was printed recursively");

    return (merge(value1,value2))
}


const merge= (value1, value2) =>{

    let sortedArray = []

    let i = 0
    let j = 0

    while ( i < value1.length && j< value2.length){
            if (value1[i] < value2[j]){
                sortedArray.push(value1[i])
                i++
            }else {
                sortedArray.push(value2[j])
                j++
            }
    
        }

    return (sortedArray.concat(value1.slice(i)).concat(value2.slice(j)))
}




console.log(mergeSort([5, 2, 9, 1, 3]));

