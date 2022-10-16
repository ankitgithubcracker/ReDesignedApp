import React from 'react'

const Cart = (props) => {
    let grandTotal=0;
    return (
   <>
   <div id="cartid">
   <table>
      <th>Product Id</th><th>Product Image</th><th>Product Name</th><th>Product Price</th><th>Product Quantity</th><th>Amount</th><th>Action</th>
      {
        props.arrCart.map((item=>{
            return(

                <tr><td>{item.id}</td><td><img id="cartimg" src={item.image} alt=""/></td><td>{item.productname}</td><td>{item.price}</td><td> <button className='btnIncdec' id="inpdec" indx="i" onClick="dec" >-</button><input  type="number" value={"item.prodquantity"} className='quantIncdec'/><button  id="btninc" className='btnIncdec' indx="i" onClick="props.incrementCart">+</button></td><td>{item.calprice}</td><td><button id="remove" indx="i" onClick="props.remove">Remove</button></td></tr>

            )
        }))

        
      }
    
            
      
      </table>
  </div>      
   </>
  )
}

export default Cart
