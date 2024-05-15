import styles from "./Login.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const LoginViews = () => {
  const { push } = useRouter();
  const HandleLogin = () => {
    push("/product");
  };
  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-2">
        Login Page
      </h1>
      <button
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-5"
        onClick={HandleLogin}
      >
        Login
      </button>
      <p>
        Belum punya akun? registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
