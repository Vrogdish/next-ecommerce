import { Product } from "@/models/product";

export const getProductsFromApi = async () => {
  let fetchResponse : {data : Product[], error : any} = {data : [] , error : ""}
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const productsJson = await res.json();

    const productsList: Product[] = [];

    productsJson.map((item: any) => {
      const product: Product = {
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        category: item.category,
        image: item.image,
        rating: {
          rate: item.rating.rate,
          count: item.rating.count,
        },
      };
      productsList.push(product);
      
    });
    fetchResponse.data = productsList 
    // return productsList;
    return fetchResponse

  } catch (error) {
    fetchResponse.error = error
    console.log(error);
    return fetchResponse
  }
};
