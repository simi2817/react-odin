import ListItem from "./ListItem";

function List({ foodItems }) {
    // if(!foodItems)
    //     return <p>Loading....</p>
    // if(foodItems.length === 0)
    //     return <p>Empty Array!</p>
    // else {
        return (
            <>
            <h2>Food Items:</h2>
            {!foodItems && <p>Loading...</p>}
            {foodItems.length > 0 && (
                           <ul>
                           {foodItems.map((foodItem) => {
                               return foodItem.startsWith("b") &&<ListItem key={foodItem} foodItem={foodItem}/>
                           })}
                       </ul>
            )}
            {foodItems.length === 0 && <p>Empty Array!</p>}
            </>
        )
    // }
}

export default List;