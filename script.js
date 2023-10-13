async function addData() {
    try {
        if (validateForm() == true) {
            let candyName = document.getElementById("candyName").value;
            let description = document.getElementById("description").value;
            let price = document.getElementById("price").value;
            let avalability = document.getElementById("avalability").value;

            let chocoList = { candyName: candyName, description: description, price: price, avalability: avalability };

            await axios.post("https://crudcrud.com/api/21fa22619b6c42b29bc7aea71754ce14/chocolatedata", {chocoList});

            
            await axios.delete("https://crudcrud.com/api/21fa22619b6c42b29bc7aea71754ce14/chocolatedata/65200fa6b987ad03e876eb54");

            const res = await axios.get("https://crudcrud.com/api/21fa22619b6c42b29bc7aea71754ce14/chocolatedata");

            

            console.log(res.data);
            console.log("Add working");
        }
    }
    catch(err){
        console.log(err);
    }

}

function validateForm()
{
    return true;
}