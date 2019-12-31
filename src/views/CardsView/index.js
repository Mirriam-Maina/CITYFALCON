import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import { connect } from 'react-redux';

class CardView extends Component{
    componentDidMount(){
        const { state} = this.props;
        console.log('stattttttttt', state)
    }


render(){
    return(
            <Card />
    );
}


}

const mapStateToProps = (state) => {
   return 
};

export default connect(mapStateToProps)(CardView);


