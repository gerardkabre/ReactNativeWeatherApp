import React from 'react';
import { View, StatusBar, FlatList, Text } from 'react-native';

import Container from '../components/Container';
import AddContactButton from '../components/AddContactButton';
import Input from '../components/Input';

class Login extends React.Component {
  state = {
    name: '',
    password: ''
  };

  handleTextChange = text => {
    this.setState({ text });
  };
  render() {
    return (
      <Container>
        <View style={{ flex: 1 }}>
          <StatusBar translucent={false} barStyle="light-content" />
          <Text style={{ color: 'white' }}> Email </Text>
          <Input value={this.state.name}  />
          <Text style={{ color: 'white' }}> Password </Text>
          <Input value={this.state.password} />
          <AddContactButton />
        </View>
      </Container>
    );
  }
}

export default Login;
