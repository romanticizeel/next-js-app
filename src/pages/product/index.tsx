import { fetcher } from "@/lib/swr/fetcher";
import ProductViews from "../views/Product";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

//client-side-rendering

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  // console.log(products);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) push("/auth/login");
  }, []);

  //data fetcher
  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  // useEffect(() => {
  //   fetch("api/product")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);
  return (
    <div>
      <ProductViews products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
