import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

//@ts-ignore
import IconHome from '../../../../assets/images/icon_home.png';
//@ts-ignore
import IconUsers from '../../../../assets/images/icon_users.png';
//@ts-ignore
import IconGeolocation from '../../../../assets/images/icon_hand.png';
//@ts-ignore
import IconSettings from '../../../../assets/images/icon_mi_cuenta.png';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBrands } from '../../redux/slices/brandSlice';
import { AppDispatch, RootState } from '../../redux/store';

function Home(props: any) {
  const navigation = useNavigation();
  const { itemCount, loading } = useSelector((state: RootState) => state.brands);
  const dispatch = useDispatch<AppDispatch>();

  const handleView = (view: string) => {
    navigation.navigate(view);
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchBrands());
    }, [dispatch])
  );

  return (
    <View style={styles.homeContainer} testID="home-view">
      <View style={styles.homeFlexContainer}>
        <View style={styles.homeMainContainer}>
          <Text style={styles.homeTitle}>
            {props.t('HOME.WELCOME_MSG')}
          </Text>
        </View>
        <View style={styles.homeMainContainer}>
          <View style={styles.homeContentContainer}>
            <TouchableOpacity
              style={styles.homeLinkContainer}
              testID="home-view-click-1"
              onPress={() => handleView('Home')}
            >
              <Image source={IconHome}/>
              <Text style={styles.homeLinkCurrently}>
                {props.t('HOME.LINK_HOME')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.homeLinkContainer}
              testID="home-view-click-2"
              onPress={() => handleView('DataList')}
            >
              <Image source={IconUsers}/>
              <Text style={styles.homeLink}>
                {props.t('HOME.LINK_DATA_LIST')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.homeLinkContainer}
                onPress={() => handleView('Geolocation')}
              >
              <Image source={IconGeolocation} style={styles.homeIconLink}/>
              <Text style={styles.homeLink}>
                {props.t('HOME.LINK_GEOLOCATION')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.homeLinkContainer}
                onPress={() => handleView('Settings')}
              >
              <Image source={IconSettings} style={styles.homeIconLink}/>
              <Text style={styles.homeLink}>
                {props.t('HOME.LINK_SETTINGS')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.homeMainContainer}>
          <View style={styles.homeFooterContainer}>
            <Text style={styles.homeSubTitle}>
              {props.t('HOME.ITEM_COUNT')}
            </Text>
             {loading ? (
              <Text style={styles.homeFooterText}>Loading...</Text>
            ) : (
              <Text style={styles.homeFooterText}>{itemCount}</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 70,
  },
  homeFlexContainer: {
    flexDirection: 'column',
    gap: 30,
  },
  homeMainContainer: {
    paddingHorizontal: 20,
  },
  homeContentContainer: {
    width: '100%',
    borderColor: '#959797',
    borderWidth: 1,
    padding: 20,
    borderRadius: 30,
    flexDirection: 'column',
    gap: 45,
},
  homeTitle: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0b577b',
    paddingBottom: 5,
  },
  homeSubTitle: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0b577b',
    paddingBottom: 5,
  },
  homeFooterText: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 20,
    color: '#0b577b',
    paddingBottom: 5,
  },
  homeLinkContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  homeLink: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 20,
    color: '#4FC3F7',
    paddingBottom: 5,
  },
  homeLinkCurrently: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 20,
    color: '#0b577b',
    paddingBottom: 5,
  },
  homeIconLink: {
    width: 35,
    height: 35,
  },
  homeFooterContainer: {
    width: '100%',
    borderColor: '#959797',
    borderWidth: 1,
    padding: 20,
    borderRadius: 30,
    flexDirection: 'row',
    gap: 5,
},
});

export default withTranslation('ns')(Home);

