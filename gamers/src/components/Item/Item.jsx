import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {

    console.log(img);
    console.log(id)
    return (
        <article className="CardItem"> 
            <header className="Header">
                <h2 className="ItemHeader">
                    {name} 
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter"> 
                <Link to={`/Item/${id}`} className="Option">
                    Ver detalle
                </Link>
            </footer>
        </article>
    );
}

export default Item;
