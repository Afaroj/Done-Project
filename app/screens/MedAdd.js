import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Modal,ImageBackground
  } from 'react-native';
  //image = {uri:"https://i.pinimg.com/736x/04/34/89/043489e7922dabf9902965b964ca04a5.jpg"};
image = {uri:"https://media.istockphoto.com/photos/dark-blue-de-focused-blurred-motion-abstract-background-picture-id1216628493?k=20&m=1216628493&s=612x612&w=0&h=PGifdN4ADl0gs6KuDFMbh7R4BgoxtJh-5ZVYXvgfHXw="};

function MedAdd(props) {
  //Goal Input
  const [enteredGoal, setEnteredGoal] = useState(' ');

  const [isAddMode, setIsAddMode] = useState(false);

  const [courseGoals, setCourseGoals] = useState([]);
  //new code
  
  //Goal Input
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
    setIsAddMode(false);
    setEnteredGoal('');
  };
  //For removing Goal Item 
  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  //for cancel button
  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (      


            <View style={styles.screen}>
              <View style={{//backgroundColor:"#fff",
                            //backgroundColor:"#AFEEEE",                                                   

                }}>
                <Text style={styles.textadd}>
                    Which medicine you would like to add?
                    </Text>            
                </View>
              <TouchableOpacity onPress={() => setIsAddMode(true)}
                                style={styles.MBtn}
               >
                <Text style={styles.MTxt}>
                  Add New Medicine
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setIsAddMode(true)}
                                style={styles.MBtn}
               >
                <Text style={styles.MTxt}>
                  Add New Medicine by voice
                </Text>
              </TouchableOpacity>
              
                <TouchableOpacity style={styles.createBTN}>                    
                        <Text style={styles.CreateTxt}
                          >
                              Create
                        </Text>
                </TouchableOpacity >
              
            
              <Modal  visible = {isAddMode} animationType="slide" 
                      style={styles.ModalS}
              > 
                
                  <View style={styles.inputContainer}> 
                    
                    <TextInput        //Goal Input 

                      placeholder="Medicine Name"
                      style={styles.input}
                      onChangeText={goalInputHandler}
                      value={enteredGoal}
                      
                    />
                    <View style={styles.buttonContainer}>
                          <TouchableOpacity onPress={cancelGoalAdditionHandler}
                                          style={styles.CancelBtn}
                          >
                            <Text style={styles.CTxt}> CANCEL </Text> 
                          </TouchableOpacity>

                          <TouchableOpacity onPress={addGoalHandler.bind(this, enteredGoal)}
                                            style={styles.AddBtn}
                          >
                            <Text style={styles.ATxt}>
                              ADD
                            </Text>
                          </TouchableOpacity>
                          
                    </View>
                  </View>
              </Modal> 
              <FlatList   //List
                keyExtractor={(item, index) => item.id}
                data={courseGoals}

                //Goal Item
                renderItem={itemData => (

                  <TouchableOpacity  onLongPress={removeGoalHandler.bind(this,itemData.item.id)}>
                    <View style={styles.listItem}>
                      <Text onDelete={()=> console.log('Does that work?')}>{itemData.item.value}</Text>
                      
                    </View>
                    
                  </TouchableOpacity>
                )}
                
              />
              
            </View>
   
    );
}
const styles = StyleSheet.create({
  //Image
  backImage:{
    flex:1,
},
    //text
    textadd:{

      fontSize:30,
      fontWeight:"bold",
      //color:"#fff",
      color:"#483D8B",
      paddingTop:10,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:20,
      backgroundColor:"#AFEEEE",


  }, 
  MBtn:{
    padding:10,
    paddingTop:20,
    //backgroundColor:"#9370DB",
    backgroundColor:"#483D8B",
    borderRadius:5,
    borderWidth:2,
    borderColor:"#FFFFFF",
    marginBottom:10
  },
  MTxt:{
    color:"#FFFFFF",
    textAlign:"center",
    fontSize:20,
  },
  //back and create
  ButtonContainer:{
    //flexDirection:"row",
    //justifyContent:"space-between",
    flexDirection:"column",
    alignItems:"center",
    top:30,
    bottom:30

   
},
  createBTN:{
      //backgroundColor:"#D8BFD8",
      //backgroundColor:"#ADD8E6",
      padding:20,
      width:"50%",
      paddingLeft:30,
      paddingRight:30,
      //backgroundColor:"#20B2AA",
      backgroundColor:"#4682B4",
      borderRadius:20,
      //borderColor:"#483D8B",
      top:10,
      left:70,
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
//Modal
    ModalS:{
      backgroundColor:"#D8BFD8"
    },
    screen: {
        padding: 50,
        backgroundColor:"#AFEEEE"
      },

      //Goal Input
      inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom:10,
      },
      buttonContainer: {
        flexDirection:'row',
        justifyContent:"space-around",
        width:'60%',
        

      },
      CancelBtn:{
        padding:10,
        paddingTop:20,
        backgroundColor:"#DC143C",
        borderRadius:10,
        borderWidth:2,
        borderColor:"#FFFFFF"
      },
      CTxt:{
        color:"#FFFFFF",
      },
      AddBtn:{
        padding:20,
        backgroundColor:"#00CED1",
        borderRadius:10,
        borderWidth:2,
        borderColor:"#FFFFFF"
      },
      ATxt:{
        color:"#FFFFFF",
      },
      //Goal Item
      listItem: {
        padding: 15,
        marginVertical: 10,
        //backgroundColor: '#ccc',
        borderColor: 'black',
        borderRadius:10,
        borderWidth: 1,
        top:10,
        bottom:10,
        
      }
})
export default MedAdd;