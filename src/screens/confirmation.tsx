import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

import { Button } from "../components/Button";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export function Confirmation() {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.emoji}>
                😄
            </Text>
            <Text style={styles.text}>
                Agora vamos começar a cuidas das suas plantinhas com muito cuidado!
                </Text>
            <View style={styles.footer}>
                <Button title="Começar" />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
        paddingHorizontal: 50
    },
    text: {
        fontSize: 20,
        fontFamily: fonts.text,
        textAlign: 'center',
        color: colors.heading,
        paddingVertical: 40
    },
    emoji: {
        fontSize: 55
    },
    footer: {
        width: '100%',
        paddingHorizontal: 20,
    }
});