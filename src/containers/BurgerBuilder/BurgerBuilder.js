import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  egg: 20,
  salad: 10,
  cheese: 20,
  meat: 50
}

class BurgerBuilder extends Component{

  // constructor(props){
  //   super(props);
  //   this.state={
  //   }
  // }
  state = {
    ingredients:{
      egg: 0,
      salad: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice:20,
    purchaseable:false,
    purchasing:false
  }

  updatePurchaseable(ingredients){
    // const ingredients = {
    //   ...this.state.ingredients
    // }
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum,el) => {
        return sum + el;
      },0);
      this.setState({purchaseable:sum>0});
  }

  purchaseHandler = () => {
    this.setState({purchasing:true});
  }
  purchaseCancelHandler = () => {
    this.setState({purchasing:false});
  }

  purchaseContinueHandler = () => {
    alert("Your Order has been placed..");
    this.purchaseCancelHandler();
  }
  addIngredientHandler = (type) => {
    console.log("clicked");
    const oldCount = this.state.ingredients[type];
    let updatedCount=oldCount + 1;
    let updatedIngredient = {
      ...this.state.ingredients
    };
    updatedIngredient[type] = updatedCount;
    let newPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice
    });
    this.updatePurchaseable(updatedIngredient);
  }


  removeIngredientHandler = (type) => {
    let oldCount=this.state.ingredients[type];
    if(oldCount < 1){return;}
    let updatedCount=oldCount - 1;
    let updatedIngredient = {
      ...this.state.ingredients
    }
    updatedIngredient[type] = updatedCount;
    let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newPrice
    });
    this.updatePurchaseable(updatedIngredient);
  }

  render(){
    const disabledInfo = {
      ...this.state.ingredients
    }
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] < 1;
    }
    return(
      <Aux>
        <Model show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients}
          cancelPurchase={this.purchaseCancelHandler}
          continuePurchase={this.purchaseContinueHandler}
          price={this.state.totalPrice}/>
        </Model>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
        ingredientAdded={this.addIngredientHandler}
        ingredientRemoved={this.removeIngredientHandler}
        disabled={disabledInfo}
        purchaseable={this.state.purchaseable}
        ordered={this.purchaseHandler}
        price={this.state.totalPrice}></BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;