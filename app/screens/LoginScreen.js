import React from 'react';
import {StyleSheet,
        Text,
        View,
        TextInput,
        TouchableOpacity,ImageBackground} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native'; 
//import { createStackNavigator } from 'react-navigation-stack';
//import { createStackNavigator, createAppContainer } from 'react-navigation';   

//image = {uri:"https://i.pinimg.com/originals/59/11/cd/5911cda1f1ae980b26ca367af3197dfd.jpg"};
image = {uri:"https://i.pinimg.com/736x/04/34/89/043489e7922dabf9902965b964ca04a5.jpg"};

function LoginScreen(props) {
    return (
        <ImageBackground source={image}
        style={styles.Bk}>
        <View style={styles.container}>
            <Text style={styles.background}>Login page</Text>
            <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="Username">

            </TextInput>
            
            <TextInput 
                style={styles.input}
                placeholder="Password"
                secureTextEntry>
                
            </TextInput>
            </View>
            <View style={styles.ButtonContainer}>

                <TouchableOpacity style={styles.userBTN}>                    
                    <Text style={styles.BTNTxt}

                        onPress={alert("Successfully Logged in")}>
                        Login
                    </Text>
                </TouchableOpacity >
                
                <TouchableOpacity style={styles.userBTN}>
                    <Text style={styles.BTNTxt}
                          onPress={alert("Please Create an account to Log In")}>
                        SignUp
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </ImageBackground>
    ); 
}

const styles = StyleSheet.create({
    container:{
        flex:1,        
        //backgroundColor:"#20B2AA",
        alignItems:"center",
        justifyContent:"center",
    },
    Bk:{
        flex:1,
    },
    background:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        margin:10,
        color:"white",
        justifyContent:"center",

        alignItems:"center",
        

    },
    //input:{
      //  width:"90%",
        //backgroundColor:"#fff",
        //padding:15,
        //marginBottom:10,
    //},
    input: {
        width: 330,
        //borderColor: 'white',
        borderColor:'#7FFFD4',
        borderWidth: 2,
        borderRadius:10,
        padding: 15,
        fontSize:20,
        color:"#fff",
        marginBottom:10
      },
    ButtonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%",
    },
    userBTN:{
        backgroundColor:"#483D8B",
        //backgroundColor:"#ADD8E6",
        padding:15,
        width:"45%",
        borderRadius:10,
    },
    BTNTxt:{
        color:"#fff",
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold"
    },
     
    
 
})
export default LoginScreen;