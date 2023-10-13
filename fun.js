
function validateForm()
{
    let candyName = document.getElementById("candyName").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let avalability = document.getElementById("avalability").value;

    if(candyName=="" || description=="" || price=="" || avalability=="")
    {
        alert("Please enter all the details")
        return false;
    }
    return true;
}

function clearFields()
{
    document.getElementById("candyName").value="";
    document.getElementById("description").value="";
    document.getElementById("price").value="";
    document.getElementById("avalability").value="";
}

function showData(callback)
{
    let chocoList = JSON.parse(localStorage.getItem("chocoList"));

    let html = "";
    chocoList.forEach((element,index) => {
        html+="<tr>";
        html+="<td>"+element.candyName+"</td>";   
        html+="<td>"+element.description+"</td>";   
        html+="<td>"+element.price+"</td>";   
        html+="<td>"+element.avalability+"</td>";
        
        html+= '<td><button onclick="buy1('+index+
            ')" class="btn btn-primary">Buy1</button><button onclick="buy2('+index+
            ')" class="btn btn-primary m-2">Buy2</button><button onclick="buy3('+index+
            ')" class="btn btn-primary m-2">Buy3</button></td>';
        html+="</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
    callback();
    //console.log("show working");
}

//Load all data when page is reloaded
document.onload = showData(clearFields);

function addData(callback)
{
    if(validateForm()==true)
    {
        let candyName = document.getElementById("candyName").value;
        let description = document.getElementById("description").value;
        let price = document.getElementById("price").value;
        let avalability = document.getElementById("avalability").value;
 
        let chocoList;
        if(localStorage.getItem("chocoList")==null)
        {
            chocoList = [];
        }
        else
        {
            chocoList = JSON.parse(localStorage.getItem("chocoList"));
        }

        chocoList.push({candyName:candyName, description:description, price:price, avalability:avalability});
        localStorage.setItem("chocoList", JSON.stringify(chocoList));
        // callback();
        // clearFields();
        if(callback)
        {
            callback();
        }
        //console.log("Add working");
    }
} 

function buy1(index)
{
    let chocoList = JSON.parse(localStorage.getItem("chocoList"));
    let ca = Number(chocoList[index].avalability);
    if(ca<1)
    {
        alert("Sorry, Candy is not available");
        return;
    }
    chocoList[index].avalability = ca-1;
    localStorage.setItem("chocoList", JSON.stringify(chocoList));
    showData(clearFields);
    //console.log("Buy 1 works")
}

function buy2(index)
{
    let chocoList = JSON.parse(localStorage.getItem("chocoList"));
    let ca = Number(chocoList[index].avalability);
    if(ca<2)
    {
        alert("Sorry, Candy is not available");
        return;
    }
    chocoList[index].avalability = ca-2;
    localStorage.setItem("chocoList", JSON.stringify(chocoList));
    showData(clearFields);
    //console.log("Buy 2 works")
}

function buy3(index)
{
    let chocoList = JSON.parse(localStorage.getItem("chocoList"));
    let ca = Number(chocoList[index].avalability);
    if(ca<3)
    {
        alert("Sorry, Candy is not available");
        return;
    }
    chocoList[index].avalability = ca-3;
    localStorage.setItem("chocoList", JSON.stringify(chocoList));
    showData(clearFields);
    //console.log("Buy 3 works")
}
