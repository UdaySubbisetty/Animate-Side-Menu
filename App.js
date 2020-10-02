/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
  Text,
  
} from 'react-native';

import SidemenuAnimation from './SideMenuAnimation'
import Sidemenu from './Sidemenu'

export default class App extends React.Component
{

  constructor()
  {
    super()
    this.state={
      screenName : 'Home'
    }
  }

  onMenuAction()
  {
    this.menu.openMenu()
  }
  render()
  {

    const {screenName} = this.state
    return(
      <View style = {styles.mainView}>
      <SidemenuAnimation
      ref={menu => this.menu = menu}
      menuSize={150}
      menuView={<Sidemenu onSelectMenu={(name)=>{
        this.setState({screenName:name})
        this.menu.openMenu()
      }
       
      }/>}
      >
      <TouchableOpacity onPress={()=>{
        this.onMenuAction()
      }} style = {styles.menuView}>
       <Image source={require('./assets/menu.png')} style = {styles.menuIcon}/>
       </TouchableOpacity>
       <View style = {styles.innerView}>
      <Text style = {styles.text}>{screenName}</Text>
      </View>
      </SidemenuAnimation>
      </View>
    )
  }

 
}

const styles = StyleSheet.create({
  mainView : {flex:1,
            },
  text:{textAlign:'center',alignSelf:'center',fontWeight:'900',fontSize:20},
  innerView:{flex:1,  justifyContent:'center',

  alignItems:'center'},
  menuView:{marginLeft:20,marginTop:40},
  menuIcon:{height:30,width:30}


})