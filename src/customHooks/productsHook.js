import { useQuery } from "@tanstack/react-query"
import { queryClient } from ".."
import { getOneProduct, getProducts } from "../helper/helper_data"

export const useFetchProducts = ()=> {
      return useQuery({queryKey:['products'],queryFn:getProducts})
}

export const useFetchOneProduct = (id)=>{
      return useQuery({queryKey:['oneProduct',id],queryFn:()=> getOneProduct(id),staleTime:Infinity})
}

export const useSearchProduct = (input)=>{
      const data = queryClient.getQueryData(["products"]);
      const filterData=  data?.filter((item) => {
      let searchTerm = input?.toLowerCase();
        return item.title.longTitle.toLowerCase().includes(searchTerm);
      })
      return filterData
} 

