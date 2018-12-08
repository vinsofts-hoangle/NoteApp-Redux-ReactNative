import React, { Component } from 'react';
import { View,FlatList, StyleSheet } from 'react-native';
import ItemList from './ItemList';
import { connect } from 'react-redux';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getData(){
    const {myNameHeader, myData} = this.props;
    if(myNameHeader==="WORKED") return myData.arr.filter(e =>e.worked);
    if(myNameHeader==="NOTWORKED") return myData.arr.filter(e =>!e.worked);
    return myData.arr;
  }


  render() {
    return (
      <View style = {styles.container}>
        <FlatList
            data = {this.getData()}   
            renderItem = {({item}) =><ItemList item = {item}/>}
            keyExtractor = {(index)=> index.toString()}            
        />
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    myNameHeader: state.nameHeader,
    myData:state.data,
  }
}

export default connect(mapStateToProps)(List);

const styles = StyleSheet.create({
    container:{
        flex:1        
    }
})