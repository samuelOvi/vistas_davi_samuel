import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Button from "../component/Button";

export default function PantallaRecuperarClave() {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');
    const navigation = useNavigation();

    const recuperarClave = () => {
        if (nombreUsuario.trim() === '' || contraseña.trim() === '' || confirmarContraseña.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (contraseña !== confirmarContraseña) {
            alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
            return;
        }

        if (contraseña.trim().length < 5) {
            alert('La contraseña debe tener al menos 5 caracteres.');
            return;
        }

      
        navigation.navigate('Counter');
    };

    return (
        <View style={styles.contenedor}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.titulo}>Recuperar Contraseña</Text>
            <TextInput
                style={styles.entrada}
                value={nombreUsuario}
                onChangeText={setNombreUsuario}
                placeholder="Nombre de Usuario"
            />
            <TextInput
                style={styles.entrada}
                value={contraseña}
                onChangeText={setContraseña}
                placeholder="Nueva Contraseña"
                secureTextEntry
            />
            <TextInput
                style={styles.entrada}
                value={confirmarContraseña}
                onChangeText={setConfirmarContraseña}
                placeholder="Confirmar Nueva Contraseña"
                secureTextEntry
            />
            <Button
                onPress={recuperarClave}
                buttonStyle={styles.boton}
                textStyle={styles.textoBoton}
            >
                Recuperar
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    entrada: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    boton: {
        borderRadius: 20,
        backgroundColor: '#52dee5',
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    textoBoton: {
        color: 'white',
        fontSize: 16,
    },
});
