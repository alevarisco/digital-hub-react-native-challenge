import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { withTranslation } from 'react-i18next';

import Title from '../../components/title/title';
import Table from '../../components/table/table';
import TextInput from '../../components/text-input/text-input';
import Button from '../../components/button/button';

import { brandUseCase } from '../../../application/brand/use-get-brands';
import { brandRepository } from '../../../services/brand/brandRepositoryImpl';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {  fetchItemsSuccess, setOrder, setPage, setQuery, setSort } from '../../redux/slices/tableSlice';
import { useNavigation } from '@react-navigation/native';

function DataList(props: any) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { items, pagination } = useSelector(
    (state: RootState) => state.table
  );

  const ORDER_ASC = 'ASC';
  const ORDER_DESC = 'DESC';

  const headers = [
    {
      id: 0,
      header: 'DATA_LIST.TABLE.COL1',
      value: 'nombre',
    },
    {
      id: 1,
      header: 'DATA_LIST.TABLE.COL2',
      value: 'pais',
    },
    {
      id: 2,
      header: 'DATA_LIST.TABLE.COL3',
      value: 'tipo',
    },
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
  const handleSort = (header: any) => {
    console.log(header);
    dispatch(setSort(header.value));

    if(pagination.order === ORDER_ASC){
      dispatch(setOrder(ORDER_DESC));
    }else {
      dispatch(setOrder(ORDER_ASC));
    }
  };

  const showAddView = () => {
    console.log('add');
    navigation.navigate('Detail');
        // navigation.dispatch();
    // window.location.href = 'DataDetail';
  };

  useEffect(() => {
    handleGetData();
  }, [pagination.page,
      pagination.query,
      pagination.sort,
      pagination.order]);

  return (
      <View style={styles.dataListContainer}>
        <Title title={props.t('DATA_LIST.TITLE_PAGE')}
          button={
            <Button
              style={'default'}
              title={props.t('DATA_LIST.BTN_ADD_SIGN')}
              onPress={showAddView}
            />
          }
        />
        <View style={styles.dataListTableContainer}>
          <View style={styles.dataListInputContainer}>
            <TextInput title={props.t('DATA_LIST.INPUT_SEARCH_NAME')}
            onChangeText={(text: string) => {
              dispatch(setPage(1));
              dispatch(setQuery(text));
            }}/>
          </View>

          <Table
            headers={headers}
            datas={items}
            onSelect={(r: any) => {
              console.log('row = ', r);
            }}
            onHeaderSelect={handleSort}
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
    paddingTop: 50,
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
