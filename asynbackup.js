const posts=[
    {title:'Post One',body:'this is post one',createAt:new Date().getTime()},
    {title:'Post Two',body:'this is post two',createAt: new Date().getTime()}
];


let intervalId = 0;

function getPost(){
    clearInterval(intervalId);
    intervalId=setInterval(()=>{
        
let output = '';
for(let i=0;i<posts.length;i++){
    output+=`<li>${posts[i].title} - last updated ${(new Date().getTime()-posts[i].createAt)/1000}</li>`

    } 
    console.log('timer running id=',intervalId);  
    document.body.innerHTML= output;
    },1000);
}



 function createPost(post,callback){
    setTimeout(()=>{
        posts.push({ ...post, createdAt: new Date().getTime()});
        callback();
    },2000);
}


function createPost2(post,callback){
    setTimeout(()=>{
posts.push({ ...post,createdAt: new Date().getTime()});
callback();
    },6000)
}
getPost();
createPost({title:'Post Three',body:'This is Post'}, getPost)
createPost2({title:'Post Four',body:'this is Post'}, getPost)

var timer;
var count=0;
function lastEditedinSecondAgo(){
    count=0;
    clearInterval(timer)
    timer = setInterval(()=>{
        count++;
        console.log(count);
    },5000)
}



