import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
  Image,
} from 'react-native';
import i18n from 'i18next';
import {withTranslation} from 'react-i18next';
import Title from '../../components/title/title';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/slices/languageSlice';
import { RootState } from '../../redux/store';

//@ts-ignore
import IconEnFlag from '../../../../assets/images/en-flag.png';
//@ts-ignore
import IconEsFlag from '../../../../assets/images/es-flag.png';


function Settings(props: any) {
  const dispatch = useDispatch();
  const isEnglish = useSelector((state: RootState) => state.language.isSpanish);

  const handleSetLanguage = (lang: boolean) => {
    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang ? 'es' : 'en');
  };

  useEffect(() => {
    const currentLang = i18n.language === 'es';
    if (currentLang !== isEnglish) {
      dispatch(setLanguage(currentLang));
    }
  }, [dispatch, isEnglish]);

  return (
    <View style={styles.settingsContainer}>
      <Title title={props.t('SETTINGS.TITLE_PAGE')}/>
      <View style={styles.settingsBoxPrincipal}>
        <View style={styles.settingsBox}>
          <Text style={styles.settingsSubtitle}>
            {props.t('SETTINGS.SUBTITLE_PAGE')}
          </Text>
          <View style={styles.settingsSwitch}>
            <Image source={IconEnFlag} />
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnglish ? '#0b577b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={handleSetLanguage}
              value={isEnglish}
              />
            <Image source={IconEsFlag} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  settingsBoxPrincipal: {
    width: '100%',
    paddingHorizontal: 20,
},
  settingsBox: {
    width: '100%',
    borderColor: '#959797',
    borderWidth: 1,
    borderRadius: 30,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsSwitch: {
    flexDirection: 'row',
    gap: 10,
  },
  settingsSubtitle: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#001b2d',
},
});

export default withTranslation('ns')(Settings);
