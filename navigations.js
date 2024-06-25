import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import MyCardsScreen from "./screens/MyCardsScreen";
import StatisticsScreen from "./screens/StatisticsScreen";
import { Settings, Text, View } from "react-native";
import SettingsScreen from "./screens/SettingsScreen";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const primaryColor = "#0066ff";
const greyColor = "#8b8b94";

export default function Navigations() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#ffffff",
            height: 90,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign
                  name="home"
                  size={26}
                  color={focused ? primaryColor : greyColor}
                />
                <Text
                  style={{
                    color: focused ? primaryColor : greyColor,
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="MyCards"
          component={MyCardsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome
                  name="credit-card"
                  size={26}
                  color={focused ? primaryColor : greyColor}
                />
                <Text
                  style={{
                    color: focused ? primaryColor : greyColor,
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  My Cards
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="pie-chart"
                  size={26}
                  color={focused ? primaryColor : greyColor}
                />
                <Text
                  style={{
                    color: focused ? primaryColor : greyColor,
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Statistics
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="settings"
                  size={26}
                  color={focused ? primaryColor : greyColor}
                />
                <Text
                  style={{
                    color: focused ? primaryColor : greyColor,
                    fontSize: 15,
                    fontWeight: "500",
                  }}
                >
                  Settings
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
