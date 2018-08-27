import React, {Component} from 'react';

const TableHead = () => {  
    return (
        <thead>
            <tr>
                <td>Name</td>
                <td>Username</td>
                <td></td>
            </tr>            
        </thead>
    );
}

const TableBody = props => {   
    const rows =  props.characterData.map((row, index) => {
        return (
            <tr key = {index}>
                <td>{row.name}</td>
                <td>{row.username}</td>
                <td>
                    <button className="button" onClick={()=> {props.removeCharacter(index)}}>Delete</button>
                </td>
            </tr>
        );
    }); 
    
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const {characterData, removeCharacter} = this.props;
        return (
                <table>
                    <TableHead />
                    <TableBody 
                        characterData = {characterData} 
                        removeCharacter = {removeCharacter}
                    />
                </table>
         
        );
    }
}

export default Table;