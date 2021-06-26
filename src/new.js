import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class game extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }
    };

    render (){
        return(
            <div>
                <h1>hello</h1>
                <form>
                    <input type = "text" value= {this.state.email} 
                    onChange ={() => this.setState({email: this.value})}/>
                </form>
            </div>
        )
    } 
}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  