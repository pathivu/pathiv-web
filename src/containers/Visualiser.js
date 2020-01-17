import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../stylesheets/containers/visualiser.scss';

export class Visualiser extends Component {
    render() {
        return (
            <div className="visualiser">
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Visualiser)
