

function myfunction(name){
    console.log(name)

}

function secondFun(callback){
    console.log('second function')
    const name = 'kanade';
    callback(name);
}


secondFun(myfunction);
const name = 'nagesh'
setTimeout((name)=>{myfunction(name)},3000);