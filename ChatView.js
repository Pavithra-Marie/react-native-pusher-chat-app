import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, FlatList, KeyboardAvoidingView ,View,LogBox} from 'react-native';
import Constants  from 'expo-constants';
//import { Container, Content, Footer, Button} from 'native-base';
import _ from 'lodash';

LogBox.ignoreLogs(['Warning:...']); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = _.clone(console);
console.warn = message => {
if (message.indexOf('Setting a timer') <= -1) {
   _console.warn(message);
   }
};

export default class ChatView extends Component {
  constructor(props) {
    super(props);

    this.handleSendMessage = this.onSendMessage.bind(this);
  }
  

  onSendMessage(e) { // (1)
    this.props.onSendMessage(e.nativeEvent.text);
    this.refs.input.clear();
  }

  render() { // (2)
    return (
    
     <View>
      <KeyboardAvoidingView style={styles.container} {...(Platform.OS === "ios" && { 
            behavior: "padding",
            keyboardVerticalOffset: headerHeight
      })}>
        <Text style={{height:50,textAlign:'center',color:'purple',fontSize:24,fontWeight:'bold',borderBottomWidth:2,borderBottomColor:'lightgrey'}}> ChatApp</Text>
        <FlatList data={ this.props.messages }
        showsVerticalScrollIndicator={false} 
                  renderItem={ this.renderItem }
                  styles={ styles.messages } />
               
                      <TextInput autoFocus
                                keyboardType="default"
                                placeholder="Enter Text"
                                placeholderTextColor="#808080"
                                returnKeyType="done"
                                enablesReturnKeyAutomatically
                                style={ styles.input }
                                blurOnSubmit={ false }
                                onSubmitEditing={ this.handleSendMessage }
                                ref="input"
                                />
                  
      </KeyboardAvoidingView>
      </View>
      //</Container>
    );
  }

  renderItem({item}) { // (3)
    const action = item.action;
    const name = item.name;

    if (action == 'join') {
        return <Text style={ styles.joinPart }>{ name } has joined</Text>;
    } else if (action == 'part') {
        return <Text style={ styles.joinPartLeft }>{ name } has left</Text>;
    } else if (action == 'message') {
        return (
          <View><Text style={{padding:5,textTransform:'capitalize',marginTop:5}}> { name }</Text>
        <Text style={styles.msg}> { item.message }</Text></View>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
   width:'100%',
   height:'100%',
   padding:20,
   
  },
  messages: {
    alignSelf: 'stretch',
    color:'#fff',
    padding:10,
    backgroundColor:'blue'
  },
  input: {
    alignSelf: 'stretch',
    backgroundColor:'#f1f1f1',
    color:'#000',
    padding:15,
    fontSize:16,
    borderWidth:2,
    borderRadius:10,
    borderColor:'purple',
    marginTop:10
  },
  joinPart: {
    fontStyle: 'italic',
    color:'#fff',
    backgroundColor:'#3CB371',
    padding:10,
    textAlign:'center',
    alignSelf:'center',
    borderRadius:40,
    marginTop:20,
    paddingLeft:15,
    paddingRight:15
  },
  joinPartLeft: {
    fontStyle: 'italic',
    color:'#fff',
    backgroundColor:'#FF5C5C',
    padding:10,
    textAlign:'center',
    alignSelf:'center',
    borderRadius:40,
    marginTop:20,
    paddingLeft:15,
    paddingRight:15
  },
  msg:{
    backgroundColor:'#6C0BA9',
    padding:15,
    color:'#fff',
    borderTopRightRadius:10,
    borderTopLeftRadius:15,
    borderBottomRightRadius:15,
    alignSelf:'flex-start'
  }

});


