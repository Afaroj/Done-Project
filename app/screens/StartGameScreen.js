import React from 'react';
import { View, Text,StyleSheet, TextInput, Button,ScrollView,Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Card from '../Components/Card';
import colors from '../constants/colors';


const StartGameScreen =props=> {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Set a new Reminder!!</Text>
               <Card style={styles.inputContainer}>
                    <Text>Select Time</Text>

                      <ScrollView>
                        <View style={styles.cardstyle}>
                            <Card style={styles.inputContainer2}>
                                <View style={styles.btStyle}>
                                    <View>
                                        <TouchableOpacity style = {styles.bt} onPress={()=> Alert.alert('Simple Button pressed')}>
                                            <Text style={styles.txt}>AM</Text>
                                        </TouchableOpacity>
                                    </View>   
                                    <View>
                                        <TouchableOpacity style = {styles.bt1}>
                                            <Text style={styles.txt}> PM</Text>
                                        </TouchableOpacity>
                                    </View>                             
                                </View>

                                </Card>  
                                <Card style={styles.inputContainer2}>
                                    <ScrollView>
                                        
                                            <View style={styles.btStyle}>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>00</Text>
                                                    </TouchableOpacity>
                                                </View>   
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>01</Text>
                                                    </TouchableOpacity>
                                                </View>                   
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>02</Text>
                                                    </TouchableOpacity>
                                                </View>   
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>03</Text>
                                                    </TouchableOpacity>
                                                </View>  
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>04</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>05</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>06</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>07</Text>
                                                    </TouchableOpacity>
                                                </View>                            
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>08</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>09</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>10</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                 <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>11</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>12</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                
                                                 
                                        </View>
                                </ScrollView>
                                </Card>

                                <Card style={styles.inputContainer2}>
                                    <ScrollView>
                                            <View style={styles.btStyle}>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>00</Text>
                                                    </TouchableOpacity>
                                                </View>   
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>01</Text>
                                                    </TouchableOpacity>
                                                </View>                   
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>02</Text>
                                                    </TouchableOpacity>
                                                </View>   
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>03</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>04</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>05</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>06</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>07</Text>
                                                    </TouchableOpacity>
                                                </View>                            
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>08</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>09</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>10</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                 <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>11</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>12</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>13</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>14</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>15</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>16</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>17</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>18</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>19</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>20</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>21</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                 <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>22</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>23</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>24</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>25</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>26</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>27</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>28</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>29</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>30</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>31</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>32</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>33</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>34</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>35</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                 <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>36</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>37</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                 <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>38</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                 <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>39</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>40</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>41</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>42</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>43</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>44</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>45</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>46</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>47</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>48</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>49</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>50</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>51</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>52</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>53</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>54</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>55</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>56</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>57</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>58</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>59</Text>
                                                    </TouchableOpacity>
                                                </View> 
                                                <View>
                                                    <TouchableOpacity >
                                                        <Text style={styles.txt}>60</Text>
                                                    </TouchableOpacity>
                                                </View>                             
                                        </View>
                                </ScrollView>
                                </Card>
                            
                        </View>

                      </ScrollView>

                        <View style={styles.buttonContainer}>
                            <View style={styles.button}> 
                                <Button title='Reset' onPress={() => {}} color={colors.accent}/>
                            </View>    
                            <View style={styles.button}>
                                <Button title='Confirm' onPress={()=>{}} color={colors.primary}/>
                            </View>
                        </View>
               </Card>          
            
        </View>
    );
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:"center",
        
    },
    title:{
        fontSize:20,
        marginVertical:10,
    },
    inputContainer:{
        width:300,
        maxWidth:"80%",
        alignItems:"center",
        
        
    },
    inputContainer2:{
        width:100,
        //maxWidth:"80%",
        height:100,
        alignItems:"center",        
        
    },
    input:{
        width:50,
    },
    buttonContainer:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-between",
        padding:15,

    }
,
button:{
    width: 100,
    textAlign:"center",
},
btStyle:{
        flexDirection:"column",
        width:"100%",
        //justifyContent:"space-between",
        padding:15,

},
bt:{
    backgroundColor:"bisque",
    marginBottom:5
},
txt:{
    fontSize:15,
    color:"black"
},
bt1:{
    backgroundColor:"bisque",
},
cardstyle:{
    flexDirection:"row",
    justifyContent:"space-between"
}

});

export default StartGameScreen;