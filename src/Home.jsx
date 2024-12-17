import axios from "axios"
import { useState,useEffect } from "react"

const Home=()=>{

    const[mydata,setmydata]=useState([])

    const loaddata=()=>{
        let api='http://localhost:4000/cars'
      axios.get(api).then((res)=>{
        setmydata(res.data)

    })
    }
    useEffect(()=>{
        loaddata();
    },[])

    let ans=mydata.map((key)=>{
        return(
            <>
                <div class="box1">
               <div class="img"><img src={`${key.image}`} alt={key.name} /></div> 
                <div>{key.name}</div>
                <div>{key.From} <span>To</span>{key.To}</div>

                <div>{key.km}</div>
                <div>{key.price}</div>
                </div>

            
            
            
            </>
        )
    })
    
    return(
        

  

        <>
       


        <div class="product">

            {ans}


        </div>
        
        </>
    )
}
export default Home