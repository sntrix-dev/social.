import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Tabs } from "expo-router";
import { colors } from "../styles/theme";
import Logo from "../components/logo";
import { MessageIcon } from "../design/icons";
import story1 from "../assets/images/stories/story-1.png";
import story2 from "../assets/images/stories/story-2.png";
import story3 from "../assets/images/stories/story-3.png";
import user1 from "../assets/images/profiles/user-1.png";
import user2 from "../assets/images/profiles/user-2.png";
import user3 from "../assets/images/profiles/user-3.png";
import { StoryThumbnail } from "../components/story";

const storiesData = [
  {
    user: {
      name: "user1",
      image: user1,
      stories: [
        {
          cover: story1,
          seen: false,
        },
      ],
    },
  },
  {
    user: {
      name: "user2",
      image: user2,
      stories: [
        {
          cover: story2,
          seen: false,
        },
      ],
    },
  },
  {
    user: {
      name: "user1",
      image: user3,
      stories: [
        {
          cover: story3,
          seen: false,
        },
      ],
    },
  },
  {
    user: {
      name: "user2",
      image: user2,
      stories: [
        {
          cover: story2,
          seen: false,
        },
      ],
    },
  },
  {
    user: {
      name: "user3",
      image: user3,
      stories: [
        {
          cover: story3,
          seen: true,
        },
      ],
    },
  },
  {
    user: {
      name: "user3",
      image: user3,
      stories: [
        {
          cover: story3,
          seen: true,
        },
      ],
    },
  },
  {
    user: {
      name: "user3",
      image: user3,
      stories: [
        {
          cover: story3,
          seen: true,
        },
      ],
    },
  },
];

const Feeds = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Logo />
          <TouchableOpacity style={styles.messageBtnWrapper}>
            <MessageIcon />
          </TouchableOpacity>
        </View>
        {/* Stories */}
        <FlatList
          data={storiesData}
          renderItem={({ item }) => (
            <StoryThumbnail
              active={!item.user.stories[0].seen}
              cover={item.user.stories[0].cover}
              profile={item.user.image}
            />
          )}
          horizontal
          scrollEnabled
          style={{
            paddingVertical: 16,
          }}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  messageBtnWrapper: {
    borderColor: colors.white,
    borderRadius: 999,
    borderWidth: 1,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Feeds;
