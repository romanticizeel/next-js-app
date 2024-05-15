import styles from "@/styles/404.module.scss";
import Head from "next/head";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <Head>
        <title>404 Error Page</title>
      </Head>
      <img src="/404.png" alt="img" className={styles.error__image} />
      <div>Halaman Tidak Ditemukan</div>
    </div>
  );
};

export default Custom404;
