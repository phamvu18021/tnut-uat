import { ReactNode, useEffect, useState } from "react";
import { CTA } from "./components/Cta";
import { Footer } from "./footer";
import { Header } from "./header";
import { useInView } from "react-intersection-observer";
import { Box } from "@chakra-ui/react";

interface ILayout {
  children: ReactNode;
}
const Layout = ({ children }: ILayout) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1 // Kích hoạt khi 50% của phần tử hiển thị trong viewport
  });
  useEffect(() => {
    // Kiểm tra xem trongView và isVisible đều là true
    if (inView && !isVisible) {
      setIsVisible(true); // Nếu không thì hiển thị
    }
  }, [inView, isVisible]);
  return (
    <>
      <Header />
      <main>{children}</main>
      <CTA />
      <Box ref={ref}>
        {isVisible && (
          <>
            <Footer />
          </>
        )}
      </Box>
    </>
  );
};

export default Layout;
