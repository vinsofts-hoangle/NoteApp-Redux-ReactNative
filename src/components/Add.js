import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

import { connect } from "react-redux";
import * as actions from "../actions/actions";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      time: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={"Nội dung công việc"}
          onChangeText={text => this.setState({ content: text })}
        />

        <TextInput
          style={styles.input}
          placeholder={"Thời gian"}
          onChangeText={text => this.setState({ time: text })}
        />

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => this.onClickAdd(this.state.content, this.state.time)}
          >
            <Text style={styles.text_button}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text_button}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onClickAdd(content, time) {
    if (content === "" || time === "") {
      return alert("Chua nhap du thong tin");
    }
    this.props.addItem(content, time);
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  input: {
    height: 50,
    backgroundColor: "white",
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10
  },
  button: {
    flexDirection: "row",
    justifyContent: "center"
  },
  text_button: {
    margin: 10,
    fontSize: 16,
    backgroundColor: "#00FFFF",
    padding: 10,
    borderRadius: 10
  }
});

export default connect(
  null,
  actions
)(Add);
