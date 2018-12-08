import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import * as actions from "../actions/actions";
import { connect } from "react-redux";
import Dialog, { DialogContent } from "react-native-popup-dialog";
import DiaContent from "./DialogContent";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      newContent: "",
      newTime: ""
    };
  }

  render() {
    var id = this.props.item.id;
    var name = this.props.item.name;
    var time = this.props.item.time;
    return (
      <View style={styles.container}>
        <View style={styles.information}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() =>
              this.setState({ visible: true, newContent: name, newTime: time })
            }
          >
            <Text style={styles.text_button}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.deleteItem(id)}>
            <Text style={styles.text_button}>Delete</Text>
          </TouchableOpacity>
        </View>

        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          {/* <DiaContent/> */}
          <DialogContent style={styles.dialog}>
            <TextInput
              style={styles.textInput}
              placeholder={"Name"}
              onChangeText={text => {
                this.setState({ newContent: text });
              }}
            >
              {this.state.newContent}
            </TextInput>
            <TextInput
              style={styles.textInput}
              placeholder={"time"}
              onChangeText={text => {
                this.setState({ newTime: text });
              }}
            >
              {this.state.newTime}
            </TextInput>
            <TouchableOpacity
              style={styles.button_edit}
              onPress={() =>
                this.onClickSave(
                  this.state.newContent,
                  this.state.newTime,
                  this.props.item.id
                )
              }
            >
              <Text>Save</Text>
            </TouchableOpacity>
          </DialogContent>
        </Dialog>
      </View>
    );
  }

  onClickSave(newContent, newTime, id) {
    this.setState({ visible: false });
    this.props.saveItem(newContent, newTime, id);
  }
}

function mapStateToProps(state) {
  return {
    isEdit: state.data.isEdit
  };
}

export default connect(
  mapStateToProps,
  actions
)(ItemList);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: 90,
    backgroundColor: "white",
    justifyContent: "space-between",
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 15
  },
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
  },
  information: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  text_button: {
    margin: 5,
    fontSize: 16
  },
  name: {
    margin: 5,
    fontSize: 20
  },
  time: {
    margin: 5,
    fontSize: 16
  }
});
