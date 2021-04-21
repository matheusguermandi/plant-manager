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
            <Text style={styles.title}>
                Prontinho
            </Text>
            <Text style={styles.subtitle}>
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
    emoji: {
        fontSize: 65
    },
    title: {
        fontSize: 25,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        paddingVertical: 30
    },
    subtitle: {
        fontSize: 20,
        fontFamily: fonts.text,
        textAlign: 'center',
        color: colors.heading,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 40
    }
});