import React, {Component} from 'react';
import {ScrollView, Text, View, Image, TextInput, TouchableHighlight, Animated, Platform, RefreshControl, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SharedStyles from '../styles/shared/sharedStyles'
import FormStyles from '../styles/shared/formStyles'
import SlideShowStyles from '../styles/shared/slideshowStyles'
import EventStyles from '../styles/shared/eventStyles'
import NavigationStyles from '../styles/shared/navigationStyles'

const styles = SharedStyles.createStyles()
const formStyles = FormStyles.createStyles()
const slideshowStyles = SlideShowStyles.createStyles()
const eventStyles = EventStyles.createStyles()
const navigationStyles = NavigationStyles.createStyles()

const HEADER_MAX_HEIGHT = 0;
const HEADER_MIN_HEIGHT = -25;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


function EventItemView({
  bgImage,
  avatarImages,
  priceDollars,
  titleText,
  scheduleText,
  onPress,
}) {
  return (
    <TouchableHighlight underlayColor="#fff" onPress={onPress}>
      <View style={eventStyles.eventContainer}>
        <Image
          style={eventStyles.eventImage}
          source={bgImage}
        />

        <View style={eventStyles.detailsContainer}>
          <View style={eventStyles.sectionTop}>
            <View style={eventStyles.iconLinkCircleContainerSmall}>
              <Icon style={eventStyles.iconLinkCircleSmall} name="star" />
            </View>
            <View style={styles.avatarContainer}>
              {avatarImages.map((source, key) => <Image style={styles.avatarSmall} source={source} key={key} />)}
            </View>
          </View>
          <View style={eventStyles.sectionBottom}>
            <View style={styles.priceTagContainer}>
              <Text style={styles.priceTag}>${priceDollars}</Text>
            </View>
          </View>
        </View>

        <View style={eventStyles.detailsContainerBottom}>
          <Text style={eventStyles.header}>{titleText}</Text>
          <Text style={eventStyles.details}>{scheduleText}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default class EventsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    };
  }

  render() {
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, 100],
      extrapolate: 'clamp',
    });
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });
    const opacity = scrollY.interpolate({
      inputRange: [0, 0.9, 1],
      outputRange: [1, 0, 1],
    });

    const {navigation: {navigate}} = this.props

    return (
      <View>
        <ScrollView
          style={styles.container}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          <View style={styles.sectionHeaderContainer}>
            <Animated.Text style={[styles.header, {opacity: opacity}]}>Explore</Animated.Text>
            <View style={styles.iconLinkContainer}>
              <Image
                style={styles.iconImageSmall}
                source={require('../../assets/heart-small.png')}
              />
              <Text style={styles.iconLinkText}>NYC</Text>
              <Icon style={styles.iconLink} name="keyboard-arrow-down" />
            </View>
          </View>

          <View style={formStyles.searchContainer}>
            <Icon style={formStyles.searchIcon} name="search" />
            <TextInput
              style={formStyles.searchInput}
              placeholder="Search artists, shows, venues..."
              searchIcon={{ size: 24 }}
              disabled
            />
          </View>

          <Text style={styles.sectionHeader}>Hot This Week</Text>

          <View style={slideshowStyles.slideshowContainer}>
            <Image
              style={slideshowStyles.slideShowImage}
              source={require('../../assets/featured-1.png')}
            />

            <View style={slideshowStyles.detailsContainer}>
              <View style={slideshowStyles.sectionTop}>
                <View style={styles.iconLinkCircleContainer}>
                  <Icon style={styles.iconLinkCircle} name="star" />
                </View>
                <View style={styles.avatarContainer}>
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar-male.png')}
                  />
                  <Image
                    style={styles.avatar}
                    source={require('../../assets/avatar-female.png')}
                  />
                </View>
              </View>

              <View style={slideshowStyles.sectionMiddle}>
                <Icon style={slideshowStyles.slideShowIconLinkLeft} name="keyboard-arrow-left" />
                <Icon style={slideshowStyles.slideShowIconLinkRight} name="keyboard-arrow-right" />
              </View>

              <TouchableHighlight underlayColor="rgba(0, 0, 0, 0)" onPress={() => navigate('EventsShow', {name: 'Childish Gambino'})}>
                <View style={slideshowStyles.sectionBottom}>
                  <View style={styles.priceTagContainer}>
                    <Text style={styles.priceTag}>$30</Text>
                  </View>
                  <Text style={slideshowStyles.header}>Childish Gambino</Text>
                  <Text style={slideshowStyles.details}>Fri, July 20 - 8:50 pm - The Warfield</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <Text style={styles.sectionHeader}>Upcoming</Text>

          <EventItemView
            onPress={() => navigate('EventsShow', {name: 'River Whyless'})}
            bgImage={require('../../assets/event-smaller-1.png')}
            avatarImages={[
              require('../../assets/avatar-male.png'),
              require('../../assets/avatar-female.png'),
              require('../../assets/avatar-female.png'),
            ]}
            priceDollars={30}
            titleText="River Whyless"
            scheduleText="Fri, July 20 - 8:50 pm - The Warfield"
          />
          <EventItemView
            onPress={() => navigate('EventsShow', {name: 'Beyonce'})}
            bgImage={require('../../assets/event-smaller-2.png')}
            avatarImages={[
              require('../../assets/avatar-female.png'),
              require('../../assets/avatar-male.png'),
              require('../../assets/avatar-female.png'),
            ]}
            priceDollars={30}
            titleText="Beyonce"
            scheduleText="Fri, July 20 - 8:50 pm - The Warfield"
          />
          <EventItemView
            onPress={() => navigate('EventsShow', {name: 'Drake'})}
            bgImage={require('../../assets/event-smaller-3.png')}
            avatarImages={[
              require('../../assets/avatar-male.png'),
              require('../../assets/avatar-female.png'),
              require('../../assets/avatar-female.png'),
            ]}
            priceDollars={30}
            titleText="Drake"
            scheduleText="Fri, July 20 - 8:50 pm - The Warfield"
          />
          <EventItemView
            onPress={() => navigate('EventsShow', {name: 'Ed Sheeran'})}
            bgImage={require('../../assets/event-smaller-4.png')}
            avatarImages={[
              require('../../assets/avatar-male.png'),
              require('../../assets/avatar-female.png'),
              require('../../assets/avatar-female.png'),
            ]}
            priceDollars={30}
            titleText="Ed Sheeran"
            scheduleText="Fri, July 20 - 8:50 pm - The Warfield"
          />
        </ScrollView>
        <Animated.View style={[navigationStyles.scrollHeaderContainer, { height: headerHeight, transform: [{translateY: headerTranslate}] }]}>
          <View style={navigationStyles.scrollHeader}>
            <Animated.Text style={[navigationStyles.scrollTitle, {opacity: opacity}]}>Explore</Animated.Text>
            <Animated.Text style={navigationStyles.scrollSubTitle}>All Dates &bull; Los Angeles, CA</Animated.Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}
