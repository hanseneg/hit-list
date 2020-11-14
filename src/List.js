import React from 'react'
const axios = require('axios')
// import axios from 'axios'

class List extends React.Component{
    constructor() {
        super()
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json').then(response => {
            this.setState({
                persons: response.data
            })
        })
    }

    render() {
        const mappedList = this.state.persons.map(person => {
            return(
                <React.StrictMode>
                <div>
                    <img alt={person.name}>{person.image}</img>
                    <h3>{person.name}</h3>
                </div>
                </React.StrictMode>
            )
        })
          return(
              <div>{mappedList}</div>
          ) 
    }
}

export default List