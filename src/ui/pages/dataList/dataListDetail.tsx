import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Title from '../../components/title/title';
import { withTranslation } from 'react-i18next';
import Button from '../../components/button/button';
import TextInput from '../../components/text-input/text-input';

function DataListDetail(props: any) {

  return (
    <View style={styles.dataListContainer}>
      <Title title={props.t('DATA_LIST.TITLE_PAGE')}/>
      <View style={styles.dataListTableContainer}>

        <View style={styles.dataListInputContainer}>
          <TextInput title={props.t('DATA_LIST.INPUT_SEARCH_NAME')} onChangeText={(text: string) => {console.log(text);}}/>
          {/* <TextInput title={'hola'} onChangeText={(text: string) => {console.log(text);}}/>
          <TextInput title={'hola'} onChangeText={(text: string) => {console.log(text);}}/> */}
          <View style={styles.dataListButtonsContainer}>
            <Button style={'default'} title={props.t('DATA_LIST.BTN_SEARCH')}/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dataListContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  dataListTableContainer: {
    alignItems: 'center',
  },
  dataListInputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 10,
    paddingBottom: 30,
  },
  dataListButtonsContainer: {},
});

export default withTranslation('ns')(DataListDetail);
