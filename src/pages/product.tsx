"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/common/navbar/navbar";
import Footer from "@/components/common/footer/footer";
import ProductDetails from "@/components/Productdetails_component/productdetails";
import RecomendedProduct from "@/components/RecomendedCards/recomendedcards";
import productData from "../../data/productdata.json"; // Adjust the path as necessary

const Product = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from query parameters
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id as string, 10);
      const product = productData.find((p) => p.id === productId);
      setSelectedProduct(product);
    }
  }, [id]);

  const handleCloseDetails = () => {
    setSelectedProduct(null);
    router.push('/'); // Navigate back to the home or previous page
  };

  return (
    <div className="bg-[url('/bg-image.png')] bg-[#212121] text-white h-full overflow-hidden">
      <HelmetProvider>
        <Helmet>
          <title>Product | Metaverse Shopping</title>
        </Helmet>
        <Navbar />
        {selectedProduct && (
          <ProductDetails 
            product={selectedProduct} 
            onClose={handleCloseDetails} 
          />
        )}
        <RecomendedProduct />
        <Footer />
      </HelmetProvider>
    </div>
  );
};

export default Product;
