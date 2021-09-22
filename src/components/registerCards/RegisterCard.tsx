import React from 'react';
import { TouchableOpacityProps, View, StyleSheet } from 'react-native';
import { ButtonRegister } from './styles';

import { DataTable } from 'react-native-paper';

interface SkillCardProps extends TouchableOpacityProps {
  code: string,
  schooling: string
}

export function RegisterCard({ code, schooling, ...rest }: SkillCardProps) {
    return (
        <ButtonRegister
        {...rest}
        >
        <View style={styles.container}>
      <DataTable>

        <DataTable.Row>
          <DataTable.Cell>{code}</DataTable.Cell>
          <DataTable.Cell>{schooling}</DataTable.Cell>
        </DataTable.Row>

        </DataTable>
        </View>

        </ButtonRegister>
    )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 15,
  },
});  
