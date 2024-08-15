var quantity=1
document.getElementById('quantity').value=quantity


var item=1
document.getElementById('item').innerHTML=item

var price =46999
document.getElementById('price').innerHTML=price


document.getElementById('price1').innerHTML=price

var price2=43000
document.getElementById('price2').innerHTML=price2
document.getElementById('price3').innerHTML=price2

var discount=price-price2
document.getElementById('discount').innerHTML=discount

document.getElementById('discount1').innerHTML=discount




function plus(){
   var quantity = document.getElementById('quantity').value;
    
  var quantity1=Number(quantity); // type casting

    quantity1 +=  1
   
    document.getElementById('quantity').value=quantity1

    document.getElementById('item').innerHTML=quantity1


    var multipty=price*quantity1;
    document.getElementById('price').innerHTML=multipty;

 document.getElementById('price1').innerHTML=multipty

    var multipty2=price2*quantity1;
    
    document.getElementById('price2').innerHTML=multipty2
    document.getElementById('price3').innerHTML=multipty2;


 var discount=multipty-multipty2
document.getElementById('discount').innerHTML=discount
document.getElementById('discount1').innerHTML=discount
}

function minus(){
 var quantity = document.getElementById('quantity').value
var quantity2 = Number(quantity); // type casting
 
 
    
    if(quantity2 > 0){
        quantity2 -= 1;
        document.getElementById('quantity').value=quantity2
        
        document.getElementById('item').innerHTML=quantity2

        var multipty=price*quantity2;
    document.getElementById('price').innerHTML=multipty;
    document.getElementById('price1').innerHTML=multipty;

    var multipty2=price2*quantity2;
    document.getElementById('price2').innerHTML=multipty2
    document.getElementById('price3').innerHTML=multipty2;

 var discount=multipty-multipty2
document.getElementById('discount').innerHTML=discount
document.getElementById('discount1').innerHTML=discount
        
    }

}
