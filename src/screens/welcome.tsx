import React from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import wateringImg from '../assets/watering.png';
import { Feather } from '@expo/vector-icons';

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Cuide de suas plantinhas de forma fácil
            </Text>

            <Image source={wateringImg} style={styles.image} resizeMode="contain"></Image>

            <Text style={styles.subtitle} >
                Para não esquecer de regar suas plantas, nós cuidamos de lembrar você sempre que for necessário.
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Feather name="chevron-right" style={styles.buttonIcon} />
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 60,
        paddingHorizontal: 25
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading 
    },
    image: {
        marginVertical: 20,
        height: Dimensions.get('window').width * 0.7
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text 
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 56,
        width: 56
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 25
    }
});
