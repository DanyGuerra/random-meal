const randomBtn = document.querySelector('#aleatorio-btn');
const mealContainer = document.querySelector('.meal');

// randomBtn.addEventListener('click',()=>{
//   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then( result => result.json())
//     .then( result => console.log(result.meals[0]))
// });

randomBtn.addEventListener('click',()=>{

  async function mealRandom() {
    let result;
    result = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    result = await result.json()
    //console.log(result.meals[0])
    showMeal(result.meals[0])
  }

  mealRandom();

});

const showMeal = (meal) => {
  mealContainer.innerHTML = `
  <img src="${meal.strMealThumb}" alt="Meal image">
  `
}