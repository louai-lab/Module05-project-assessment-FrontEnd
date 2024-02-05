import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import StyleProducts from "./Products.module.css";

function Products() {
  const {
    isPending: isProductsPending,
    error: productsError,
    data: productsData,
  } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      try {
        const response = await axios.get("http://localhost:4000/product");
        // console.log(response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
      }
    },
  });

  if (isProductsPending) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Loadiiing ...</h1>
      </div>
    );
  }

  if (productsError) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <h1>An error occured while fetching Data</h1> */}
        <h1>Error ...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Products</h1>

      <div className={StyleProducts.cartContainer}>
        {productsData.map((product) => (
          <div key={product._id}>
            <div className={StyleProducts.oneCart}>
              <img
                src={`${process.env.REACT_APP_IMAGE_PATH}${product.image}`}
                className={StyleProducts.imgCart}
                alt={product.name}
              />

              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>

              <button
                fullWidth
                variant="contained"
                // disabled={isProductInCart(product._id)}
                // onClick={() => addToCart(product)}
                sx={{
                  bgcolor: "#C86823",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    bgcolor: "#A0471D",
                    color: "white",
                  },
                  textTransform: "none",
                  fontSize: "1.1rem",
                }}
              >
                <p>Add to cart</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
