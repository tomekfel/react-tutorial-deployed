import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.initialState = {
            name : '',
            username : ''
        }
        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    submitForm = () => {
        console.log('submitForm');
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {name, username} = this.state;

        return (
            <form>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange}/>
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={this.handleChange}/>
                <input type="button" value="Submit" onClick={this.submitForm}/>
            </form>
            
        )
    }
}

export default Form;