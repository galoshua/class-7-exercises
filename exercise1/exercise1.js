function redundentReturn(str){
    return () =>{
        return str
    }
    
}


const redundantRedundant = redundentReturn('something')

console.log(redundantRedundant())