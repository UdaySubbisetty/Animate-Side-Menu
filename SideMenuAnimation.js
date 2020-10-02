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
  View,
  Text,
  Animated,
  Dimensions
  
} from 'react-native';

const {width,height} = Dimensions.get('window')
export default class SidemenuAnimation extends React.Component
{

   
  constructor()
  {
    super()
    this.state = {
      aniamtion : new Animated.Value(0),
      show:false
    }
  }
    openMenu()
    {
        const {show,aniamtion} = this.state
    if(!show)
    {
   

                   Animated.timing(
                    aniamtion,
                    {
                        toValue: 1,
                        duration: 500,
                        useNativeDriver: true
                    }
                ).start(() =>
                {
                  this.setState({show:!show})
                 });
    }
    else
    {
     Animated.timing(
                    aniamtion,
                    {
                        toValue: 0,
                        duration: 500,
                        useNativeDriver: true
                    },

                ).start(() =>
                {
                  this.setState({show:!show})
                 });
    }
   


    }

  render()
  {

    const  aniamtion_interpolate = this.state.aniamtion.interpolate(
        {
          inputRange:[0,1],
          outputRange : [0,width- this.props.menuSize]
        }
      )
  
      const scale = this.state.aniamtion.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: [1,0.7]
        })

        const scaleMenu = this.state.aniamtion.interpolate({
            inputRange: [0, 1],
            outputRange: [1.3,1]
})
   
        
    return(
      <View style ={styles.mainView}>
      <Animated.View style = {{flex:1, transform:[{scale:scaleMenu}]}}>
      {this.props.menuView}
      </Animated.View>
      <Animated.View style ={[styles.childStyle,{
          borderRadius:this.state.show ? 6 : 0,
           transform: [{ translateX: aniamtion_interpolate },{scale:scale}]}]}>
      {this.props.children}
      </Animated.View>
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
  menuView:{marginLeft:20,marginTop:20},
  menuIcon:{height:30,width:30},
  childStyle : {shadowColor: "#323232",
  shadowOpacity: 0.4,
  shadowRadius: 6,
  shadowOffset: {
    height: 1,
    width: 1
  },
  position:'absolute',top:0,left:0,right:0,bottom:0,backgroundColor:'#fff'}


})


SidemenuAnimation.defaultProps = {
    menuSize: 150
  };