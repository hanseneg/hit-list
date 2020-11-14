import React from 'react'

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
        return(
            <div>

            </div>
        )
    }
}

export default List