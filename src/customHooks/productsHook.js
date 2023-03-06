import { useQuery } from "@tanstack/react-query"
import { getOneProduct, getProducts } from "../helper/helper_data"

export const useFetchProducts = ()=> {
      return useQuery({queryKey:['products'],queryFn:getProducts})
}

export const useFetchOneProduct = (id)=>{
      return useQuery({queryKey:['oneProduct',id],queryFn:()=> getOneProduct(id),staleTime:Infinity})
}