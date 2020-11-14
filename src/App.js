import React from 'react'
import List from './List'
import Header from './Header'
import Footer from './Footer'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <List />
                <Footer />
            </div>
        )
    }
}

export default App