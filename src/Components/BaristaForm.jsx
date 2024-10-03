import React, { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";


// component is form for quiz
const BaristaForm = () => {
  //  stores user input per question (temp, syrup,...)
  const [inputs, setInputs] = useState({
      'temperature': '',
      'syrup': '',
      'milk': '',
      'blended': ''
    });

    // possible answer choices for user to select from when site loads
    const ingredients = {
      'temperature' : ['hot', 'lukewarm', 'cold'],
      'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
      'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
      'blended': ['yes', 'turbo', 'no']
    }
    
    // finds the current drink user is quized on and it's recipe
    const [currentDrink, setCurrentDrink] = useState('')
    const [trueRecipe, setTrueRecipe] = useState({})

    // segment determines if each var has correct value AND applies appropriate CSS
    const [correctTemp,setCorrectTemp] = useState('');
    const [correctSyrup,setCorrectSyrup] = useState('');
    const [correctMilk,setCorrectMilk] = useState('');
    const [correctBlend,setCorrectBlend] = useState('');

    
    const onCheckAnswer = () => {
      // checks if value from temp in trueRecipe matches value in temperature in inputs
      if (trueRecipe.temp != inputs['temperature']){
        setCorrectTemp('wrong');
      }
      else {
        setCorrectTemp("correct");
      }
      // checks if value from syrup in trueRecipe matches value in syrup in inputs
      if (trueRecipe.syrup != inputs['syrup']){
        setCorrectSyrup('wrong');
      }
      else {
        setCorrectSyrup("correct");
      }
      // checks if value from milk in trueRecipe matches value in milk in inputs
      if (trueRecipe.milk != inputs['milk']){
        setCorrectMilk('wrong');
      }
      else {
        setCorrectMilk("correct");
      }
      // checks if value from blended in trueRecipe matches value in blended in inputs
      if (trueRecipe.blended != inputs['blended']){
        setCorrectBlend('wrong');
      }
      else {
        setCorrectBlend("correct");
      }
    }

    // randomly finds new drink and updates currentDrink and trueRecipe var for that drink
    const getNextDrink = () => {
      // randomly selects a number from however many drinnks are in JSON file
      let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
      // updates name of current drink
      setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name)
      setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients)
    }
    // clears imput fields and finds new drink
    const onNewDrink = () => {
      // clears the values for input var
      setInputs({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': '' });
      // calls getNextDrink function to randomly grab a new drink
      getNextDrink();
      setCorrectTemp('');
      setCorrectSyrup('');
      setCorrectMilk('');
      setCorrectBlend('');
    }

    return (
        <div>
            <h2>Hi, I'd like to order a: </h2>
            <div className="drink-container">
              <h2 className="mini-header">{currentDrink}</h2>
              <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}>🔄</button>
            </div>
            <form action="">
              {/* Temperature Q&A */}
              <h3>Temperature</h3>
              {/* id determines CSS to apply based on value of correctTemp */}
                <div className="answer-space" id="correctTemp" >
                  {/* indexes var inputs to get value at key temperature */}
                  {inputs["temperature"]} 
                </div>
                <RecipeChoices
                  handleChange={(e) => setInputs((prevState) => ({
                    ...prevState, [e.target.name]: e.target.value}))}
                  label="temperature"
                  // indexes the ingredients var and displays all the answer choices for temperature
                  choices={ingredients["temperature"]}
                  checked={inputs["temperature"]}
                />
                {/* Syrup Q&A */}
                <h3>Syrup</h3>
                {/* id determines CSS to apply based on value of correctSyrup */}
                  <div className="answer-space" id="correctSyrup">
                    {/* indexes var inputs to get value at key syrup */}
                    {inputs["syrup"]} 
                  </div>
                  <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                      ...prevState,[e.target.name]: e.target.value}))}
                    label="syrup"
                    // indexes the ingredients var and displays all the answer choices for syrup
                    choices={ingredients["syrup"]}
                    checked={inputs["syrup"]}
                  />{/* Milk Q&A */}
                  <h3>Milk</h3>
                  {/* id determines CSS to apply based on value of correctMilk */}
                    <div className="answer-space" id="correctMilk">
                      {/* indexes var inputs to get value at key milk */}
                      {inputs["milk"]} 
                    </div>
                    <RecipeChoices
                      handleChange={(e) => setInputs((prevState) => ({
                        ...prevState, [e.target.name]: e.target.value}))}
                      label="milk"
                      // indexes the ingredients var and displays all the answer choices for milk
                      choices={ingredients["milk"]}
                      checked={inputs["milk"]}
                    />{/* Blended Q&A */}
                    <h3>Blended</h3>
                    {/* id determines CSS to apply based on value of correctBlend */}
                      <div className="answer-space" id="correctBlend">
                        {/* indexes var inputs to get value at key blended */}
                        {inputs["blended"]} 
                      </div>
                      <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                          ...prevState,
                          [e.target.name]: e.target.value,
                        }))}
                        label="blended"
                        // indexes the ingredients var and displays all the answer choices for blended
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                      />

            </form>
            <button type="submit" className="button submit" onClick={onCheckAnswer}>Check Answer</button>
            <button type="new-drink-button" className="button submit" onClick={onNewDrink}>New Drink</button>
        </div>
    )
}


export default BaristaForm;