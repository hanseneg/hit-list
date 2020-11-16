import React from 'react'
const axios = require('axios')
// import axios from 'axios'

class List extends React.Component {
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
                <div>
                    <img 
                        alt={person.name} 
                        src={person.image}
                        className='img'
                        >
                    </img>
                    <h3 className='name'>{person.name}</h3>
                </div>
            )
        })
          return(
              <div>{mappedList}</div>
          ) 
    }
}

export default List