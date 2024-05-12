
import React, { Component } from 'react';
import{Button, Text,View, StyleSheet, TextInput, FlatList, SectionList}from 'react-native'
import Student from './components/Student';

class App extends Component{
 constructor(){
  super();
  this.state={
    name:"Anil"
  }
 }
 UpdateName(val){
  this.setState({name:val})
 }
render() {
  return(
    <View>
    <Text style={{fontSize:30, color:"orange"}}>{this.state.name}</Text>
    <TextInput placeholder='Enter name' onChangeText={(text)=>
      this.UpdateName(text)} />
    <Button title='Press me'  />
    {/*  Using Props in Student component {this.props.name} */}
    <Student name={this.state.name}/>  
    </View>
  )
}
}








export default App;
