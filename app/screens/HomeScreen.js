import React from 'react';
import  { Image,
    TouchableOpacity, 
    ImageBackground ,
    StyleSheet,
    Text, 
    View,
    TouchableHighlight
} from 'react-native';
image = {uri:"https://i.pinimg.com/736x/04/34/89/043489e7922dabf9902965b964ca04a5.jpg"}; 

function HomeScreen(props) {
    return (
        <ImageBackground source={image}
        style={styles.background}>
            <TouchableOpacity style={styles.B1}> 
                <Image style={styles.imageButtonlogo} 
                //source={{uri:"https://png.pngtree.com/png-clipart/20200710/original/pngtree-cross-plus-medical-logo-icon-design-template-png-image_4242152.jpg"}}
                source={{uri:"https://image.similarpng.com/thumbnail/2021/06/Medical-pharmacy-logo-design-template-on-transparent-background-PNG.png"}}
                />
                <Text style= { styles.B1Text}>Add Medicine</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.B2}>
                <Image style={styles.imageButtonlogo}
                 source={{uri:"https://i.pinimg.com/originals/30/cf/41/30cf412ed2a24ba51e5225be852de657.png"}}
                />
                <Text style= { styles.B1Text}>
                    View Medicine
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.B3}>
            <Image style={styles.imageButtonlogo1}
            //source={{uri:"https://www.clipartmax.com/png/middle/173-1730499_we-provide-your-business-timely-reminders-on-the-reports-fire-clock-logo.png",}}
            //source={{uri:"https://p.kindpng.com/picc/s/279-2799462_clock-and-calendar-image-principles-of-design-hierarchy.png"}}
            source={{uri:"https://img.freepik.com/free-vector/calendar-deadline-with-check-clock-flat-design_115464-604.jpg"}}
            />
                <Text style= { styles.B1Text}>
                    Add Reminder
                </Text>
               
            </TouchableOpacity>

            <TouchableOpacity style={styles.B4}>
                <Image style={styles.imageButtonlogo}
                 //source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-TruUMhQHpSY5n6no8Hi_7Um5uakNaoKZjAJEFO1p07hhaN2yO0cgBSjtUYgGatGU30&usqp=CAU"}}
                 source={{uri:"https://www.vscnl.ca/wp-content/uploads/2020/06/Dr-Tomoko-Susuki-Avatar-FA.png"}}
                />
                <Text style= { styles.B1Text}>
                    Add Doctor's Appointment
                </Text>
            </TouchableOpacity>
            

        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        //justifyContent:"flex-end",
        alignItems:"center",
        justifyContent:"flex-start"
        

    },
    B1:{
        padding:20,
        marginTop: 100,
        width:"60%",
        borderRadius:10,
        backgroundColor:"#191970",
        flexDirection:"row",
        justifyContent:"space-between",        
          
    },
    B2:{
        padding:20,
        marginTop: 50,
        width:"60%",
        borderRadius:10,
        backgroundColor:"#DC143C",
        flexDirection:"row",
        justifyContent:"space-between",         
          
    },
    B3:{
        padding:20,
        marginTop: 50,
        width:"60%",
        borderRadius:10,
        backgroundColor:"#008080",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    B4:{
        padding:20,
        marginTop: 50,
        width:"60%",
        borderRadius:10,
        backgroundColor:"#FFA500",
        //borderColor:"rgb(255,255,255)",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    B1Text:{
        fontSize:20,
        //color: "#483D8B",
        color:"white",
        textAlign:"center",
        fontWeight:"bold",
        textTransform:"uppercase",
        textShadowColor:"rgb(255,255,255)",
    },
    imageButtonlogo:{
        //marginTop:10,
        width: 40,
        height: 40,
    },
    imageButtonlogo1:{
        //marginTop:10,
        width: 35,
        height: 35,
    },
    imageButton: {
        marginTop:10,
        
        width: 60,
        height: 60,
      },
})    
export default HomeScreen;