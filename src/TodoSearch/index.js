import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    
    const onSerchValueChange = (event)=>{
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <input className="input--search" placeholder="Qué desea buscar?" 
                value={searchValue}
                onChange={onSerchValueChange}
        />
    );
}

export { TodoSearch }