import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, View, TouchableOpacity } from 'react-native';


export default class Login extends Component { // (1)
  render() {
    return (
      //<KeyboardAvoidingView style={styles.container} behavior="padding"> // (2)
      <View style={styles.container}>
        <Text style={styles.heading}>Enter Your Name to Start Chatting</Text> 
         <TextInput autoCapitalize="none" // (4)
                   autoCorrect={false}
                   autoFocus
                   keyboardType="default"
                   maxLength={ 20 }
                   placeholder="Username"
                   placeholderTextColor="#808080"
                   returnKeyType="done"
                   enablesReturnKeyAutomatically
                   style={styles.username}
                   onSubmitEditing={this.props.onSubmitName}
          />
         
                   
      </View>
                 
     // </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({ // (5)
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:40,
    color:'purple'
  },
  username: {
    alignSelf: 'stretch',
    backgroundColor:'#f1f1f1',
    color:'#000',
    padding:15,
    fontSize:16,
    marginTop:40,
    marginLeft:40,
    marginRight:40,
    borderWidth:2,
    borderRadius:20,
    borderColor:'purple'
  },
  button:{
    alignSelf:'stretch',
    backgroundColor:'#000',
    margin:40,
    padding:20,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center'
  }
});