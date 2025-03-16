import React from 'react';
import { withTranslation } from 'react-i18next';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Button from '../button/button';

import IconEdit from '../../../../assets/images/pencil.png';
import IconDelete from '../../../../assets/images/trash.png';

const Table = (props: any) => {

  return (
    <ScrollView horizontal={false} alwaysBounceVertical={false}>
      <View style={styles.table}>
        {/* Headers */}
        <View style={styles.row}>
          {props.headers.map((h: any, i: number) => (
            <TouchableOpacity
                key={i}
                style={styles.cellHeader}
                onPress={() => props.onHeaderSelect(h)}
            >
              <Text style={styles.textHeader}>{props.t(h.header)}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Data */}
        {props.datas && props.datas.map((row: any, iRow: number) => (
          <TouchableOpacity key={iRow} style={styles.row}
                onPress={() => props.onSelect(row)}
            >
              <View
                // key={iRow}
                style={styles.cell}
                >
                <Text style={styles.textCell}>{row.nombre}</Text>
              </View>
              <View
                // key={iRow + row.id}
                style={styles.cell}
                >
                <Text style={styles.textCell}>{row.pais}</Text>
              </View>
              <View
                // key={iRow + row.id + 1}
                style={styles.cell}
                >
                <Text style={styles.textCell}>{row.tipo}</Text>
              </View>
              <View
                // key={iRow + row.id  1}
                style={styles.cellRow}>
                    <TouchableOpacity onPress={() => props.onPressEdit(row)}>
                        <Image source={IconEdit}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.onPressDelete(row)}>
                        <Image source={IconDelete}/>
                    </TouchableOpacity>
              </View>
          </TouchableOpacity>
        ))}
        <View style={styles.btnContainer}>
            <Button title={props.t('COMPONENTS.TABLE.BTN_PREV')} onPress={props.prevPage}/>
            <Button title={props.t('COMPONENTS.TABLE.BTN_NEXT')} onPress={props.nextPage}/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    marginHorizontal: 50,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: '20%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    minWidth: 100,
  },
  cellRow: {
    width: '20%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    minWidth: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cellHeader: {
    width: '20%',
    borderWidth: 0.7,
    borderColor: '#ccc',
    padding: 8,
    minWidth: 100,
    backgroundColor: '#fff',
  },
  textCell: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
  },
  textHeader: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
});

export default withTranslation('ns')(Table);
