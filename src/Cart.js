import React, {useState, useEffect} from "react";
import CartItem from './CartItem'
import './Cart.css'

function Cart({initialItems}) {

    const [items, setItems] = useState(initialItems);

    useEffect(()=>{
        
    })
    const updateQty = (id, newQty) =>{
        const newItems = items.map(item => {
            if(item.id === id){
                return {...item, qty : newQty}
            }
            return item;
        });
        setItems(newItems);
    }
    const grandTotal = items.reduce((total, item) =>(
        total + item.qty * item.price
    ), 0).toFixed(0);

    return (
        <div className="Cart">
            <div className="Cart-title">
                <pre>{`
          _____                   _____                   _____            _____          
         /\\    \\                 /\\    \\                 /\\    \\          /\\    \\         
        /::\\    \\               /::\\    \\               /::\\    \\        /::\\    \\        
       /::::\\    \\             /::::\\    \\             /::::\\    \\       \\:::\\    \\       
      /::::::\\    \\           /::::::\\    \\           /::::::\\    \\       \\:::\\    \\      
     /:::/\\:::\\    \\         /:::/\\:::\\    \\         /:::/\\:::\\    \\       \\:::\\    \\     
    /:::/  \\:::\\    \\       /:::/__\\:::\\    \\       /:::/__\\:::\\    \\       \\:::\\    \\    
   /:::/    \\:::\\    \\     /::::\\   \\:::\\    \\     /::::\\   \\:::\\    \\      /::::\\    \\   
  /:::/    / \\:::\\    \\   /::::::\\   \\:::\\    \\   /::::::\\   \\:::\\    \\    /::::::\\    \\  
 /:::/    /   \\:::\\    \\ /:::/\\:::\\   \\:::\\    \\ /:::/\\:::\\   \\:::\\____\\  /:::/\\:::\\    \\ 
/:::/____/     \\:::\\____/:::/  \\:::\\   \\:::\\____/:::/  \\:::\\   \\:::|    |/:::/  \\:::\\____\\
\\:::\\    \\      \\::/    \\::/    \\:::\\  /:::/    \\::/   |::::\\  /:::|____/:::/    \\::/    /
 \\:::\\    \\      \\/____/ \\/____/ \\:::\\/:::/    / \\/____|:::::\\/:::/    /:::/    / \\/____/ 
  \\:::\\    \\                      \\::::::/    /        |:::::::::/    /:::/    /          
   \\:::\\    \\                      \\::::/    /         |::|\\::::/    /:::/    /           
    \\:::\\    \\                     /:::/    /          |::| \\::/____/\\::/    /            
     \\:::\\    \\                   /:::/    /           |::|  ~|       \\/____/             
      \\:::\\    \\                 /:::/    /            |::|   |                           
       \\:::\\____\\               /:::/    /             \\::|   |                           
        \\::/    /               \\::/    /               \\:|   |                           
         \\/____/                 \\/____/                 \\|___|`}</pre>
         </div>

         <div className="Cart-Items">
            {items.map(item =>(
                <CartItem key={item.id} updateQty={updateQty} {...item}/>
            ))}
         </div>
            <h2>Grand Total:{grandTotal}¥</h2>
        </div>
    )

}

export default Cart;

