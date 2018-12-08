import React, { Component } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ToastAndroid
} from "react-native";
import Header from "./components/Header";
import List from "./components/List";
import Add from "./components/Add";
import { connect } from "react-redux";
import * as actions from "./actions/actions";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (this.props.myIsDone !== prevProps.myIsDone) {
      ToastAndroid.show("done", ToastAndroid.SHORT);
      this.props.hideHeader();
    }
  }

  render() {
    return (
      // <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
      <View style={styles.container}>
        <Header />
        {this.props.myAdd ? <Add /> : null}
        <List />
      </View>
      //  </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state) {
  return {
    myAdd: state.hideHeader,
    myIsDone: state.data.isDone
  };
}

export default connect(
  mapStateToProps,
  actions
)(Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#66FF99"
  }
});
