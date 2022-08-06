function myEach(collection, callbackFunction){ 
     
    if (collection instanceof Array){
        collection.forEach(elem => {
            callbackFunction(elem)
        })
     }
     else {
        let keys = Object.keys(collection);
        keys.forEach(key => {
            callbackFunction(collection[key])
        })
     }
    return collection;
} 

function myMap(collection, callback){
    let array1 = [];
    if (collection instanceof Array){
        collection.forEach(elem => {
             array1.push(callback(elem))
           
        })
    
    } else {
        let collKeys = Object.keys(collection);
        collKeys.forEach(key => {
            array1.push(callback(collection[key], key))
           
        })
        
    }
    return array1;
}

const standardInput = function(collection){
    return(collection instanceof Array) ? collection.slice() : Object.values(collection)
}

function myReduce(collection, callback, acc){
    let newCollection = standardInput(collection)
    if (!acc){
        acc = newCollection[0];
        newCollection = newCollection.slice(1)
        console.log(newCollection)
    }
    
      for(let i = 0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection) 
       }
       return acc;
    }

    
    function myFind(collection, predicate){
        let newCollection = standardInput(collection)
        for(let i = 0; i< newCollection.length; i++){
            if(predicate(newCollection[i]) == true){
               return newCollection[i]
            } 
        
        }
           return undefined
    }

    function myFilter(collection, predicate){
        let newCollection = standardInput(collection)
        let newArray = [];
        for(let i = 0; i< newCollection.length; i++){
            if(predicate(newCollection[i]) == true){
                newArray.push(newCollection[i])
            }   
        }  
        return newArray;
    }

    function mySize(collection){
        let newCollection = standardInput(collection)
        return newCollection.length

    }

    function myFirst(array, n){
        if(n === undefined){
            return array[0]
        } else {
            console.log(n)
            return array.slice(0,n)
        }
   
    }

    function myLast(array, n) {
        console.log(array)
       
        if (n === undefined){
          return parseInt(array.slice(-1))
        } else {
           return array.slice(-n)
        }
    }

    function myKeys(object){
        let keys = Object.keys(object)
        return keys;
    }

    function myValues(object) {
        let values = Object.values(object)
        return values;
    }