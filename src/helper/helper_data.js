import axios from "axios";
import { queryClient } from "..";

export const bannerImages = [
  "https://cdn.shopify.com/s/files/1/0997/6284/files/image_2023_02_24T11_14_00_895Z_1_1_1900x.png?v=1677476136",
  "https://cdn.shopify.com/s/files/1/0997/6284/files/image_2023_02_27T11_53_07_497Z_1_1900x.png?v=1677564681",
  "https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2022/03/9070_16006.jpg",
  "https://dzp3g6fzlnblr.cloudfront.net/wp-content/uploads/2021/07/Dh1.jpg",
];

// helper functions

export const getProducts = async () => {
  const response = await axios.get("http://localhost:8000/getProducts");
  const data = response.data;
  return data;
};

export const getOneProduct = (id) => {
  const data = queryClient.getQueryData(["products"]);
  const filterData = data?.filter((item) => item.id == id);
  const singleProduct = filterData[0];
  return singleProduct;
};

