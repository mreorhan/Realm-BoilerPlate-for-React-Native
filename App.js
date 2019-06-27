import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Realm from 'realm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentWillMount() {
    Realm.open({
      schema: [{ name: 'User', properties: { name: 'string' } }]
    }).then(realm => {
      realm.write(() => {
        realm.create('User', { name: 'Emre' });
      });
      this.setState({ realm });
    });
  }

  render() {
    const info = this.state.realm
      ? 'Number of dogs in this Realm: ' + this.state.realm.objects('Dog').length
      : 'Loading...';

    return (
      <View>
        <Text>{info}</Text>
      </View>
    );
  }
}