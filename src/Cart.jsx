
import { useSelector,useDispatch } from "react-redux"
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import {remove,subcount,addcount} from "./productSlice"
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

const Cart=()=>{
    let total=0;
   
    const myans=useSelector((state)=>state.cartitem.cart)
    console.log(myans)
    const dispatch = useDispatch();



   const myDel=(id)=>{

    dispatch(remove(id))


   }
        
    const add=(id)=>{
      dispatch(addcount(id))

    }

    const sub=(id)=>{
      
      dispatch(subcount(id))
    }
       
      


    
    let mycart=myans.map((key)=>{
     
      const itemTotal = key.price * parseInt(key.Quantity);
    
         total+= itemTotal;

         console.log(parseInt(total,10))
        return(
            <>

            <tr>

                <td> <img src={`${key.image}`} style={{height:"100px", width:"100px"}}/> </td>
                <td> {key.name} </td>
                <td> {key.From} <span>-To-</span>{key.To} </td>
                <td> {key.km}</td>
                <td> {key.price} </td>
                <td><IoIosAdd onClick={()=>{add(key.id)}} />{key.Quantity}<RiSubtractFill onClick={()=>{sub(key.id)}} /></td>

                <td>  <a href="#" onClick={()=>{myDel(key.id)}}>
                
            <MdDelete />
            </a> </td>

            <td>{itemTotal.toFixed(2)}</td>





            </tr>

          
            
            </>
        )

    })

    console.log(total)
    return(
        


        <>
         <h1> your booking</h1>
         <Table striped bordered hover style={{width:"50%"}}>

      <thead>
        <tr>
          <th> image </th>
          <th>name</th>
          <th>destination</th>
          <th>Distance</th>
          <th>price</th>
          <th>ouantity</th> 
          
          <th>Delete</th>
          <th>Total</th>
          
        </tr>
      </thead>
      <tbody>
        
    
      {mycart}
      <tr>
      <td colSpan="6"></td>
                        <th>Grand Total</th>
                        <td>{total.toFixed(2)}</td>
      </tr>
    </tbody>

    </Table>

    

        
        </>
        
    )
}
export default Cart