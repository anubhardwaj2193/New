function buyCar(planAtrip,gotomanali){
    setTimeout(()=>{
console.log('buy a car')
planAtrip(gotomanali);
    },5000)

}

function planAtrip(gotomanali){

setTimeout(()=>{
console.log('lets go to manali')
gotomanali();
},2000)
}

function gotomanali(){
setTimeout(()=>{
    console.log('we are going to manali')
})
}


buyCar(planAtrip,gotomanali)
