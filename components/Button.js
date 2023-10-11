import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, fontSize } from "../constants";

const Button = ({ title, onPress, containerStyle, textStyle }) => {
    return (
        <TouchableOpacity
            style={[styles.button, containerStyle]}
            onPress={onPress}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.red,
        padding: 20,
        width: 140,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        marginVertical: 10,
    },
    text: {
        color: colors.whiteYellow,
        fontSize: fontSize.medium,
    },
});

export default Button;
