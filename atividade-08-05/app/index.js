import React, { useState, useCallback } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import ContactCard from "../components/ContactCard.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

export default function ContactListScreen() {
  const [contacts, setContacts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadContacts();
    }, [])
  );

  async function loadContacts() {
    try {
      const stored = await AsyncStorage.getItem("contacts");
      if (stored) {
        setContacts(JSON.parse(stored));
      } else {
        setContacts([]);
      }
    } catch (e) {
      console.error("Erro ao carregar contatos:", e);
    }
  }

  return (
    <Container>
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => item.id || String(index)}
        renderItem={({ item }) => (
          <ContactCard name={item.name} phone={item.phone} />
        )}
        ListEmptyComponent={
          <EmptyText>Nenhum contato adicionado.</EmptyText>
        }
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
  padding: 16px;
`;

const EmptyText = styled.Text`
  text-align: center;
  margin-top: 30px;
  color: #666;
`;

