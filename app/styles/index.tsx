import { Platform, StyleSheet } from "react-native";
import { colors } from "../constants/theme";

/* Add global styles here */
export const commonStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        flex: 1,
        backgroundColor: colors.primaryColor,
    },
    text: {
        fontSize: 14,
        color: colors.brownColor
    }
})