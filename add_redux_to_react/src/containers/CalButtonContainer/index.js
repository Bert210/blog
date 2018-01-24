import React from 'react';
import CalButton from '../../components/CalButton';
import { connect } from 'react-redux';

import { buttonPushed } from './actions';

class CalButtonContainer extends React.Component {
    render(){
        return(
            <CalButton {...this.props} />
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    buttonPushed: (value) => dispatch(buttonPushed(value)),
})


export default connect(null, mapDispatchToProps)(CalButtonContainer);