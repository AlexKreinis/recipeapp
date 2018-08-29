import React, { Component } from 'react';
import './RecipeApp.css';

import Navbar from './Navbar'
import RecipeList from './RecipeList'
import RecipeInput from './RecipeInput'

class RecipeApp extends Component {
    constructor(props){
        super(props)
        this.state={
             recipes: [
      {
        id:0 , 
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/3/1/0/FNM_040111-WN-Dinners-030_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371595164628.jpeg"
      },
      {
        id:1,  
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/milkshake.jpg?itok=n_3au7e1"
      },
      {
        id:2,
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "https://www.californiaavocado.com/getattachment/435e6024-0445-4e2b-b512-27b21bf03a05/California-Avocado-Toast-Three-Ways"
      },
        {id:3,
        title: "Hamburger",
        instructions: "Fry the patty  Cut the vegtables.  Warm the buns.  Spread ketchup.  Assemble the burger",
        ingredients: ["Patty", "Vegtables", "Fries"],
        img: "https://sifu.unileversolutions.com/image/en-AU/recipe-topvisual/2/1260-709/beef-burger-with-deep-fried-bacon-and-thousand-island-dressing-50247463.jpg"
      },
      {
        id:4,
        title: "Pizza",
        instructions: "Bake.  Season",
        ingredients: ["2 cups of flour", "Cheese","Yeast","Pizza sauce"],
        img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/alpine_pizza_32132_16x9.jpg"
      },
      {
        id:5,
        title: "Sushi",
        instructions: "Cut Salmon.  Slice avocado and spread evenly.  Add salt, oil, and pepper to taste.",
        ingredients: ["Salmon", "1 avocado", "Nagiri", "Ginger"],
        img: "https://studentswhoknow.co.il/wp-content/uploads/2017/12/sushi-2853382_1920.jpg"
      }
      
    ]
    , nextRecipeId:6,
      showForm:false
        }
        this.handleSave=this.handleSave.bind(this);
        this.onDelete=this.onDelete.bind(this);
    }
    onDelete(id){
      const recipes=this.state.recipes.filter(r=>r.id!==id);
      this.setState({recipes});
    }
    
    handleSave(recipe){
      this.setState((prevState,props)=>{
        const newRecipe={...recipe,id:this.state.nextRecipeId};
        return {
          nextRecipeId:prevState.nextRecipeId +1,
          showForm:false,
          recipes: [...this.state.recipes,newRecipe]
        }
      })
    }
    
    
  render() {
    const {showForm}=this.state;
    return (
     <div>
       <Navbar onNewRecipe={()=>this.setState({showForm:true})}/>
       
       {showForm ? <RecipeInput
       onSave={this.handleSave} 
       onClose={()=>this.setState({showForm:false})}/> 
       :null}
       
       <RecipeList onDelete={this.onDelete} recipes= {this.state.recipes}/>
       </div>
    );
  }
}

export default RecipeApp;
