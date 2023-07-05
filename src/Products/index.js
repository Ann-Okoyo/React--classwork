import React ,{useState,useEffect}from "react";
import './style.css';

const Products =()=>{
    const [products,setProducts] = useState([]);
    const [loading,setLoading]= useState(false)
  

    useEffect(()=>{
        (async ()=>{
             getProducts();
        })();

    },[]);
    
    const getProducts = async () =>{
        try{
            setLoading(true)
            const response =await fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result.product);
            setLoading(false)
            

        }
        catch(error){
            console.log(error.message)

        }
};
    

    return(
        <div className="products">
{products.map(item=>(
    <div key={item.id}>
        <img alt="" src={item.images[3]}/>
        <h3>{item.title}</h3>
        <p>Ksh{item.price}</p>
       <p>{item.discountPercentage}</p>
       <p>{item.rating}</p>
    </div>
))}
   </div> )
}

export default Products
