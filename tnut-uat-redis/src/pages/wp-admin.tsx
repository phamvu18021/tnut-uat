import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://nologin.tnut.vn/wp-admin/");
  }, [router]);
  return null;
};

export default Page;
