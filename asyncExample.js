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
function gotomanali(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('Accident happened')
        })
    })
}

async function fun1(){
    try{
const msg = await buyCar();
console.log(msg);

const msg2 = await planAtrip();
console.log(msg2);


const msg3 = await gotomanali();
console.log(msg3);
}catch(err){
    console.log(err);
}
}

fun1();