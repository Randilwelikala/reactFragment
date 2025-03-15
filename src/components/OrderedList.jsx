import ListItems from "./ListItems"

const OrderedList = ({itemList}) => {
    return(
        <ol>
            <ListItems items ={itemList}/>

        </ol>
    )
}

export default OrderedList;