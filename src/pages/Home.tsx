import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DataTable } from 'react-native-paper';
    
import { Container, Title, Input, Code, Schooling  } from './styles';
import { Button } from '../components/button/Button';
import { RegisterCard } from '../components/registerCards/RegisterCard';

interface ICadastroData {
  id: string;
  code: string;
  schooling: string;
}

export function Home() {
  const [newCode, setNewCode] = useState('')
  const [newSchooling, setNewSchooling] = useState('')
  const [myRegister, setMyRegister] = useState<ICadastroData[]>([])

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      code: newCode,
      schooling: newSchooling
    }

    if (newCode === '' || newSchooling === '') {
      alert('Please fill in the empty field.')
      return
    }

    setMyRegister([...myRegister, data])
    setNewCode('')
    setNewSchooling('')
  }

  function handleRemoveSkill(id: string) {
    setMyRegister(myRegister => myRegister.filter(register => register.id !== id))
  }

  useEffect(() => {
    async function loadData() {
      const storageRegister = await AsyncStorage.getItem('@myregister:registrations')
      if (storageRegister) {
        setMyRegister(JSON.parse(storageRegister))
      }
    }
    loadData()
    // async function removeAll() {
    //   await AsyncStorage.removeItem('@myskills:skills')
    // }
  }, [])

  useEffect(() => {
    async function saveData() {
      await AsyncStorage.setItem('@myregister:registrations', JSON.stringify(myRegister))
    }
    saveData()
  }, [myRegister])

  return (
    <>
    <Container>

      <Title>Register Education</Title>
    
      <Input 
      placeholder="Code"
      placeholderTextColor='#909090'
      value={newCode}
      onChangeText={value => setNewCode(value)}
      />

      <Input 
      placeholder="Schooling"
      placeholderTextColor='#909090'
      value={newSchooling}
      onChangeText={value => setNewSchooling(value)}
      />

      <Button 
      title = "Register" 
      onPress={handleAddNewSkill}  
      />
      
      <Title style={{ marginVertical: 20 }}>
        List Education
      </Title>

        <DataTable.Header>

          <Code>
            <DataTable.Title>Code</DataTable.Title>
          </Code>

          <Schooling>
            <DataTable.Title>Schooling</DataTable.Title>
          </Schooling>
          
        </DataTable.Header>
      
      <FlatList showsVerticalScrollIndicator={true}
        data={myRegister}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RegisterCard  
            code={item.code}
            schooling={item.schooling}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </Container>
    </>
  );
}



