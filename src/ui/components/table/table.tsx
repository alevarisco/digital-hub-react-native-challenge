import React from 'react';
import { withTranslation } from 'react-i18next';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../button/button';

const Table = (props: any) => {

  return (
    <ScrollView horizontal={true}>
      <View style={styles.table}>
        {/* Headers */}
        <View style={styles.row}>
          {props.headers.map((header: any, i: number) => (
            <View key={i} style={styles.cellHeader}>
              <Text style={styles.textHeader}>{props.t(header)}</Text>
            </View>
          ))}
        </View>

        {/* Data */}
        {props.datas && props.datas.map((row: any, iRow: number) => (
          <TouchableOpacity key={iRow} style={styles.row}
                onPress={() => props.onSelect(row)}
            >
              <View
                key={iRow}
                style={styles.cell}
                >
                <Text style={styles.textCell}>{row.nombre}</Text>
              </View>
              <View
                key={iRow + row.id}
                style={styles.cell}
                >
                <Text style={styles.textCell}>{row.pais}</Text>
              </View>
              <View
                key={iRow + row.id + 1}
                style={styles.cell}
                >
                <Text style={styles.textCell}>{row.tipo}</Text>
              </View>
          </TouchableOpacity>
        ))}
      <Button title={'next'} onPress={props.nextPage}/>
      <Button title={'prev'} onPress={props.prevPage}/>
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
    width: '30%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    minWidth: 100,
  },
  cellHeader: {
    width: '30%',
    borderWidth: 0.7,
    borderColor: '#ccc',
    padding: 8,
    minWidth: 100,
    backgroundColor: '#fff',
  },
  textCell: {
    // width: '30%',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
  },
  textHeader: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default withTranslation('ns')(Table);
