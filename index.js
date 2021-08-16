const randomBtn = document.querySelector('#random-btn');


randomBtn.addEventListener('click',()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then( result => result.json())
      .then( result => showMeal(result.meals[0]))
});


const showMeal = (meal) => {
  const mealTitle = document.querySelector('.meal-title');
  const recetaImg = document.querySelector('.receta-img');
  const ingredientes = document.querySelector(".lista-ingredientes");
  const procedimiento = document.querySelector(".procedimiento");
  const tituloIngredientes = document.querySelector('.ingredients-title');
  const detallesComida = document.querySelector('.meal-details');

  detallesComida.innerHTML = ``;

  if(meal.strCategory)detallesComida.innerHTML += `<p> <span class = "details-title"> Category: <span> ${meal.strCategory} </p>`;
  if(meal.strArea)detallesComida.innerHTML += `<p> <span class = "details-title"> Area: </span> ${meal.strArea} </p>`;
  if(meal.strTags)detallesComida.innerHTML += `<p> <span class = "details-title"> Tags: </span> ${meal.strTags} </p>`;
  if(meal.strYoutube)detallesComida.innerHTML += `<p> <a class = "details-title" href="${meal.strYoutube}" target="_blank"> Tutorial </a> </p>`;


  tituloIngredientes.innerHTML = `Ingredients`
  mealTitle.innerHTML = `${meal.strMeal}`;
  recetaImg.innerHTML = `<img src="${meal.strMealThumb}" alt="photo">`;


  const ingredientesArray = [];
  for(let i=0; i<20; i++){
    let ingrediente = meal[`strIngredient${i}`];
    let cantidad = meal[`strMeasure${i}`];
    if(ingrediente)ingredientesArray.push(`${ingrediente} - ${cantidad}`);
  }

  ingredientes.innerHTML = ``
  ingredientesArray.forEach((elemento) => {
    ingredientes.innerHTML += `<il> ${elemento} </il>`;
  });

  procedimiento.innerHTML =`
    <h2>Procedimiento</h2>
    <p>${meal.strInstructions}</p>
  `
}
