import React from 'react';
import Display from '../../components/Display';

class DisplayContainer extends React.Component {
    render(){
        return(
            <Display {...this.props}/>
        )
    }
}

DisplayContainer.defaultProps = {
    value: 0,
}

export default DisplayContainer;