import React from 'react';
import {Text, View, ScrollView, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import AccountStyles from '../styles/account/accountStyles'
import NotificationStyles from '../styles/account/notificationStyles'

const styles = SharedStyles.createStyles()
const accountStyles = AccountStyles.createStyles()
const notificationStyles = NotificationStyles.createStyles()

export default function Notifications() {
  return (
    <ScrollView>
      <View style={accountStyles.containerDark}>

        <View style={styles.row}>
          <View style={styles.cols2}>
            <Text style={accountStyles.sectionHeader}>Notification Type</Text>
          </View>
          <View style={[styles.cols2, accountStyles.accountRowWrapper]}>
            <Text style={accountStyles.sectionHeader}>Phone</Text>
            <Text style={accountStyles.sectionHeader}>Email</Text>
          </View>
        </View>

        <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('AccountDetails')}>
          <View style={accountStyles.accountRow}>
            <View style={accountStyles.accountRowWrapper}>
              <Icon style={accountStyles.accountIcon} name="account-circle" />
              <Text style={accountStyles.accountHeader}>Account</Text>
            </View>
            <Icon style={accountStyles.accountArrow} name="keyboard-arrow-right" />
          </View>
        </TouchableHighlight>

      </View>
    </ScrollView>
  );
}
