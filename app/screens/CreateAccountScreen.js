import React from 'react';
//const axios = require('axios');

import {StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,ImageBackground} from 'react-native';
    
//image ={uri:"https://www.teahub.io/photos/full/364-3640659_ombre-wallpapers-iphone-x.jpg"};    
//image={uri:"https://i.pinimg.com/originals/59/11/cd/5911cda1f1ae980b26ca367af3197dfd.jpg"};
//image = {uri:"https://i.pinimg.com/originals/59/11/cd/5911cda1f1ae980b26ca367af3197dfd.jpg"};
image = {uri:"https://i.pinimg.com/736x/04/34/89/043489e7922dabf9902965b964ca04a5.jpg"};
function CreateAccountScreen(props) {

    return (
        <ImageBackground source={image}
           style={styles.BackgroundColor}>

        <View style={styles.container}>
            <Text style={styles.background}>Create Account</Text>
            <TextInput 
                style={styles.input}
                placeholder="E-mail / Phone no. :">

            </TextInput>
            
            <TextInput 
                style={styles.input}
                placeholder="Password"
                secureTextEntry>
                
            </TextInput>

            <TextInput 
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry>
                
            </TextInput>
            
            <View style={styles.ButtonContainer}>

                <TouchableOpacity style={styles.userBTN}>                    
                    <Text style={styles.BTNTxt}
                        onPress={alert("Account created Successfully !!")
                        }>
                        Create Account
                    </Text>
                </TouchableOpacity >
                
                
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
    BackgroundColor:{
        flex:1,
        
    },
    background:{
        fontSize:30,
        textAlign:"center",
        marginBottom:50,
        color:"white",
        justifyContent:"center",
        fontWeight:"bold",
        alignItems:"center",
        

    },
    /*input:{
        width:"90%",
        backgroundColor:"#fff",
        padding:15,
        marginBottom:10,
    },*/
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
        //justifyContent:"space-between",
        justifyContent:"center",
        width:"90%",
    },
    userBTN:{
        backgroundColor:"#483D8B",
        //backgroundColor:"#ADD8E6",
        padding:20,
        width:"50%",
        height:"100%",
        marginTop:15,
        borderRadius:10

    },
    BTNTxt:{
        fontSize:18,
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold",
        
    },
     
    
 
})
export default CreateAccountScreen;