import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import NameInfoBar from './NameInfoBar.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            info: {
                name: ''
            }
        }
    }

    componentDidMount(){
        axios.get('/info')
        .then(response => {
            this.setState({
                info: response.data[0]
              })
            console.log('sucessfull axios client get request with data');
        })
        .catch(err => {
            console.log('Axios error in client get request', err)
        });

    }
 
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <NameInfoBar info={this.state.info}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));



