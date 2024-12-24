var main=''
var seven ='' // global variable 
var six ='' // global variable 
var five = ''
var four = ''
var third = ''
var second = ''
var first = ''
var eight = ''
var nine = ''
var zero = ''
var plus = ''
var minus = ''
var multiplication = ''
var divider = ''
var modilo = ''
// 

function nine1() {
  nine= document.getElementById('nine').value
  console.log(seven)
  
  document.getElementById('mein').value=nine
  
 main = document.getElementById('mein').value=main +nine
  
} 
// 
function eight1() {
  eight= document.getElementById('eight').value
  console.log(seven)
  
  document.getElementById('mein').value=eight
  
 main = document.getElementById('mein').value=main +eight
  
} 
// 
function seven1() {
    seven= document.getElementById('seven').value
    console.log(seven)
    
    document.getElementById('mein').value=seven
    
   main = document.getElementById('mein').value=main +seven
    
} 
// 
function six1(){
    var six = document.getElementById('six').value;

    main = document.getElementById("mein").value = main+six
}
console.log('hello...')
// 
function five1(){
     five = document.getElementById('five').value // local variable
      document.getElementById('mein').value=five
     main =   document.getElementById('mein').value=main+five;
  }
  //  

  function four1(){
    four =document.getElementById('four').value
     document.getElementById('mein').value=four
   main = document.getElementById('mein').value= main+four
  }
// 
  function three1(){
    third =document.getElementById('third').value
     document.getElementById('mein').value=third
   main = document.getElementById('mein').value= main+third
  }
// 
  function two1(){
    second =document.getElementById('second').value
     document.getElementById('mein').value=second
   main = document.getElementById('mein').value= main+second
  }
  // 
  function one1(){
    first =document.getElementById('first').value
     document.getElementById('mein').value=first
   main = document.getElementById('mein').value= main+first
  }
// 
  function zero1(){
    zero =document.getElementById('zero').value
     document.getElementById('mein').value=zero
   main = document.getElementById('mein').value= main+zero
  }

/******** Ac ****/

function clear1(){

  document.getElementById('mein').value = ' '

  console.log('message has been successfully deleted')
}


/******* delecte ******/ 

function delect1(){
var delect =document.getElementById('mein');

var value =delect.value

delect.value = value.slice(0,-1)
}


/************* plus *******/

function plus1(){
  var plus =document.getElementById('plus').value
  document.getElementById('mein').value= plus

  main = document.getElementById('mein').value=main+plus
}


/************ point1 ********/ 


function point1(){
  var point = document.getElementById('point').value

   document.getElementById('mein').value=point

  main = document.getElementById('mein').value=main+point

}



/************ multiplication1 ********/ 


function multiplication1(){
  var multiplication = document.getElementById('multiplication').value

   document.getElementById('mein').value=multiplication

  main = document.getElementById('mein').value=main+multiplication

}


/************ divider1 ********/ 


function divider1(){
  var divider = document.getElementById('divider').value

   document.getElementById('mein').value=divider

  main = document.getElementById('mein').value=main+divider

}

/************ modilo1 ********/ 


function modilo1(){
  var modilo = document.getElementById('modilo').value

   document.getElementById('mein').value=modilo

  main = document.getElementById('mein').value=main+modilo

}


/************ modilo1 ********/ 


function minus1(){
  var minus= document.getElementById('minus').value

   document.getElementById('mein').value=minus

  main = document.getElementById('mein').value=main+minus

}

/****** equal ****/ 
function equal1(){
  var result=eval(main)
  document.getElementById('mein').value=result
}

