const ListItems = ({items}) => {
    return(
        <div>
            {items.map((items,index)=>(<li key={index}>{items}</li>))}

        </div>
    )
}

export default ListItems;