import {useState} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export function Home(){
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword(){
    let password = "";
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password) //troca o valor da senha
    setModalVisible(true) //troca o valor da visibilidade do modal
  }

  return(
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{height: 44}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#BBBBBB' //cor da barrinha a direita da bolinha
          minimumTrackTintColor='#FF2626' //cora da barrinha a esquerda da obolinha 
          thumbTintColor='#392DE9'
          value={size} //valor defaut no slider
          
          //troca o texto do valor de caracteres .toFixed para definir o número de casas decimais
          onValueChange={(value)=>setSize(value.toFixed(0))} 
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: "center", //centraliza verticalmenre 
    alignItems: "center" //centraliza horizontalmente
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 6
  },
  button:{
    backgroundColor: "#392DE9",
    width: "80%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 6
  },
  buttonText:{
    color: "#FFF",
    fontSize: 18
  },
  title:{
    fontSize: 26,
    fontWeight: "bold"
  }
})