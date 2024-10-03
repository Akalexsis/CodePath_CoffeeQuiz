import React, { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";


// component is form for quiz
const BaristaForm = () => {
  //  INPUTS from user
  const [inputs, setInputs] = useState({
      'temperature': '',
      'syrup': '',
      'milk': '',
      'blended': ''
    });

    // possible answer choices for user to select from
    const ingredients = {
      'temperature' : ['hot', 'lukewarm', 'cold'],
      'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
      'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
      'blended': ['yes', 'turbo', 'no']
    }
    
    const [currentDrink, setCurrentDrink] = useState('')
    const [trueRecipe, setTrueRecipe] = useState({})

    
    const onCheckAnswer = () => {

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
                <div className="answer-space" >
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
                  <div className="answer-space" >
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
                    <div className="answer-space" >
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
                      <div className="answer-space" >
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