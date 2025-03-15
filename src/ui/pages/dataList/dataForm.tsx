import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Title from '../../components/title/title';
import { withTranslation } from 'react-i18next';
import Button from '../../components/button/button';
import TextInput from '../../components/text-input/text-input';
import { useNavigation } from '@react-navigation/native';
import { Brand } from '@/services/brand/brand.interface';
import { saveBrandUseCase } from '../../../application/brand/use-get-brands';
import { brandRepository } from '../../../services/brand/brandRepositoryImpl';

function DataForm(props: any) {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const handleBack = () => {
    navigation.navigate('DataList');
  };

  const isFormValid = () => {
    return name.trim() !== '' && country.trim() !== '' && type.trim() !== '' && description.trim() !== '';
  };

  const handleSave = async () => {
    const formData : Brand = {
      nombre: name,
      pais: country,
      tipo: type,
      descripcion: description,
    };
    await saveBrandUseCase(brandRepository, formData);
    setName('');
    setCountry('');
    setType('');
    setDescription('');
    navigation.navigate('DataList');
  };

  return (
    <View style={styles.dataFormContainer}>
      <Title title={props.t('DATA_ADD.TITLE_PAGE')}/>
      <View style={styles.dataFormBackContainer}>
        <Button
          style={'noline'}
          title={props.t('DATA_ADD.BTN_BACK')}
          onPress={handleBack}
        />
      </View>
      <View style={styles.dataFormTableContainer}>
        <View style={styles.dataFormInputContainer}>
          <TextInput
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
          />
          <Button
            style={'default'}
            title={props.t('DATA_ADD.BTN_ADD')}
            onPress={handleSave}
            disabled={!isFormValid()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dataFormContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  dataFormBackContainer: {
    marginBottom: 10,
    width: '20%',
  },
  dataFormTableContainer: {
    alignItems: 'center',
  },
  dataFormInputContainer: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'column',
    gap: 10,
    paddingBottom: 30,
  },
  dataFormButtonsContainer: {},
  error: {
    color: 'red',
    marginBottom: 16,
  },
});

export default withTranslation('ns')(DataForm);
