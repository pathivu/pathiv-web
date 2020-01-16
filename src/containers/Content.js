import React, { Component } from 'react';
import styles from '../stylesheets/containers/content.scss';
import { connect } from 'react-redux';

export class Content extends Component {

    render() {
        return (
            <div className={styles.content}>
                hi
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
