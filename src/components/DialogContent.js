import React, { Component } from "react";
import { Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as actions from "../actions/actions";
import { connect } from "react-redux";
import { DialogContent } from "react-native-popup-dialog";

class DiaContent extends Component {
  constructor(props) {
    super(props);
    DiaContent;
    this.state = {
      newContent: "",
      newTime: ""
    };
  }

  render() {
    return (
      <DialogContent style={styles.dialog}>
        <TextInput
          style={styles.textInput}
          placeholder={"Name"}
          onChangeText={text => {
            this.setState({ newContent: text });
          }}
        >
          {this.props.editName}
        </TextInput>
        <TextInput
          style={styles.textInput}
          placeholder={"time"}
          onChangeText={text => {
            this.setState({ newTime: text });
          }}
        >
          {this.props.editTime}
        </TextInput>
        <TouchableOpacity
          style={styles.button_edit}
          onPress={() =>
            this.onClickSave(
              this.state.newContent,
              this.state.newTime,
              this.props.item.editId
            )
          }
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </DialogContent>
    );
  }

  onClickSave(newContent, newTime, id) {
    this.setState({ visible: false });
    this.props.editItem(newContent, newTime, id);
  }
}

function mapStateToProps(state) {
  return {
    editName: state.data.editName,
    editTime: state.data.editTime,
    editId: state.data.editId
  };
}

export default connect(
  mapStateToProps,
  actions
)(DiaContent);

const styles = StyleSheet.create({
  dialog: {
    height: 200,
    width: 300,
    flexDirection: "column"
  },
  textInput: {
    margin: 5,
    height: 40,
    backgroundColor: "red"
  },
  button_edit: {
    justifyContent: "center",
    backgroundColor: "green"
  }
});
