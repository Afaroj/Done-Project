import React from "react"
import { Image,TextInput,TouchableOpacity, ImageBackground ,StyleSheet,Text, View } from 'react-native';
image = {uri:"https://i.pinimg.com/736x/04/34/89/043489e7922dabf9902965b964ca04a5.jpg"}; 

//import { View } from "react-native"
function AddMedicine1(props) {
  return (
    <ImageBackground source={image}
        style={styles.background}
        >
         
         <View style={styles.container}>
         <View style={{//backgroundColor:"#fff",
                      backgroundColor:"#AFEEEE",
                       width:"100%",
                       height:200,
        }}>
          <Text style={styles.textadd}>
            How many medicines you would like to add?
            </Text>
            
          </View> 
          <TextInput style={styles.input}
                placeholder="Enter no. of medicine"
                
                >
            </TextInput>
          
          <View style={styles.ButtonContainer}>  
          
            <TouchableOpacity style={styles.nxtBTN}>                    
                    <Text style={styles.NxtTxt}
                        >
                        Next
                    </Text>
                </TouchableOpacity >

                <TouchableOpacity style={styles.back}>
                <Text style={styles.backBtn}>
                    BACK
                </Text>
             </TouchableOpacity> 
             </View>
         </View>   
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{
      flex:1,
      justifyContent:"center",
      alignItems:"flex-start",        

  },
  container:{

    flex:1,
    alignItems:"center",
    justifyContent:"flex-start",

},  
  textadd:{

      fontSize:30,
      fontWeight:"bold",
      //color:"#fff",
      color:"#483D8B",
      paddingTop:50,
      paddingLeft:20,
      paddingBottom:250


  },
  input:{
    width:"50%",
    height:"10%",
    backgroundColor:"#fff",
    padding:5,
    //marginBottom:10,
    position:"relative",
    top:130,

},
  ButtonContainer:{
    //flexDirection:"row",
    //justifyContent:"space-between",
    flexDirection:"column",
    alignItems:"center",
    top:200

   
},
  nxtBTN:{
      //backgroundColor:"#D8BFD8",
      //backgroundColor:"#ADD8E6",
      padding:20,
      width:"50%",
      paddingLeft:30,
      paddingRight:30,
      backgroundColor:"#483D8B",
      //top:300,
      //left:20
  },
  NxtTxt:{
      //color:"#4B0082",
      color:"#fff",
      fontSize:20,
      fontWeight:"bold",
      textAlign:"center",
      
  },
  back:{
    paddingLeft:300,
    paddingTop:150
    //position:"absolute",
    
},
backBtn:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:20,
},


})    
 

export default AddMedicine1;