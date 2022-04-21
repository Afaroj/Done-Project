import React from 'react';
import axios from 'axios';
import {StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,ImageBackground} from 'react-native';
    
///image= {uri:"https://i.pinimg.com/originals/59/11/cd/5911cda1f1ae980b26ca367af3197dfd.jpg"};    
image = {uri:"https://i.pinimg.com/736x/04/34/89/043489e7922dabf9902965b964ca04a5.jpg"};

function UserInfoScreen(props) {
    const GetData= ()=>{
        axios({
            method: 'post',
            url: 'localhost:3000/api/auth/signup',
            data: {
              firstName: 'First Name :',
              lastName: 'Last Name :',
              userAge: 'Age :',
              phoneNo:'Phone no. :',
              emailAddress:'E-mail :'
              

            }
          });
    };

    return (
        <ImageBackground source={image}
        style={styles.Bk}>
        <View style={styles.container}>
            <Text style={styles.background}>User Information</Text>
            <TextInput 
                style={styles.input}
                placeholder="First Name :"
                >

            </TextInput>

            <TextInput 
                style={styles.input}
                placeholder="Last Name :">

            </TextInput>
            
            <TextInput 
                style={styles.input}
                keyboardType="number-pad"
                maxLength={2}
                placeholder="Age :">
                
            </TextInput>

            <TextInput 
                style={styles.input}
                keyboardType="number-pad"
                maxLength={10}
                placeholder="Phone no. :">
                
            </TextInput>

            <TextInput 
                style={styles.input}
                keyboardType="number-pad"
                maxLength={10}
                placeholder="Dependent Phone no. :">
                
            </TextInput>

            <TextInput 
                style={styles.input}
                keyboardType="email-address"
                placeholder="E-mail :">
                
            </TextInput>
            
            <View style={styles.ButtonContainer}>

                <TouchableOpacity style={styles.userBTN}>                    
                    <Text style={styles.BTNTxt}
                        onPress={GetData}>
                        Submit
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
        marginBottom:25,
        

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
        padding:15,
        width:"45%",
        borderRadius:10,
        marginTop:20
    },
    BTNTxt:{
        fontSize:18,
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold"
    },
     
    
 
})
export default UserInfoScreen;