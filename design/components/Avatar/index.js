import { LinearGradient } from "expo-linear-gradient";
import { Image, View, StyleSheet } from "react-native";

const Avatar = ({ image, size = 40 }) => (
  <Image source={image} style={styles.profile(size)} resizeMode="contain" />
);

export default Avatar;

const styles = StyleSheet.create({
  profile: (size) => ({
    width: size,
    borderRadius: 999,
    height: size,
  }),
});
