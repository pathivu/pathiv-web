import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
    }

    onChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }

    

    render() {
        const { value } =this.state;
        return (
            <div className={styles.searchbar}>
                <input className={styles.input} onChange={value}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
