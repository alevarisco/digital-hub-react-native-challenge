import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Title from '../../components/title/title';
import { withTranslation } from 'react-i18next';
import Button from '../../components/button/button';
import { useNavigation } from '@react-navigation/native';

function DataDetail(props: any) {
  const navigation = useNavigation();

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
        <View style={styles.dataDetailInputContainer}>
          {/* <TextInput
            title={props.t('DATA_ADD.INPUT_NAME')}
            onChangeText={setName}
          />
          <TextInput
            title={props.t('DATA_ADD.INPUT_COUNTRY')}
            onChangeText={setCountry}
          />
          <TextInput
            title={props.t('DATA_ADD.INPUT_TYPE')}
            onChangeText={setType}
          />
          <TextInput
            title={props.t('DATA_ADD.INPUT_DESCRIPTION')}
            onChangeText={setDescription}
          /> */}
          {/* <Button
            style={'default'}
            title={props.t('DATA_ADD.BTN_ADD')}
            onPress={handleSave}
            disabled={!isFormValid()}
          /> */}
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
    padding: 10,
  },
  dataDetailInputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 10,
    paddingBottom: 30,
    borderColor: '#000',
    borderWidth: 1,
  },
  dataDetailButtonsContainer: {},
  error: {
    color: 'red',
    marginBottom: 16,
  },
});

export default withTranslation('ns')(DataDetail);
