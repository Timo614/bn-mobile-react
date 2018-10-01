import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Text, View, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import EventTicketStyles from '../styles/event_details/eventTicketStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const eventTicketStyles = EventTicketStyles.createStyles()

export default class GetTickets extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  render() {
    return (
      <View style={eventTicketStyles.mainBody}>
        <View style={eventTicketStyles.mainBodyContent}>

          <View style={styles.container}>
            <Text style={styles.header}>Ticket Type</Text>
          </View>

          <TouchableHighlight onPress={() => this.props.changeScreen('checkout')}>
            <View style={eventTicketStyles.rowContainer}>
              <View style={eventTicketStyles.row}>
                <Text style={eventTicketStyles.ticketPrice}>$35</Text>
                <View>
                  <Text style={eventTicketStyles.ticketHeader}>General Admission</Text>
                  <Text style={eventTicketStyles.ticketSubHeader}>Lorem ipsum dolor sit amet non lorem.</Text>
                </View>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => this.props.changeScreen('checkout')}>
            <View style={eventTicketStyles.rowContainer}>
              <View style={eventTicketStyles.row}>
                <Text style={eventTicketStyles.ticketPrice}>$55</Text>
                <View>
                  <Text style={eventTicketStyles.ticketHeader}>VIP</Text>
                  <Text style={eventTicketStyles.ticketSubHeader}>Lorem ipsum dolor sit amet non lorem.</Text>
                </View>
              </View>
              <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}