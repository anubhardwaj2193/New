function buyCar(){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
resolve('buy a car')
        },5000)
    })
}

function planAtrip(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve('lets go to manali')
},2000)
    })
}


buyCar().then((msg)=>{
console.log(msg)
planAtrip().then((msg)=>{
console.log(msg);
})

})