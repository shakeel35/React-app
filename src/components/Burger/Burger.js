import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
  let burgerIngredients=Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_,i)=>{
        return <BurgerIngredient key={igKey+i} type={igKey}/>;
      })
    })
    .reduce((arr,el)=>{
      return arr.concat(el);
    },[]);
    if(burgerIngredients.length<1){
      burgerIngredients=<p>Please add ingredients!</p>;
    }
    console.log(burgerIngredients);
  return(
    <div className={classes.Burger}>
      <BurgerIngredient type = "bread_top"/>
      {burgerIngredients}
      <BurgerIngredient type = "bread_bottom"/>
    </div>
  );
};

export default burger;
