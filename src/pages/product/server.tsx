import ProductViews from "../views/Product";
import type { ProductType } from "@/types/product.type";

//server-side-rendering

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductViews products={products} />
    </div>
  );
};

export default ProductPage;

//dipanggil setiap melakukan request (setiap halamannya dibuka)
export async function getServerSideProps() {
  //fetch data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
