import React from 'react';
import  { Image,TouchableOpacity, ImageBackground ,StyleSheet,Text, View} from 'react-native';
image = {uri:"https://i.pinimg.com/736x/04/34/89/043489e7922dabf9902965b964ca04a5.jpg"}; 
function AddMedicineScreen(props) {
    return (
        <ImageBackground source={image}
        style={styles.background}
        >
         <View style={styles.container}>
              

            <Text style={styles.textadd}>
            Add your first medication to get reminder of your medicine
            </Text>
            <TouchableOpacity style={styles.userBTN}>                    
                    <Text style={styles.BTNTxt}
                        >
                        Add Medicine
                    </Text>
                </TouchableOpacity >

                <TouchableOpacity style={styles.skip}>
                <Text style={styles.skipBtn}>
                    Skip
                </Text>
             </TouchableOpacity> 
         </View>   
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        //justifyContent:"flex-start",
        alignItems:"center",        

    },
    skip:{
        paddingLeft:300,
        paddingTop:200
        //position:"absolute",
        
    },
    skipBtn:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:20,
        
    },
    container:{

        flex:1,
        alignItems:"center",
        justifyContent:"center",

    },
    textadd:{

        fontSize:30,
        fontWeight:"bold",
        color:"#fff",
        paddingTop:200,
        paddingLeft:20,
        paddingBottom:50


    },
    userBTN:{
        //backgroundColor:"#D8BFD8",
        //backgroundColor:"#ADD8E6",
        padding:20,
        width:"50%",
        paddingTop:20,
        backgroundColor:"#483D8B",
        borderRadius:10,
    },
    BTNTxt:{
        //color:"#4B0082",
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
    },
     

})    
   
export default AddMedicineScreen;