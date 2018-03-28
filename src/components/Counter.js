import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Switch
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>COUNTER</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.textInput}
          value={this.state.name}
          onChangeText={name => this.setState({ name })}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => this.props.login(this.state.name)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.secondText}>
          Your name is: {this.props.name || 'null'}
        </Text>
        <Text style={styles.secondText}>
          Logged in: {this.props.isLoggedIn ? 'true' : 'false'}
        </Text>
        <View style={styles.switchView}>
          <Text style={styles.secondText}>Save state:</Text>
          <Switch
            style={styles.switch}
            value={this.props.isSaveState}
            onValueChange={() => this.props.toggleSwitchSaveState()}
          />
        </View>

        <Text style={styles.text}>{this.props.number}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => this.props.increase()}
        >
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => this.props.decrease()}
        >
          <Text style={styles.buttonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProp = state => ({
  name: state.user.name,
  isLoggedIn: state.user.isLoggedIn,
  isSaveState: state.user.isSaveState,
  number: state.counter.number
});

const mapDispatchToProp = dispatch => ({
  login: name => dispatch({ type: 'LOGIN', name }),
  increase: () => dispatch({ type: 'INCREMENT' }),
  decrease: () => dispatch({ type: 'DECREMENT' }),
  toggleSwitchSaveState: () => dispatch({ type: 'TOGGLE_SAVE_STATE' })
});

export default connect(mapStateToProp, mapDispatchToProp)(Counter);
