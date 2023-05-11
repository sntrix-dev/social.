import { Image, StyleSheet, View } from "react-native";
import Avatar from "../../../design/components/Avatar";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../styles/theme";

const StoryThumbnail = ({ profile, cover, active }) => {
  return (
    <View style={styles.wrapper}>
      <Image source={cover} resizeMode="contain" />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.6)"]}
        style={styles.cover}
      />
      <View style={styles.avatar}>
        {active ? (
          <LinearGradient
            colors={["#F62E8E", "#AC1AF0"]}
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar image={profile} size={44} />
          </LinearGradient>
        ) : (
          <Avatar image={profile} size={44} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    overflow: "hidden",
  },
  cover: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  avatar: {
    position: "absolute",
    bottom: 8,
    alignSelf: "center",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    overflow: "hidden",
    backgroundColor: colors.gray + "80",
  },
});

export default StoryThumbnail;
