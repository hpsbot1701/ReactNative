
import React, { useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet,Image}from 'react-native'
import {useDispatch} from 'react-redux'
import { addToCart, removeFromCart } from './Redux/action';
import {useSelector} from 'react-redux'


const Product = (props)=> {
 const item = props.item
 const Dispatch = useDispatch();

 const cartItems = useSelector((state)=>state.reducer)
 const[isAdded, setIsAdded]= useState(false)

 const handleAppToCart = (item) =>{
   
    Dispatch(addToCart(item))
 }

 const handleRemoveFromCart = (item) =>{
   Dispatch(removeFromCart(item.name))
 }


useEffect(()=>{
    let result = cartItems.filter((element)=>{
        return element.name === item.name
    })
    if(result.length){
        setIsAdded(true)
    } else {
        setIsAdded(false)
    }
},[cartItems])
  
    
    return(
        <View style={{alignItems:'center',borderBottomColor:'orange', borderBottomWidth:2, padding:10}}>
        <Text style={{fontSize:24}}>{item.name}</Text>
        <Text style={{fontSize:24}}>{item.price}</Text>
        <Text style={{fontSize:24}}>{item.color}</Text>
        <Image style={{height:200, width:200}} source={{uri:item.image}}/>
        {
            isAdded?
            <Button title='Remove to cart' onPress={()=>handleRemoveFromCart(item)}/>
            :
            <Button title='Add to cart' onPress={()=>handleAppToCart(item)}/>
        }
        
       </View>

    )
  }

   const styles = StyleSheet.create({
    container:{
      flex:1
    }
   })

 


export default Product;
