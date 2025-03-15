import ListItems from "./ListItems"

const UnorderedList = ({itemList}) => {
    return(
        <ul>
            <ListItems items ={itemList}/>

        </ul>
    )
}

export default UnorderedList;