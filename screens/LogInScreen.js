import React from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./LogInScreenStyle";
import Button from "../components/Button";
import { colors } from "../constants";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const LogInScreen = ({ navigation }) => {
    return (
        <Animated.View entering={FadeIn.duration(800)} style={styles.container}>
            <LottieView
                style={styles.lottie}
                source={require("../assets/MangoSalam.json")}
                autoPlay
                loop
            />
            <Animated.Text
                entering={FadeInUp.duration(800).delay(500)}
                style={styles.logo}
                sharedTransitionTag="Logo"
            >
                MangoChat
            </Animated.Text>
            <View style={styles.form}>
                <AnimatedTextInput
                    sharedTransitionTag="Email"
                    style={styles.input}
                    placeholder="Email or Phone Number"
                    keyboardType="email-address"
                    placeholderTextColor={colors.darkBlue}
                />
                <AnimatedTextInput
                    sharedTransitionTag="pass"
                    style={styles.input}
                    placeholder="Password"
                    keyboardType="name-phone-pad"
                    placeholderTextColor={colors.darkBlue}
                />
                <Button title="Log In" />
            </View>
            <View style={styles.createNewAccountBtnContainer}>
                <Text>If you don't have an account</Text>
                <Button
                    title="Create One"
                    onPress={() => navigation.navigate("CreateAccount")}
                    containerStyle={{
                        backgroundColor: "transparent",
                        padding: 0,
                        marginVertical: 0,
                    }}
                    textStyle={{ color: colors.red }}
                />
            </View>
        </Animated.View>
    );
};

export default LogInScreen;
