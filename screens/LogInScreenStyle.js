import { StyleSheet } from "react-native";
import { colors, fontSize } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.whiteYellow,
    },
    lottie: {
        width: 140,
        height: 140,
        resizeMode: "contain",
    },
    logo: {
        fontSize: fontSize.xLarge,
        fontWeight: "900",
        color: colors.red,
        margin: 20,
    },
    form: {
        width: "100%",
        alignItems: "center",
        marginVertical: 20,
    },
    input: {
        width: "70%",
        height: 60,
        backgroundColor: colors.lightBlue,
        paddingHorizontal: 30,
        borderRadius: 100,
        marginVertical: 10,
        color: colors.darkBlue,
    },
    createNewAccountBtnContainer: {
        alignItems: "center",
    },
});

export default styles;
