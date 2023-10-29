import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = ({ products }) => {

    console.log(products)
    return (
        <div className="ListGroup">
            {products.map(prod => <Item Key={prod.id} {...prod} />)}
        </div>
    )

}
export default ItemList