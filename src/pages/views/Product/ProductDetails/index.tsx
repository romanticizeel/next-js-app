import { ProductType } from "@/types/product.type";
import styles from "./ProductDetails.module.scss";

const ProductDetails = ({ product }: { product: ProductType }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Product</h1>
      <div className={styles.productDetails}>
        <div className={styles.productDetails__item__image}>
          <img src={product.image && product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetails__item__name}>{product.name}</h4>
        <p className={styles.productDetails__item__size}>{product.size}</p>
        <p className={styles.productDetails__item__price}>
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </>
  );
};
export default ProductDetails;
