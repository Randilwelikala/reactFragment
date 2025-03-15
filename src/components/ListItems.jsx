import {Fragment } from "react";
const ListItems = ({items}) => {
    return(
        <Fragment>
            {items.map((items,index)=>(<li key={index}>{items}</li>))}

            
        </Fragment>
    )
}

export default ListItems;