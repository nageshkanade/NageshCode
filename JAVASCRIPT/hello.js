
// function abc() // parameter 
// {
//     console.log("hellow world....");
// }

// abc(); // arguments


function fun1 ( a, b){
    let c = a + b ;
    console.log(c);
}

fun1(10,20);




// var pqr = () =>{
//     console.log("this is pqr function ....");
// }

// pqr();


// 1) function takes parameter does return values 

    function a1(a,b){
        console.log(a+b);
    }

    a1(1,2);


// 2) function does not takes parameter and returns values 

    console.log("hello 1");
    function a2()
    {
        let a = 10 , b = 20;
        return b-a;
    }

    console.log("hello 2")
    let result = a2();
    console.log("result : " , result);
    console.log("hello 3");


// 3) function does not paremeter and not return values 

    function a3(){
        let a = 10 , b = 40;
        console.log(a+b);
    }

    a3();
// 4) function takes paremeter return values 
let res = a4(10,20);
let res1 = a4(20,30);
let res2 = a4(5,2);

    function a4(abc , pqr){
        var xyz = abc * pqr;
        return xyz;
    }

    console.log(res) // 200
    console.log(res1) // 600
    console.log(res2) // 10