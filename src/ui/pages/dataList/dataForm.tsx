import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { withTranslation } from 'react-i18next';

import Title from '../../components/title/title';
import Button from '../../components/button/button';
import TextInput from '../../components/text-input/text-input';
import TextArea from '../../components/text-area/text-area';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Brand } from '@/services/brand/brand.interface';
import { saveBrandUseCase, saveEditBrandUseCase } from '../../../application/brand/use-get-brands';
import { brandRepository } from '../../../services/brand/brandRepositoryImpl';

function DataForm(props: any) {
  const navigation = useNavigation();
  const route = useRoute();
  const { param = {} } = route.params || {};
  const isParamEmpty = Object.keys(param).length === 0;

  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');

  const handleCleanInputs = () => {
    setName('');
    setCountry('');
    setType('');
    setDescription('');
    setYear('');
  };

  const handleBack = () => {
    handleCleanInputs();
    navigation.navigate('DataList');
  };

  const isFormValid = () => {
    return name.trim() !== '' &&
      country.trim() !== '' &&
      type.trim() !== '' &&
      description.trim() !== '' &&
      year.trim() !== '';
  };

  const handleSave = async () => {
    const formData : Brand = {
      nombre: name,
      pais: country,
      tipo: type,
      descripcion: description,
      anioFundacion: Number(year),
    };
    if(isParamEmpty) {
      await saveBrandUseCase(brandRepository, formData);
    }else {
      await saveEditBrandUseCase(brandRepository, formData, param.id);
    }
    handleCleanInputs();
    navigation.navigate('DataList', {'refresh': true});

  };

  const handleSet = () => {
    setName(param.nombre);
    setCountry(param.pais);
    setType(param.tipo);
    setDescription(param.descripcion);
    setYear(String(param.anioFundacion));
  };

  useEffect(() => {
    if(!isParamEmpty) {
      handleSet();
    }
  }, [isParamEmpty]);

  return (
    <View style={styles.dataFormContainer}>
      <Title
        title={
          !isParamEmpty ?
            props.t('DATA_ADD.TITLE_DETAIL_PAGE')
          :
            props.t('DATA_ADD.TITLE_PAGE')
      }/>
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
            value={name}
            onChangeText={setName}
          />
          <TextInput
            title={props.t('DATA_ADD.INPUT_COUNTRY')}
            value={country}
            onChangeText={setCountry}
          />
          <TextInput
            title={props.t('DATA_ADD.INPUT_TYPE')}
            value={type}
            onChangeText={setType}
          />
          <TextInput
            title={props.t('DATA_ADD.INPUT_YEAR')}
            value={year}
            onChangeText={setYear}
          />
          <TextArea
            title={props.t('DATA_ADD.INPUT_DESCRIPTION')}
            value={description}
            onChangeText={setDescription}
          />
          <Button
            style={'default'}
            title={!isParamEmpty ? props.t('DATA_ADD.BTN_EDIT') : props.t('DATA_ADD.BTN_ADD')}
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
});

export default withTranslation('ns')(DataForm);
