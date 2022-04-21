import React , { useState } from 'react';
import { ScrollView,
    ImageBackground,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity } from 'react-native';
image = {uri:"https://i.pinimg.com/736x/04/34/89/043489e7922dabf9902965b964ca04a5.jpg"};


function AddMedicine2(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
    console.log(enteredGoal);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

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
                    Which medicine you would like to add?
                    </Text>            
                </View>

            <ScrollView>
                <View style={styles.screen}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Type name of Medicine"
                            style={styles.input}
                            onChangeText={goalInputHandler}
                            value={enteredGoal}
                        />
                        
                         <TouchableOpacity  style={styles.AddBTN} onPress={addGoalHandler}>                    
                                <Text style={styles.ATxt}
                                    >
                                    ADD
                                </Text>
                        </TouchableOpacity >
                    </View>
                   
                        <View>
                        
                        {courseGoals.map((goal) =>(
                             <View 
                             key={goal} 
                             style={styles.listItem}>
                                  <Text>{goal}</Text> 
                              </View>) )}
                                 
                    </View>
                    </View>


                        <View style={styles.ButtonContainer}>  
                
                                <TouchableOpacity style={styles.createBTN}>                    
                                        <Text style={styles.CreateTxt}
                                            >
                                            Create
                                        </Text>
                                </TouchableOpacity >

                                <TouchableOpacity style={styles.back}>
                                    <Text style={styles.backBtn}>
                                        BACK
                                    </Text>
                                </TouchableOpacity> 
                        </View>
                 </ScrollView>        

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
    screen: {
        padding: 50,
        paddingLeft:20,
        paddingRight:20,
      },
      inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        fontSize:20,
        color:"#fff"
      },
    AddBTN:{
        padding:10,
        //width:"10%",
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:"#6495ED",
        borderRadius:10,
        borderWidth:2,
        borderColor:"#483D8B"
    },
    ATxt:{
        //color:"#4B0082",
        color:"black",
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        
    },
    listItem:{
        color:"#fff",
        padding:10,
        //backgroundColor:"skyblue",
        backgroundColor:"transparent",
        borderColor:"skyblue",
        borderWidth:1,
        marginVertical:5

    },
    
    ButtonContainer:{
        //flexDirection:"row",
        //justifyContent:"space-between",
        flexDirection:"column",
        alignItems:"center",
        top:80
    
       
    },
      createBTN:{
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
      CreateTxt:{
          //color:"#4B0082",
          color:"#fff",
          fontSize:20,
          fontWeight:"bold",
          textAlign:"center",
          
      },
      back:{
        paddingLeft:300,
        paddingTop:100
        //position:"absolute",
        
    },
    backBtn:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:20,
    },

    

})
export default AddMedicine2;