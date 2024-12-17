import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "cartitem",
    initialState: {
        cart: [],
        cartCount: 0, 
    },
    reducers: {
        addcart: (state, actions) => {
            console.log(actions.payload)
            state.cart.push(actions.payload);
            state.cartCount += 1; 
            console.log("Item added:", actions.payload);
            console.log(state.cart)
        },
        remove: (state, actions) => {
            state.cart = state.cart.filter(item => item.id !== actions.payload);
            state.cartCount -= 1; 
            console.log("Item removed with ID:", actions.payload);
        },
        addcount:(state,actions)=>{
            console.log(actions.payload)
            for(let i=0;i<state.cart.length;i++){
                if(state.cart[i].id===actions.payload){
                    state.cart[i].Quantity++
                }
            }
        },
        subcount:(state,actions)=>{

             for(let i=0;i<state.cart.length;i++){
                if(state.cart[i].id===actions.payload){
                  
                    if(state.cart[i].Quantity>1){
                        
                       
                        state.cart[i].Quantity--
                        
                    }
                }
            }

        }
    }
});

export const { addcart, remove,subcount,addcount } = productSlice.actions;
export default productSlice.reducer;

