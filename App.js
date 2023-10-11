import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from "./screens/LogInScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import OnboardScreen from "./screens/OnboardScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false, animation: "none" }}
            >
                <Stack.Screen name="Onboard" component={OnboardScreen} />
                <Stack.Screen name="LogIn" component={LogInScreen} />
                <Stack.Screen
                    name="CreateAccount"
                    component={CreateAccountScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCFFE7",
        alignItems: "center",
        justifyContent: "center",
    },
});
