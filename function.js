function getAllActive(arr){
    var temp_arr=[]
    var len=arr.length
    for(i=0;i<len;i++){
        if(!array[i]['completed']){
            temp_arr.push(arrayt[i])
        }
    }
    return temp_arr
}

function getAllCompleted(arr){
    var temp_arr=[]
    var len=arr.length
    for(i=0;i<len;i++){
        if(array[i]['completed']){
            temp_arr.push(arrayt[i])
        }
    }
    return temp_arr
}