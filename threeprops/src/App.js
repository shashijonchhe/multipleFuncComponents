import React,{Component} from 'react';
import './App.css';
import Type from './components/type';
import Clicked from './components/click';
import Lists from './components/lists';


class App extends Component{
  constructor(){
    super()
    this.state={
      item:'',
      items:[]
    }
  }
onHandleChange=e=>{
  let item=this.state.item
  item=e.target.value

  this.setState({
    item
  })
}
onButtonClick=()=>{
  let item=this.state.item
  let items=this.state.items
  items.push(item)

  this.setState({
    items
  })
}

render(){
  let items=this.state.items
  return(
    <div>
      
            <Type onInputChange={this.onHandleChange}></Type>
      
      
              <Clicked onButtonClick={this.onButtonClick}></Clicked>
      
      
              <Lists items={items}></Lists>
      
    </div>
  )
}

}



export default App;
