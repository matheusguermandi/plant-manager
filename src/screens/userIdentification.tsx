import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

import { Button } from '../components/Button';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function UserIdentification() {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.form}>
                        <Text style={styles.emojiForm}>
                            {isFilled ? '😄' : '😀'}
                        </Text>
                        <Text style={styles.textForm}>
                            Como podemos chamar você?
                        </Text>
                        <TextInput 
                            placeholder="Digite seu nome aqui ..."
                            style={[styles.inputForm, (isFocused || isFilled) && { borderColor: colors.green }]}
                            onBlur={handleInputBlur} 
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                            />

                        <View style={styles.buttonForm}>
                            <Button title="Confirmar" />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 60,
        paddingHorizontal: 15
    },
    form: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40
    },
    emojiForm: {
        fontSize: 55,
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
    buttonForm: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
});