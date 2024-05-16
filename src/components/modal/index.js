import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'

export function ModalPassword({password, handleClose}){

    async function handleCopyPassword(){
        await Clipboard.setStringAsync(password)
        alert("Senha copiada")
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>
                
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content:{
        backgroundColor: "#FFF",
        width: "85%",
        paddingBottom: 24,
        paddingTop: 24,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    innerPassword:{
        backgroundColor: "#0E0E0E",
        width: "90%",
        padding: 14,
        borderRadius: 8
    },
    text:{
        color: "#FFF",
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold"
    },
    buttonArea:{
        flexDirection: "row", //itens um ao lado do outro
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between" //coloca um item em cada canto nos extremos
    },
    button:{
        flex: 1,
        alignItems: "center",
        marginBottom: 14,
        marginTop: 14,
        padding: 8
    },
    buttonSave:{
        backgroundColor: "#392DE9",
        borderRadius: 8
    },
    buttonSaveText:{
        color: "#FFF",
        fontWeight: "bold"
    }
})