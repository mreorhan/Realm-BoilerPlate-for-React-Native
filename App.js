import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Realm from 'realm';
import { UserSchema } from './schemas/index'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentWillMount() {
    Realm.open({
      schema: [UserSchema]
    }).then(realm => {
      realm.write(() => {
        realm.create('User', {
          name: 'Emre',
          lastName: 'Orhan'
        });
      });

      this.setState({ realm: realm.objects('User') });
    });
  }

  render() {
    const info = this.state.realm
      ? 'Number of dogs in this Realm: ' + JSON.stringify(this.state.realm[0].name)
      : 'Loading...';

    return (
      <View>
        <Text>{info}</Text>
      </View>
    );
  }
}