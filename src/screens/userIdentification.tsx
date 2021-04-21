import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function UserIdentification() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.emojiForm}>
                    😄
                </Text>
                <Text style={styles.textForm}>
                    Como podemos chamar você?
                </Text>
                <TextInput style={styles.inputForm} placeholder="Digite seu nome aqui ..."/>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 60,
        paddingHorizontal: 25
    },
    form: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40
    },
    emojiForm: {
        fontSize: 60,
    },
    textForm: {
        fontSize: 35,
        textAlign: 'center',
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 40
    },
    inputForm: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        textAlign: 'center',
    },
});