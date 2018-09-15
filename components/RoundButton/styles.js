import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        borderRadius: 5,
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonTitle: {
        fontSize: 18
    },
    buttonBorder: {
        width: 76,
        height: 76,
        borderRadius: 38,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1
    },
    buttonRow: {
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "space-between",
        marginTop: 80,
        marginBottom: 30
    }
})

