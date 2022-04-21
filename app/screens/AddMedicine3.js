import React from 'react';
import { ImageBackground,StyleSheet,View,Text, TextInput,TouchableOpacity } from 'react-native';
image = {uri:"https://i.pinimg.com/736x/04/34/89/043489e7922dabf9902965b964ca04a5.jpg"};
function AddMedicine3(props) {
    return (
        <ImageBackground source={image}
        style={styles.backImage}>
            <View style={styles.container}>
                <View style={{//backgroundColor:"#fff",
                            backgroundColor:"#AFEEEE",
                            width:"100%",
                            height:200,
                }}>
                    <Text style={styles.textadd}>
                        What is the type of medicine?
                    </Text>            

                </View>

                

                 <View style={styles.ButtonContainer}>  
          
                        <TouchableOpacity style={styles.pillBTN}>                    
                                <Text style={styles.MedTxt}
                                    >
                                    Pill
                                </Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.PBTN}>                    
                                <Text style={styles.MedTxt}
                                    >
                                    Powder
                                </Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.solBTN}>                    
                                <Text style={styles.MedTxt}
                                    >
                                    Solution
                                </Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.InBTN}>                    
                                <Text style={styles.MedTxt}
                                    >
                                    Inhaler
                                </Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.DropBTN}>                    
                                <Text style={styles.MedTxt}
                                    >
                                    Drop
                                </Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.OtherBTN}>                    
                                <Text style={styles.MedTxt}
                                    >
                                    Other
                                </Text>
                        </TouchableOpacity >
                        
                 </View>
                <View style={styles.ButtonContainer2}>
                <TouchableOpacity style={styles.back}>
                    <Text style={styles.backBtn}>
                      SKIP
                    </Text>
                </TouchableOpacity> 

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
    backImage:{
        flex:1,
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
    
    ButtonContainer:{
        //flexDirection:"row",
        //justifyContent:"space-between",
        flexDirection:"column",
        alignItems:"center",
        top:80,
        
    
       
    },
      
      MedTxt:{
          //color:"#4B0082",
          color:"#fff",
          fontSize:20,
          fontWeight:"bold",
          textAlign:"center",
          
      },
      pillBTN:{
        padding:20,
        width:"50%",
        backgroundColor:"#483D8B",
        position:"absolute",
        borderRadius:50,
        borderColor:"#fff",
        //backgroundColor:"transparent",
        
        //position:"relative",       
                
    },
    PBTN:{
        padding:20,
        width:"50%",
        backgroundColor:"#483D8B",
        top:70,
        position:"absolute",
        borderRadius:50,
      },
    solBTN:{
        padding:20,
        width:"50%",
        backgroundColor:"#483D8B",
        top:140,
        position:"absolute",
        borderRadius:50,
    },
    InBTN:{
        padding:20,
        width:"50%",
        backgroundColor:"#483D8B",
        top:210,
        position:"absolute",
        borderRadius:50,
    },
    DropBTN:{
        padding:20,
        width:"50%",
        backgroundColor:"#483D8B",
        top:280,
        position:"absolute",
        borderRadius:50,
    },
    OtherBTN:{
        padding:20,
        width:"50%",
        backgroundColor:"#483D8B",
        top:350,
        position:"absolute",
        borderRadius:50,
    },
     ButtonContainer2:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%",
    },
      back:{
        paddingTop:500,
                       
    },
    backBtn:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:20,
    },

})
export default AddMedicine3;