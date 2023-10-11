import React from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import LottieView from "lottie-react-native";
import styles from "./CreateAccountScreenStyle";
import Button from "../components/Button";
import { colors } from "../constants";
import Animated, { FadeIn } from "react-native-reanimated";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const CreateAccountScreen = ({ navigation }) => {
    return (
        <Animated.View style={styles.container}>
            <LottieView
                style={styles.lottie}
                source={require("../assets/MangoSalam.json")}
                autoPlay
                loop
            />
            <Animated.Text style={styles.logo} sharedTransitionTag="Logo">
                MangoChat
            </Animated.Text>
            <View style={styles.form}>
                <AnimatedTextInput
                    entering={FadeIn.duration(500).delay(100)}
                    style={styles.input}
                    placeholder="Full Name"
                    keyboardType="email-address"
                    placeholderTextColor={colors.darkBlue}
                />
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
                <Button title="Create" />
            </View>
            <View style={styles.loginScreenBtnContainer}>
                <Text>If you have an account already</Text>
                <Button
                    title="Log In"
                    onPress={() => navigation.navigate("LogIn")}
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

export default CreateAccountScreen;
