import axios from "axios"

const OrderSummaeryQueries = {
    orders:(data:unknown)=>({
        queryKey: ["data"],
        queryFn : async ()=>await axios.post<string>("","")
    })
} as const




