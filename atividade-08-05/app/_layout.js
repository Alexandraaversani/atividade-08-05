import React from "react";
import { Stack } from "expo-router";
import { Pressable, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Layout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#0066cc" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "📇 Contatos",
          headerRight: () => (
            <Pressable
              onPress={() => router.push("/add")}
              style={styles.addButton}
            >
              <Text style={styles.addText}>＋</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="add" options={{ title: "➕ Novo Contato" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  addButton: {
    marginRight: 16,
  },
  addText: {
    fontSize: 24,
    color: "#fff",
  },
});
