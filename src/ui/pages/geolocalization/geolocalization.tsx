import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import useLocation from '../../../application/location/use-location';
import Title from '../../components/title/title';
import Content from '../../components/content/content';
import '../../../../i18n';
import {withTranslation} from 'react-i18next';

function Geolocalization(props: any) {
  const {latitude, longitude} = useLocation();
  const isLoading = latitude === 0 && longitude === 0;

  const locationData = [
    { title: 'GEOLOCATION.YOUR_LAT', value: isLoading ? 'Loading...' : latitude },
    { title: 'GEOLOCATION.YOUR_LONG', value: isLoading ? 'Loading...' : longitude },
  ];

return (
    <View style={styles.geolocalizationContainer} testID="geo-view">
        <Title title={props.t('GEOLOCATION.TITLE_PAGE')}/>
        <Content text={locationData} />
    </View>
  );
}

const styles = StyleSheet.create({
  geolocalizationContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});

export default withTranslation('ns')(Geolocalization);
