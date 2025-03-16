import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Title from '../../components/title/title';
import { withTranslation } from 'react-i18next';
import Button from '../../components/button/button';
import { useNavigation, useRoute } from '@react-navigation/native';

function DataDetail(props: any) {
  const navigation = useNavigation();
  const route = useRoute();
  const { param = {} } = route.params || {};
  const isParamEmpty = Object.keys(param).length === 0;

  const handleBack = () => {
    navigation.navigate('DataList');
  };

  return (
    <View style={styles.dataDetailContainer}>
      <Title title={props.t('DATA_DETAIL.TITLE_PAGE')}/>
      <View style={styles.dataDetailBackContainer}>
        <Button
          style={'noline'}
          title={props.t('DATA_ADD.BTN_BACK')}
          onPress={handleBack}
        />
      </View>
      <View style={styles.dataDetailTableContainer}>
        <View style={styles.dataDetailTextContainer}>
          {!isParamEmpty && (
            <View>
              <View style={styles.dataDetailRow}>
                <View>
                  <Text style={styles.dataDetailTitle}>
                    {props.t('DATA_DETAIL.TEXT_NAME')}
                  </Text>
                  <Text style={styles.dataDetailText}>
                    {param.nombre}
                  </Text>
                </View>
                <View>
                  <Text style={styles.dataDetailTitle}>
                    {props.t('DATA_DETAIL.TEXT_COUNTRY')}
                  </Text>
                  <Text style={styles.dataDetailText}>
                    {param.pais}
                  </Text>
                </View>
              </View>
              <View style={styles.dataDetailRow}>
                <View>
                  <Text style={styles.dataDetailTitle}>
                    {props.t('DATA_DETAIL.TEXT_TYPE')}
                  </Text>
                  <Text style={styles.dataDetailText}>
                    {param.tipo}
                  </Text>
                </View>
                <View>
                  <Text style={styles.dataDetailTitle}>
                    {props.t('DATA_DETAIL.TEXT_YEAR')}
                  </Text>
                  <Text style={styles.dataDetailText}>
                    {param.anioFundacion}
                  </Text>
                </View>
              </View>
              <View style={styles.dataDetailRowLast}>
                <View>
                  <Text style={styles.dataDetailTitle}>
                    {props.t('DATA_DETAIL.TEXT_DESCRIPTION')}
                  </Text>
                  <Text style={styles.dataDetailText}>
                    {param.descripcion}
                  </Text>
                </View>
              </View>

            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dataDetailContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  dataDetailBackContainer: {
    marginBottom: 10,
    width: '20%',
  },
  dataDetailTableContainer: {
    alignItems: 'center',
    padding: 20,
  },
  dataDetailTextContainer: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 10,
    borderColor: '#959797',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 20,
  },
  dataDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
  },
  dataDetailRowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  dataDetailTitle: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0b577b',
    paddingBottom: 5,
  },
  dataDetailText: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    color: '#545454',
    paddingBottom: 5,
  },
});

export default withTranslation('ns')(DataDetail);
