import axios from "axios";
import { create } from "zustand";
import { storetypes } from "./store.types";

const products= create<storetypes>((set)=>({
    loading:false,
    productss:[],
    error:null,
    getproducts: async()=>{
        try {
            const res=await axios.get(`http://localhost:4000/products`)
            const data=await res.data
           set(()=>({
            productss:data
           }))
        } catch (error) {
            
        }

    }
}))

export default products