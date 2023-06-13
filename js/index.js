let smoothieOrder = [];

makeSmoothie = () => {

    let smoothieTotal = 0;

     let smoothieName = document.getElementById("smoothie").value;


     let size = document.getElementById("size")

     if(size === "Small"){
        smoothieTotal = smoothieTotal + 20
     } else if (size === "Medium"){
        smoothieTotal = smoothieTotal + 30
     } else if (size === "Large"){
        smoothieTotal = smoothieTotal + 40
     } else if (size === "Mega"){
        smoothieTotal = smoothieTotal + 60
     }


     let ingredientOption = document.getElementsByName("ingredients");
     let ingredientArray = [];
     for (let i = 0; i < ingredientOption.length; i++){
        if(ingredientOption[i].checked){
            ingredientArray = ingredientOption[i].value 
            smoothieTotal = smoothieTotal + +ingredientOption[i].dataset.cost
        }
     }

     smoothieOrder.push({
        smoothieName: smoothieName,
        smoothieSize: size,
        smoothieIngredients: ingredientArray,
        smoothiePrice: smoothieTotal
     });

     console.log(smoothieOrder)

     document.getElementById("realTimeCost").innerHTML = "R0.00"
     document.getElementById("smoothieForm").reset();

}




realTimeCost = () => {

    realTimePrice = 0;

    let size = document.getElementById("size").value;
    if(size === "Small"){
        smoothieTotal = smoothieTotal + 20
     } else if (size === "Medium"){
        smoothieTotal = smoothieTotal + 30
     } else if (size === "Large"){
        smoothieTotal = smoothieTotal + 40
     } else if (size === "Mega"){
        smoothieTotal = smoothieTotal + 60
     }

     let ingredientOption = document.getElementsByName("baseRadio");
     for (let i = o; i < ingredientOption.length; i++){
        if(ingredientValue[i].checked){
            realTimePrice = realTimePrice + +ingredientOption[i].dataset.cost    
        }
     }

     document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"


}




displayOrder = () => {

    let area = document.getElementById("orders");
    let total = document.getElementById("studentOut");

    area.innerHTML = "";

    let overallTotal = 0;

    for(let i = 0; i < smoothieOrder.length; i++){

        let name = smoothieOrder[i].smoothieName;
        let size = smoothieOrder[i].smoothieSize;
        let ingredients = smoothieOrder[i].smoothieIngredients;
        let price = smoothieOrder[i].smoothiePrice;

        overallTotal += price;

        area.innerHTML += `
            <div class="card" style="width: 100%;">
                <div class="card-body">
                    <h5 class="card-title"> ${name} </h5>
                    <p>Size: ${size} </p>
                    <p>Ingredients: ${ingredients} </p>
                    <p>Total Cost: R${price}.00 </p>
                </div>
            </div>`


        total.innerHTML = "R" + overallTotal + ".00" 
    
    }
}
