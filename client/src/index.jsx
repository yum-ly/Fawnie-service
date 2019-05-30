import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import NameInfoBar from './NameInfoBar.jsx';
import OpenTimes from './OpenTimes.jsx';
import Contacts from './Contacts.jsx';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faChevronDown, faMapMarkerAlt, faPhone, faEnvelopeSquare, faWindowMaximize, faDirections } from '@fortawesome/free-solid-svg-icons'

library.add(faClock,faChevronDown,faMapMarkerAlt,faPhone, faEnvelopeSquare, faWindowMaximize, faDirections)

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            info: {
                name: '',
                openTimes: {
                    monday:[],
                    tuesday:[],
                    wednesday:[],
                    thursday: [], 
                    friday:[], 
                    saterday:[],
                    sunday: []
                },
                address: '',
                phone: '',
                email: '',
                url: ''
            },
            styling: {display: 'none'},
            isClicked: false
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler () {
        if(this.state.isClicked === false) {
            this.setState({
                styling: {display: 'flex'},
                isClicked: true
            })
        } else {
            this.setState({
                styling: {display: 'none'},
                isClicked: false
            })
        }
    }

    componentDidMount(){
        axios.get('/info')
        .then(response => {
            this.setState({
                info: response.data[5]
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
                <NameInfoBar info={this.state.info}/>
                <OpenTimes info={this.state.info} onClickHandel={this.onClickHandler} styling={this.state.styling}/>
                <Contacts info={this.state.info} />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));



