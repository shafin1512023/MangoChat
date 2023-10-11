import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { colors, fontSize } from "../constants";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Animated, { BounceIn, FadeOut } from "react-native-reanimated";

const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

const Next = ({ ...props }) => {
    return (
        <TouchableOpacity
            {...props}
            style={{
                backgroundColor: "transparent",
                paddingHorizontal: 20,
                paddingVertical: 10,
                margin: 5,
            }}
        >
            <Text style={{ color: colors.red, fontSize: fontSize.small }}>
                Next
            </Text>
        </TouchableOpacity>
    );
};
const Skip = ({ ...props }) => {
    return (
        <TouchableOpacity
            {...props}
            style={{
                backgroundColor: "transparent",
                paddingHorizontal: 20,
                paddingVertical: 10,
                margin: 5,
            }}
        >
            <Text style={{ color: colors.red, fontSize: fontSize.small }}>
                Skip
            </Text>
        </TouchableOpacity>
    );
};
const Done = ({ ...props }) => {
    return (
        <AnimatedTouchableOpacity
            entering={BounceIn.duration(500).delay(1500)}
            exiting={FadeOut.duration(500).delay(0)}
            {...props}
            style={{
                backgroundColor: colors.red,
                paddingHorizontal: 20,
                paddingVertical: 10,
                margin: 5,
                marginHorizontal: 10,
                borderRadius: 10,
            }}
        >
            <Text
                style={{ color: colors.whiteYellow, fontSize: fontSize.small }}
            >
                Done
            </Text>
        </AnimatedTouchableOpacity>
    );
};
const Dot = ({ ...props }) => {
    return (
        <View
            style={{
                width: 7,
                height: 7,
                borderRadius: 100,
                borderColor: colors.red,
                borderWidth: 2,
                backgroundColor: props.selected ? colors.red : "transparent",
                margin: 2,
            }}
        ></View>
    );
};

const OnboardScreen = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Onboarding
                titleStyles={{ color: colors.red }}
                subTitleStyles={{ color: colors.red }}
                bottomBarColor="transparent"
                bottomBarHighlight={false}
                // bottomBarHeight={50}
                NextButtonComponent={Next}
                SkipButtonComponent={Skip}
                DotComponent={Dot}
                DoneButtonComponent={Done}
                pages={[
                    {
                        backgroundColor: "#FCFFE7",
                        image: (
                            <LottieView
                                source={require("../assets/MangoSalam.json")}
                                style={{ width: 200, height: 200 }}
                                autoPlay
                                loop
                            />
                        ),
                        title: "Welcome to MangoChat",
                        subtitle: "Share your feelings with your loved ones",
                    },
                    {
                        backgroundColor: "#BAD7E9",
                        image: (
                            <LottieView
                                source={require("../assets/MangoSalam.json")}
                                style={{ width: 150, height: 150 }}
                                autoPlay
                                loop
                            />
                        ),
                        title: "Welcome to MangoChat",
                        subtitle: "Share your feelings with your loved ones",
                    },
                    {
                        backgroundColor: "#2B3467",
                        image: (
                            <LottieView
                                source={require("../assets/MangoSalam.json")}
                                style={{ width: 150, height: 150 }}
                                autoPlay
                                loop
                            />
                        ),
                        title: "Welcome to MangoChat",
                        subtitle: "Share your feelings with your loved ones",
                    },
                ]}
            />
        </>
    );
};

export default OnboardScreen;
