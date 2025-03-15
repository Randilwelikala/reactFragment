import React from "react";

const ListItems = ({items}) => {
    return(
        <>
            {items.map((items,index)=>(<li key={index}>{items}</li>))}            
        </>
    )
}

export default ListItems;