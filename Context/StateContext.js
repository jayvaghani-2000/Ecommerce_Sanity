import React, {useState,createContext,useContext} from "react";
import toast, { Toast } from "react-hot-toast";

const Context = createContext()

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false)
    const [cartItem, setCartItem] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    const onAdd = (product,quantity) => {
        const checkProductInCart = cartItem.find(item=>item._id===product._id)

        setTotalPrice(prev=>prev+quantity*product.price)
        setTotalQuantities(prev=>prev+quantity)
        if(checkProductInCart){

            const updatedCartItem = cartItem.map((item)=>{
                if(item._id===product._id){
                    return {...item,quantity:item.quantity+quantity}
                }
                return {...item}
            })
            setCartItem(updatedCartItem)
        }
        else{
            product.quantity=quantity
            setCartItem([...cartItem,{...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart`)
    }

    const incQty = () => {
        setQty(prev=>prev+1)
    }

    const decQty = () => {
        setQty(prev=>{
            if(prev===1) return prev
            return prev-1
        })
    }

    return (<Context.Provider value={{showCart,
    cartItem,
    totalPrice,
    totalQuantities,
    qty,
    setShowCart,
    setCartItem,
    incQty,
    decQty,
    onAdd
    }}>
        {children}
    </Context.Provider>)
}

export const useStateContext = () => useContext(Context)