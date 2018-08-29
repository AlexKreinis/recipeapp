import React,{Component} from 'react'
import './Navbar.css';
class Navbar extends Component{
    static defaultProps={
        onNewRecipe(){}
    }

    render(){
        return(
      <header>
        <h2><a>Alex's Recipe App</a></h2>
        <nav>
          <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
         
        </nav>
</header>
            
            );
    }
}
export default Navbar