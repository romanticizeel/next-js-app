import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router";
import ProductDetails from "../views/Product/ProductDetails";
import useSWR from "swr";
import { query } from "firebase/firestore";
import { ProductType } from "@/types/product.type";

//params server side rendering & static site generation
// { product }: { product: ProductType }
const DetailProductPage = () => {
  const { query } = useRouter();
  //data fetcher
  const { data, error, isLoading } = useSWR(
    `/api/product/${query.product}`,
    fetcher
  );
  return (
    <div>
      {/* client side rendering */}
      <ProductDetails product={isLoading ? {} : data.data} />

      {/* server side rendering * static site generation */}
      {/* <ProductDetails product={product} /> */}
    </div>
  );
};

export default DetailProductPage;

//server-side-rendering
// export async function getServerSideProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   // console.log(params.product);
//   //fetch data
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

//static site generation
// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/product");
//   const response = await res.json();

//   const paths = response.data.map((product: ProductType) => ({
//     params: { product: product.id },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }
