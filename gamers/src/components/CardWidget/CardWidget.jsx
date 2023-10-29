import cart from "./assets/carrito.jpg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CardWidget = ({ quantity }) => {
    return (
        <div>
            <ShoppingCartIcon />
            {quantity}
        </div>
    );
}

export default CardWidget;
