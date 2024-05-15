import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Shop Product</h1>
      <p>Product : {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</p>
    </div>
  );
};

export default ShopPage;
