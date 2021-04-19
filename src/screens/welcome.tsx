import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../styles/colors';

import wateringImg from '../assets/watering.png'

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Cuide de suas plantas de forma fácil :)
            </Text>

            <Image source={wateringImg} ></Image>

            <Text style={styles.subtitle} >
                Para não esquecer de regar suas plantas, nós cuidamos de lembrar você sempre que for necessário.
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.textButton}>
                    ...
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 60,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.heading,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 56,
        width: 56
    },
    textButton: {
        color: colors.white,
        fontSize: 20
    }
});
