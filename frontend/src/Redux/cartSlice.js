import { act } from "react"
import { data } from "react-router-dom";
import { createSlice } from "@reduxjs/toolkit";

const  cartSlice = createSlice({
    name: 'mycart',

    initialState: {
        cart: [],
    },

    reducers: {
        addToCart: (state, action) => {
            const data =state.cart.filter(e=>e.id==action.payload.id)

            state.cart.push(action.payload)
        }, 
        dataIncrease: (state, actions) => {
            const item = state.cart.find(e => e.id == actions.payload.id);
            if (item) {
                item.qnty++;
            }
        } ,
        dataDecrease: (state, actions) => {
            const item = state.cart.find(e => e.id == actions.payload.id);
            if (item ) {
                item.qnty--;
            } 
            else {
                state.cart = state.cart.filter(e => e.id !== actions.payload.id)
            }
            },

            productEmpty:(state,actions)=>{
                state.cart=state.cart.filter(e=>e.id!==actions.payload.id)
            },
            cartEmpty:(state) => {
                state.cart = [];
            },
            itemRemove:(state,actions)=>{
                state.cart=state.cart.filter(e=>e.id!=actions.payload.id);
            }
        }
        
        }) 

        export const {aadTocard,dataIncrease,dataDecrease,productEmpty,cartEmpty,itemRemove}=cartSlice.actions

        export default cartSlice.reducer