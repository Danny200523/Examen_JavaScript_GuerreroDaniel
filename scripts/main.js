const urlrandom = `https://www.themealdb.com/api/json/v1/1/random.php`
const urlname = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
const editboxrecipe = document.getElementById('reci')
const editboxreci = document.getElementById('reci2')

function todo(){
    for (i=0;i<15;i++){
        console.log("holi")
        fetch(urlrandom)
        .then(response=>response.json())
        .then(data=>{
            let comida = data["meals"][0];
            console.log(comida)
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