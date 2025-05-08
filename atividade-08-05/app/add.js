import React, { useState } from "react";
import { useRouter } from "expo-router";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddContactScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  async function saveContact() {
    if (!name || !phone) return;

    const newContact = {
      id: String(Date.now()),
      name,
      phone,
    };

    try {
      const stored = await AsyncStorage.getItem("contacts");
      const currentContacts = stored ? JSON.parse(stored) : [];

      const updatedContacts = [...currentContacts, newContact];
      await AsyncStorage.setItem("contacts", JSON.stringify(updatedContacts));

      router.back(); // Volta para tela principal
    } catch (e) {
      console.error("Erro ao salvar contato:", e);
    }
  }

  return (
    <Container>
      <Label>Nome</Label>
      <Input value={name} onChangeText={setName} placeholder="Ex: João" />

      <Label>Telefone</Label>
      <Input
        value={phone}
        onChangeText={setPhone}
        placeholder="Ex: (11) 99999-0000"
        keyboardType="phone-pad"
      />

      <Button onPress={saveContact}>
        <ButtonText>Salvar Contato</ButtonText>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const Label = styled.Text`
  margin-top: 16px;
  margin-bottom: 4px;
  font-size: 16px;
`;

const Input = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: #0066cc;
  padding: 12px;
  margin-top: 30px;
  border-radius: 6px;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: white;
  font-size: 16px;
`;

