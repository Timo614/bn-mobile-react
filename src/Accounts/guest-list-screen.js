import React, {Component} from 'react'
import {View} from 'react-native'
import GuestList from './guest-list-checkin'

export default class GuestListScreen extends Component {
  render() {
    const {state: managerState, searchGuestList} = this.props.screenProps.eventManager

    return (
      <View>
      <GuestList {...managerState} searchGuestList={searchGuestList} />
      </View>
    )
  }
}
