import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        axios.get('/info')
        .then(response => {
            console.log('sucessfull axios client get request with data :', response.data);
        })
        .catch(err => {
            console.log('Axios error in client get request', err)
        });

    }
 
    render(){
        return(
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

