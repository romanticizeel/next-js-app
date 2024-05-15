import { useRouter } from "next/router";
import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const DisableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main>
      {!DisableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
