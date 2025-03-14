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

  return (
    <View style={styles.geolocalizationContainer}>
        <Title title={props.t('GEOLOCATION.TITLE_PAGE')}/>
        <Content text={[latitude, longitude]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  geolocalizationContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default withTranslation('ns')(Geolocalization);
