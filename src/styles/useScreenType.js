import { useMediaQuery } from "react-responsive";

//4K Screen - 2560px
export const FourKScreen = ({ children }) => {
    const isScreen4k = useMediaQuery({ minWidth: 1700, maxWidth: 2600 });
    return isScreen4k ? children : null;
  };
  
//Laptop L Screen - 1440px
  export const LaptopLScreen = ({ children }) => {
    const isDesktopLaptopL = useMediaQuery({ minWidth: 1440, maxWidth: 1600 });
    return isDesktopLaptopL ? children : null;
  };
  
  // Laptop Screen - 1024px
  export const LaptopScreen = ({ children }) => {
    const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
    return isLaptop ? children : null;
  };
  
  // Tablet Screen - 768px
  export const TabletScreen = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 760, maxWidth: 1000 });
    return isTablet ? children : null;
  };
  
  //Mobile L Screen - 425px
  export const MobileLScreen = ({ children }) => {
    const isMobileLarge = useMediaQuery({ maxWidth: 759, minWidth: 425 });
    return isMobileLarge ? children : null;
  };
  
  //Mobile M Screen - 375px
  export const MobileMScreen = ({ children }) => {
    const isMobileMedium = useMediaQuery({ maxWidth: 424, minWidth: 375 });
    return isMobileMedium ? children : null;
  };
  
  //Mobile S Screen - 320px
  export const MobileSScreen = ({ children }) => {
    const isMobileSmall = useMediaQuery({ maxWidth: 374, minWidth: 319 });
    return isMobileSmall ? children : null;
  };