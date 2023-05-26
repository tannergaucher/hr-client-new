import { useMediaQuery } from "react-responsive";

export default function UseIsMobile() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return isMobile;
}
