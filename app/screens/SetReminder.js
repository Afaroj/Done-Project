import React from 'react';
import { 
    ImageBackground,
    StyleSheet,
    View,
    Text,
    TouchableOpacity } from 'react-native';
image = {uri:"https://i.pinimg.com/736x/04/34/89/043489e7922dabf9902965b964ca04a5.jpg"};

function SetReminder(props) {
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
                        Which type of reminder you would like to add?
                    </Text>            

                </View>

                

                 <View style={styles.ButtonContainer}>  
          
                        <TouchableOpacity style={styles.pillBTN}>                    
                                <Text style={styles.MedTxt}
                                    >
                                    One time
                                </Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.PBTN}>                    
                                <Text style={styles.MedTxt}
                                    >
                                    Recurring
                                </Text>
                        </TouchableOpacity >

                       
                        
                        
                 </View>
                <View style={styles.ButtonContainer2}>
                

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

        fontSize:28,
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
        borderColor:"#483D8B"
        
        //position:"relative",       
                
    },
    PBTN:{
        padding:20,
        width:"50%",
        backgroundColor:"#483D8B",
        top:100,
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
        marginLeft:280
                       
    },
    backBtn:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:20,
    },

})
export default SetReminder;