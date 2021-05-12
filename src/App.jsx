import React, { useState } from 'react';
import ToDoList from './ToDoList';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
const App = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvents = (e) => {
        setInputList(e.target.value);
    };
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        });
        setInputList("");
    };
    // The filter() method creates a new array with all the elements
    // that pass the test implemented by the callback() function. 
    // Internally, the filter() method iterates over each element of the array
    // and pass each element to the callback function.
    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        })
    };
    return (
        <>
            <div classNameName="main_div">
                <div classNameName="center-div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add a Item"
                        value={inputList}
                        onChange={itemEvents} />
                    <Button classNameName="newBtn" onClick={listOfItems}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        {/* <li>{inputList}</li> */}
                        {Items.map((itemval, index) => {
                            return <ToDoList
                                key={index}
                                id={index}
                                text={itemval}
                                onSelect={deleteItems}
                            />
                        })}
                    </ol>

                </div>
            </div>
        </>
    );
};
export default App;