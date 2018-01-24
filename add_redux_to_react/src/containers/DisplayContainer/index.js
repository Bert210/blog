import React from 'react';
import Display from '../../components/Display';

import { connect } from 'react-redux';

class DisplayContainer extends React.Component {
    render(){
        return(
            <Display {...this.props}/>
        )
    }
}

// DisplayContainer.defaultProps = {
//     value: 0,
// }

const mapStateToProps = (state) => ({
    value: state.calButton.currentValue,
})

export default connect(mapStateToProps, null)(DisplayContainer);