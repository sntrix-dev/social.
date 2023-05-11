import { Tabs } from "expo-router";
import { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { colors } from "../styles/theme";
import {
  ProfileIcon,
  AddIcon,
  FeedsIcon,
  NotificationIcon,
  SearchIcon,
} from "../design/icons";

import { LinearGradient } from "expo-linear-gradient";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    HKRegular: require("../assets/fonts/HKGrotesk-Regular.otf"),
    HKSemiBold: require("../assets/fonts/HKGrotesk-SemiBold.otf"),
    HKBold: require("../assets/fonts/HKGrotesk-Bold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  const IconWrapper = ({ icon, focused = true, children }) => {
    return <View style={styles.iconWarapper(focused)}>{children}</View>;
  };

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.black,
          shadowColor: "#323436",
          shadowOffset: {
            height: 12,
          },
          border: "none",
          // paddingVertical: 10,
          height: 64,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: colors.dark,
        paddingTop: 32,
        paddingHorizontal: 24,
      }}
      onLayout={onLayoutRootView}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <IconWrapper focused={focused}>
                <FeedsIcon size={1.2} />
              </IconWrapper>
            );
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <IconWrapper focused={focused}>
                <SearchIcon size={1.2} />
              </IconWrapper>
            );
          },
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <LinearGradient
                colors={["#F72E8E", "#AC1AF0"]}
                style={styles.post}
              >
                <AddIcon size={1.5} />
              </LinearGradient>
            );
          },
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <IconWrapper focused={focused}>
                <NotificationIcon size={1.2} />
              </IconWrapper>
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <IconWrapper focused={focused}>
                <ProfileIcon size={1.2} />
              </IconWrapper>
            );
          },
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  iconWarapper: (active) => ({
    opacity: active ? 1 : 0.5,
  }),
  post: {
    borderRadius: 999,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Layout;
