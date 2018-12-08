import React, { Component } from "react";
import { View, ToolbarAndroid, StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onActionSelected(position) {
    switch (position) {
      case 0:
        this.props.hideHeader();
        break;
      case 1:
        this.props.filterWorker();
        break;
      case 2:
        this.props.filterNotWorker();
        break;
      case 3:
        this.props.show_all();
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View>
        <ToolbarAndroid
          style={styles.toolbar}
          title={this.props.myNameHeader}
          actions={[
            {
              title: "Add",
              show: "always",
              icon: require('../asset/add.png'),
            },
            {
              title: "Đã làm",
              show: "never"
            },
            {
              title: "Chưa làm",
              show: "never"
            },
            {
              title: "Note",
              show: "never"
            }
          ]}
          onActionSelected={this.onActionSelected.bind(this)}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    myNameHeader: state.nameHeader,
  };
}

export default connect(
  mapStateToProps,
  actions
)(Header);

const styles = StyleSheet.create({
  toolbar: {
    height: 50,
    backgroundColor: "#66FF66"
  }
});
