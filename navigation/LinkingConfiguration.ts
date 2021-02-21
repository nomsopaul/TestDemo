import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              HomeScreen: "home",
            },
          },
          TabTwo: {
            screens: {
              ChatScreen: "chat",
            },
          },
          TabThree: {
            screens: {
              LocationScreen: "location",
            },
          },
          TabFour: {
            screens: {
              ProfileScreen: "profile",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
