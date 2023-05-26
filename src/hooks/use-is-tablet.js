import { useMediaQuery } from "react-responsive";

export default function UseIsMobile() {
  const isTablet = useMediaQuery({ query: "(max-width: 900px)" });

  return isTablet;
}
