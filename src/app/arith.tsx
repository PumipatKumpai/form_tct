import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Arith() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [result, setResult] = useState("0");

  const validateInput = () => {
    if (x.trim() === "" || y.trim() === "") {
      setResult("Please enter both numbers");
      return false;
    }

    return true;
  };

  const addNumber = () => {
    if (!validateInput()) return;
    setResult(String(Number(x) + Number(y)));
  };

  const subtractNumber = () => {
    if (!validateInput()) return;
    setResult(String(Number(x) - Number(y)));
  };

  const multiplyNumber = () => {
    if (!validateInput()) return;
    setResult(String(Number(x) * Number(y)));
  };

  const divideNumber = () => {
    if (!validateInput()) return;

    if (Number(y) === 0) {
      setResult("Cannot divide by zero");
      return;
    }

    setResult(String(Number(x) / Number(y)));
  };

  const resetNumber = () => {
    setX("");
    setY("");
    setResult("0");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.decorationOne} />
          <View style={styles.decorationTwo} />

          <View style={styles.header}>
            <Text style={styles.headerIcon}>🧮</Text>
            <Text style={styles.title}>Arithmetic Calculator</Text>
            <Text style={styles.subtitle}>
              Enter two numbers and select an operation
            </Text>
          </View>

          <View style={styles.resultCard}>
            <Text style={styles.resultLabel}>RESULT</Text>
            <Text
              style={styles.resultValue}
              numberOfLines={2}
              adjustsFontSizeToFit
            >
              {result}
            </Text>
          </View>

          <View style={styles.formCard}>
            <Text style={styles.sectionTitle}>Enter Numbers</Text>

            <Text style={styles.inputLabel}>Number X</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter number (x)"
              placeholderTextColor="#9AA5B1"
              value={x}
              onChangeText={setX}
            />

            <Text style={styles.inputLabel}>Number Y</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter number (y)"
              placeholderTextColor="#9AA5B1"
              value={y}
              onChangeText={setY}
            />
          </View>

          <View style={styles.buttonGrid}>
            <TouchableOpacity
              style={[styles.operationButton, styles.addButton]}
              activeOpacity={0.8}
              onPress={addNumber}
            >
              <Text style={styles.operationSymbol}>＋</Text>
              <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.operationButton, styles.subtractButton]}
              activeOpacity={0.8}
              onPress={subtractNumber}
            >
              <Text style={styles.operationSymbol}>−</Text>
              <Text style={styles.buttonText}>SUB</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.operationButton, styles.multiplyButton]}
              activeOpacity={0.8}
              onPress={multiplyNumber}
            >
              <Text style={styles.operationSymbol}>×</Text>
              <Text style={styles.buttonText}>MUL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.operationButton, styles.divideButton]}
              activeOpacity={0.8}
              onPress={divideNumber}
            >
              <Text style={styles.operationSymbol}>÷</Text>
              <Text style={styles.buttonText}>DIV</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.resetButton}
            activeOpacity={0.8}
            onPress={resetNumber}
          >
            <Text style={styles.resetIcon}>↻</Text>
            <Text style={styles.resetText}>RESET</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#EEF5FF",
  },

  keyboardView: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: "#EEF5FF",
  },

  decorationOne: {
    position: "absolute",
    top: -50,
    right: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#D8E9FF",
  },

  decorationTwo: {
    position: "absolute",
    bottom: 30,
    left: -70,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#DDEAFF",
  },

  header: {
    alignItems: "center",
    marginBottom: 24,
  },

  headerIcon: {
    fontSize: 48,
    marginBottom: 8,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F3A5F",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 7,
    fontSize: 14,
    color: "#708090",
    textAlign: "center",
  },

  resultCard: {
    minHeight: 130,
    padding: 22,
    marginBottom: 20,
    borderRadius: 24,
    backgroundColor: "#4D7CFE",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#244A9F",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.22,
    shadowRadius: 10,
    elevation: 7,
  },

  resultLabel: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#DCE7FF",
  },

  resultValue: {
    marginTop: 10,
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },

  formCard: {
    padding: 20,
    marginBottom: 20,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    shadowColor: "#687C99",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  sectionTitle: {
    marginBottom: 17,
    fontSize: 19,
    fontWeight: "bold",
    color: "#263B56",
  },

  inputLabel: {
    marginBottom: 7,
    fontSize: 14,
    fontWeight: "600",
    color: "#53657D",
  },

  input: {
    height: 54,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: "#D8E2F0",
    borderRadius: 15,
    backgroundColor: "#F8FAFD",
    fontSize: 17,
    color: "#263B56",
  },

  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  operationButton: {
    width: "48%",
    minHeight: 92,
    marginBottom: 14,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#687C99",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 4,
  },

  addButton: {
    backgroundColor: "#50B788",
  },

  subtractButton: {
    backgroundColor: "#FF9F43",
  },

  multiplyButton: {
    backgroundColor: "#8D72E1",
  },

  divideButton: {
    backgroundColor: "#4FA7D8",
  },

  operationSymbol: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  buttonText: {
    marginTop: 3,
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 1,
  },

  resetButton: {
    height: 58,
    marginTop: 4,
    borderWidth: 1.5,
    borderColor: "#E16363",
    borderRadius: 18,
    backgroundColor: "#FFF4F4",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  resetIcon: {
    marginRight: 8,
    fontSize: 23,
    fontWeight: "bold",
    color: "#D84C4C",
  },

  resetText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D84C4C",
    letterSpacing: 1,
  },
});