const urlrandom = `https://www.themealdb.com/api/json/v1/1/random.php`;
const urlname = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const urlcategory = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;
const editboxrecipe = document.getElementById('reci');
const editboxreci = document.getElementById('reci1');
let fil = document.getElementById('vub');
let name = ``;
let category = ``;

function todo(){
    for (i=0;i<15;i++){ 
        fetch(urlrandom)
        .then(response=>response.json())
        .then(data=>{
            let comida = data["meals"][0];
            editboxrecipe.innerHTML += `
            <div class="box-recipe">
                <img class="img-recipe" src="${comida.strMealThumb}" alt=""><br/>
                <h1>${comida.strMeal}</h1><br/><br/>
                <h2>categoria: </h2><br/>
                <h3>${comida.strCategory}</h3><br/>
                <h2>Tipo de Comida: </h2><br/>
                <h3>${comida.strArea}</h3><br/>
                <div data-id="" class="button_slide slide_down"> Ver Más </div>
            </div>
            `;
        })
};
}

document.addEventListener('DOMContentLoaded',todo)

fil.addEventListener('click',()=>{
    name = document.getElementById('nplato').value
    category = document.getElementById('cat').value
    if (category === "N/A"){
        fetch(`${urlname}${name}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(`${urlname}${name}`)
        let comida = data.meals[0]
        console.log(comida)
        editboxreci.innerHTML = `
            <div class="box-recipe">
                <img class="img-recipe" src="${comida.strMealThumb}" alt=""><br/>
                <h1>${comida.strMeal}</h1><br/><br/>
                <h2>categoria: </h2><br/>
                <h3>${comida.strCategory}</h3><br/>
                <h2>Tipo de Comida: </h2><br/>
                <h3>${comida.strArea}</h3><br/>
                <div data-id="" class="button_slide slide_down"> Ver Más </div>
            </div>
            `;
    })
    }
    else if (category !== "N/A"){
        fetch(`${urlcategory}${category}`)
        .then(response=>response.json())
        .then(data=>{
            console.log(`${urlname}${category}`)
            let comida = data.meals
            editboxreci.innerHTML = ``;
            for (i=0;i<comida.length;i++){
                console.log("holi")
                editboxreci.innerHTML += `
                <div class="box-recipe">
                    <img class="img-recipe" src="${comida[i].strMealThumb}" alt=""><br/>
                    <h1>${comida[i].strMeal}</h1><br/><br/>
                    <div data-id="" class="button_slide slide_down"> Ver Más </div>
                </div>
                `;
            };
        })
    }
}
)