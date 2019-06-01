import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import NameInfoBar from './NameInfoBar.jsx';
import OpenTimes from './OpenTimes.jsx';
import Contacts from './Contacts.jsx';
import Map from './Map.jsx';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines,faYenSign, faClock, faChevronDown, faMapMarkerAlt, faPhone, faEnvelopeSquare, faWindowMaximize, faDirections } from '@fortawesome/free-solid-svg-icons'

library.add(faGripLines, faYenSign, faClock,faChevronDown,faMapMarkerAlt,faPhone, faEnvelopeSquare, faWindowMaximize, faDirections)

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            info: {
                uuid: 1,
                name: '',
                openTimes: {
                    monday:[],
                    tuesday:[],
                    wednesday:[],
                    thursday: [], 
                    friday:[], 
                    saturday:[],
                    sunday: []
                },
                address: '',
                phone: '',
                email: '',
                url: '',
                GPS: {
                    x: "",
                    y: ""
                },
                review: [{}],
            },
            styling: {display: 'none'},
            isClicked: false,
            size: 0,
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler () {
        if(this.state.isClicked === false) {
            this.setState({
                styling: {display: 'flex'},
                isClicked: true,
                size: 200
            })
        } else {
            this.setState({
                styling: {display: 'none'},
                isClicked: false,
                size: 0
            })
        }
    }

    componentDidMount(){
        axios.get('http://yumly-env-3.r4x7fui8jw.us-east-2.elasticbeanstalk.com/info', {params: {uuid: this.state.info.uuid}})
        .then(response => {
            //console.log('sucessfull axios client get request with data',response.data);

            this.setState({
                
                info: response.data
              })
        })
        .catch(err => {
            console.log('Axios error in client get request', err)
        });

    }
    componentDidUpdate(prevProps){
        if (this.props.uuid !== prevProps.uuid) {
            Axios.post('api'/*'http://YumlyMicroservice-env-2.ynkqtbpzvp.us-east-2.elasticbeanstalk.com/api'*/, {query : this.props.restaurant , type: "data retrieve"})
               .then(restaurant=>this.setState({currentRestaurant: restaurant.data[0]}, this._triosCreate))
               .catch((err)=>{console.log(err, "ya borked it!")})
        }
    }

    
 
    render(){
        return(
            <div className="mainInfo">
                <NameInfoBar info={this.state.info}/>
                <OpenTimes info={this.state.info} onClickHandel={this.onClickHandler} styling={this.state.styling}/>
                <Contacts info={this.state.info} size={this.state.size} />
                <Map info={this.state.info} size={this.state.size}/>
            </div>
        )
    }
}

//ReactDOM.render(<App/>, document.getElementById('root'));
window.Info=App;


