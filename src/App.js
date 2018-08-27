import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters : []
    };

    removeCharacter = index => {
        const {characters} = this.state;

        this.setState({
            characters : characters.filter((char, i) => {
                return i!==index;
            })
        });
    }

    handleSubmit = character => {
         this.setState({
             characters : [...this.state.characters,character]
         })
    }

    componentDidMount () {
        /* API call */
        const url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    characters : res
                }) 
            })
    }

    render() {   
        return (
            <div className="container">
                <Table 
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form 
                    handleSubmit={this.handleSubmit}
                />
            </div>            
        );
    }
}

export default App;