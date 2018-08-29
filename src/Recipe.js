import React, {Component} from 'react';
import './Recipe.css';

class Recipe extends Component{
    render(){
        
        const {title,img,instructions,id,onDelete}=this.props;
      const ingredients=this.props.ingredients.map((val,i)=>(
            <li key={i}>{val}</li>
        ));
      

        return(
          <div className="recipe-card">
                  <div > 
                       <img src={img} alt={title}/>
                  </div>
           
            <div className="card-content">
                 <h1 className="recipe-title">{title} </h1>
                 <h2>Ingrediants :</h2>
                 <ul> 
                   {ingredients}
                 </ul>
                 <h2>Instructions :</h2>
                 <p>{instructions}</p>
                 <button type="button" onClick={()=>onDelete(id)}>Delete</button>
            </div>
            
       </div>

            );
            

            
    }
}
export default Recipe;

