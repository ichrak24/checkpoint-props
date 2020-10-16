import React , {Component} from 'react'; 

import PropTypes from'prop-types';


export default class ProfileComponent extends Component {



    constructor (props){
        super(props);
        this.imagewasclicked=this.imagewasclicked.bind(this);
    }
    imagewasclicked (event){
        event.preventDefault();
        alert (this.props.name) ;
    }
    render()
{ 
    
    

   
   return (
<div>

<img className="imagee" src={this.props.myimg} alt="imageinsrc" onClick={this.imagewasclicked} />

</div>
    );
}
}
ProfileComponent.defaultProps ={
    name: "ichrak "
}
ProfileComponent.propTypes={
    name : PropTypes.string
}