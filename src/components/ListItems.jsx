import React from "react";

const ListItems = ({items}) => {
    return(
        <React.Fragment>
            {items.map((items,index)=>(<li key={index}>{items}</li>))}            
        </React.Fragment>
    )
}

export default ListItems;