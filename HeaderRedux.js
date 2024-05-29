
import React, { useEffect, useState } from 'react';
import{Button, Text,View, StyleSheet }from 'react-native'
import {useSelector} from 'react-redux'


const Header = ()=> {
 
const cartData = useSelector((state)=>state.reducer)
const[cartItems,setCartItems] = useState(0)
useEffect(()=>{
setCartItems(cartData.length)
},[cartData])
  
    
    return(
    <View>
      <Text style={{fontSize:30,textAlign:'right', padding:10, backgroundColor:'orange'}}>
        <View style={{backgroundColor:'white', borderRadius:20,height:40,width:40}}>
            <Text style={{fontSize:30}}>{cartItems}</Text>
            
        </View>
        </Text>
    </View>

    )
  }

   const styles = StyleSheet.create({
    container:{
      flex:1
    }
   })

 


export default Header;
