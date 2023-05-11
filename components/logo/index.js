import { Image, StyleSheet } from "react-native";
import logo from "../../assets/images/logo.png";

const Logo = () => {
  return <Image source={logo} style={styles.logoImage} resizeMode="contain" />;
};

const styles = StyleSheet.create({
  logoImage: {
    width: 100,
    overflow: "visible",
  },
});

export default Logo;
