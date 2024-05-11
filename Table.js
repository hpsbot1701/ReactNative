
import React, {useState} from 'react';
import{Button, Text,View, StyleSheet, TextInput}from 'react-native'



const App = () => {
 const[name, setName] = useState("");
 const[email, setEmail] = useState("");
 const[password, setPassword] = useState("");
 const[display,setDisplay] = useState(false);

 function removeData(){
  setDisplay(false)
  setName(" ")
  setEmail(" ")
  setPassword(" ")
 }

  return ( 
    <View>
     <Text style={{fontSize:30}}>Simple form in React Native</Text>
     <TextInput
     placeholder='Enter User Name'
     value ={name}
     style={styles.textBox}
     onChangeText={(text)=>setName(text)}
     />
     <TextInput
     placeholder='Enter User Email'
     value = {email}
     style={styles.textBox}
     onChangeText={(text)=>setEmail(text)}
     />
     <TextInput
     placeholder='Enter User Password'
     secureTextEntry={true}
     value = {password}
     style={styles.textBox}
     onChangeText={(text)=>setPassword(text)}
     />
     <View style={{marginBottom:10}}>
     <Button title='Print User Details' onPress={()=>setDisplay(true)} />
     </View>
     <Button title='Clear User Details' onPress={removeData} />
     <View>
      {
        display?
        <View>
          <Text style={{fontSize:30}}>Your name is: {name}</Text>
          <Text style={{fontSize:30}}>Your email is: {email}</Text>
          <Text style={{fontSize:30}}>Your password is: {password}</Text>
        </View>:null

      }
     </View>
    </View>
    
  );
};
const styles = StyleSheet.create({
  textBox: {
    fontSize: 30,
    color: "red",
    borderColor: 'blue',
    borderWidth: 5,
    margin: 10
  }
})









export default App;
