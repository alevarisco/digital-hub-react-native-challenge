import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Title from '../../components/title/title';
import { withTranslation } from 'react-i18next';
import Table from '../../components/table/table';
import Button from '../../components/button/button';
import TextInput from '../../components/text-input/text-input';
import { Pagination } from '../../../domain/pagination';
import { brandUseCase } from '../../../application/brand/use-get-brands';
import { brandRepository } from '../../../services/brand/brandRepositoryImpl';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {  fetchItemsSuccess, setPage, setQuery } from '../../redux/slices/tableSlice';

function DataList(props: any) {
  const dispatch = useDispatch();
  const { items, pagination } = useSelector(
    (state: RootState) => state.table
  );

  const headers = [
    'DATA_LIST.TABLE.COL1',
    'DATA_LIST.TABLE.COL2',
    'DATA_LIST.TABLE.COL3',
  ];

  const handleGetData = async () => {
    const data = await brandUseCase(brandRepository, pagination);
    dispatch(fetchItemsSuccess({ items: data }));
  };

  const handleNextPage = () => {
    if (items.length === pagination.limit) {
      dispatch(setPage(pagination.page + 1));
    }
  };
  const handlePrevPage = () => {
    if (pagination.page > 1) {
      dispatch(setPage(pagination.page - 1));
    }
  };

  useEffect(() => {
    handleGetData();
  }, [pagination.page, pagination.query]);

  return (
      <View style={styles.dataListContainer}>
        <Title title={props.t('DATA_LIST.TITLE_PAGE')}/>
        <View style={styles.dataListTableContainer}>

          <View style={styles.dataListInputContainer}>
            <TextInput title={props.t('DATA_LIST.INPUT_SEARCH_NAME')}
            onChangeText={(text: string) => {
              dispatch(setPage(1));
              dispatch(setQuery(text));
            }}/>
            {/* <TextInput title={'hola'} onChangeText={(text: string) => {console.log(text);}}/>
            <TextInput title={'hola'} onChangeText={(text: string) => {console.log(text);}}/> */}
            {/* <View style={styles.dataListButtonsContainer}>
              <Button style={'default'} title={props.t('DATA_LIST.BTN_SEARCH')}/>
            </View> */}
          </View>

          <Table
            headers={headers}
            datas={items}
            onSelect={(value: any) => {
              console.log('value = ', value);
            }}
            nextPage={handleNextPage}
            prevPage={handlePrevPage}
          />
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

export default withTranslation('ns')(DataList);
