import React from 'react';
import {Image,TouchableOpacity, ImageBackground ,StyleSheet,Text, View,Modal} from 'react-native';



//image = { uri: "https://reactjs.org/logo-og.png" };
//image={uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4cTbSkOqyHvy4s4wqCgB5vJXb4yoK1hFoyA&usqp=CAU"}
image = {uri:"https://st3.depositphotos.com/26248004/i/600/depositphotos_324205218-stock-photo-blue-paper-background-geometric-figures.jpg"};
//image = {uri:"https://wallpaperaccess.com/full/6944997.jpg"}; 
//image = {uri:"https://i.pinimg.com/originals/59/11/cd/5911cda1f1ae980b26ca367af3197dfd.jpg"};


function WelcomeScreen(props) {
    return (
        <Modal   animationType="slide" 
                      style={styles.ModalS}
              > 
        <ImageBackground source={image}
           style={styles.background}>
               
           <View style={styles.logoContainer}>
              <Image style={styles.logo}
               //source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWkbJKmoq4wGyH4BgLmqCxizeJ9FSK43toA&usqp=CAU"}}
               source={{ uri:"https://cdn-icons-png.flaticon.com/512/212/212315.png"}}
               />
              
              <Text style={styles.Head}>MediTrack</Text>
            </View>    
            <View style={styles.ButtonContainer}>
                <TouchableOpacity style={styles.userBTN}>
                    <Text style={styles.BTNTxt}>
                        Next 
                    </Text>
                </TouchableOpacity>
            </View>  

        
        
        </ImageBackground>
        </Modal>
       
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        //justifyContent:"flex-end",
        alignItems:"center",
        justifyContent:"flex-end"

    },
    Head:{
        fontSize:30,
        textAlign:"center",
        margin:15,
        color:"#191970",
        justifyContent:"center",
        fontWeight:"bold",
        alignItems:"center",
        

    },
    logoContainer:{
        position:"absolute",
        top:100,
        alignItems:"center",
    },
    logo: {
        width: 150,
        height: 150,
        
      },
      ButtonContainer:{
        flexDirection:"row",
        //justifyContent:"space-between",
        justifyContent:"center",
        width:"90%",
    },
      userBTN:{
        backgroundColor:"#483D8B",
        //backgroundColor:"#008080",
        padding:15,
        width:"50%",
        bottom:30,
        borderRadius:10
    },
    BTNTxt:{
        color:"#fff",
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold"
    },
    /*container:{
        //flex:1,
        
        //backgroundColor:"dodgerblue",
        alignItems:"center",
        justifyContent:"center",
    },*/
    
    loginButton:{
        width:"100%",
        height:70,
        backgroundColor:"#fc5c65",
      

    },
    
    registerButton:{
        width:"100%",
        height:70,
        backgroundColor:"#4ecdc4",
      

    },
    
})

export default WelcomeScreen;