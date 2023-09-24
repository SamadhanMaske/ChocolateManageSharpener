function buy(n1,n2)
{
    let availabilty= document.getElementById('n1');
    let b = document.getElementById('n2');

    if(b>availabilty)
    {
        alert("Sorry currently we are out of stock");
    }
    else
    {
        document.getElementById('n1').innerHTML=availabilty-b;
    }

}