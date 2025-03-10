import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetInvestments=() =>{
    return useQuery({
        queryKey: ['investments'],
        queryFn: async () => {
            // const response= await axios.get('http://localhost:5000/api/investment/investments')
            // return response.data
            const response= await axios.get('https://dashboard-backend-hazel-five.vercel.app/api/investment/investments')
            return response.data
        }
    })
}