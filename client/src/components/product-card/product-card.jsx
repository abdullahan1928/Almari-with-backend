import './product-card.scss'
import Button from '../button/button'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/cart.context'
import SimpleSnackbar from '../snackbar/snackbar'

const ProductCard = ({ product }) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    const { name, price, imageUrl } = product

    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => {
        addItemToCart(product);
        setShowSnackbar(true);
    }

    useEffect(() => {
        // console.log(product)
    }, [product])

    return (
        <div className='prod-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='prod-card-details'>
                <span className='prod-name'>
                    {name}
                </span>
                <span className='prod-price'>
                    ${price}
                </span>
            </div>
            <Button
                btnType='addToCart'
                onClick={addProductToCart}
            >
                Add to cart
            </Button>
            {showSnackbar &&
                <SimpleSnackbar
                    message={`${name} added to cart`}
                    isOpen={showSnackbar}
                />
            }
        </div>
    )
}

export default ProductCard