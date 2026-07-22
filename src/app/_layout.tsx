import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4D7CFE",
        },
        headerTintColor: "#FFFFFF",
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#EEF5FF",
        },
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "App Menu",
          headerBackVisible: false,
        }}
      />

      <Stack.Screen
        name="arith"
        options={{
          title: "Arithmetic Calculator",
        }}
      />

      <Stack.Screen
        name="form"
        options={{
          title: "Registration Form",
        }}
      />
    </Stack>
  );
}
