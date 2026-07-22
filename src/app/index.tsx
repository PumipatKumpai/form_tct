import { Link } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrease = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Background decorations */}
        <View style={styles.circleOne} />
        <View style={styles.circleTwo} />

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Text style={styles.headerIcon}>🔢</Text>
          </View>

          <Text style={styles.title}>Counter App</Text>

          <Text style={styles.subtitle}>
            Increase, decrease, or reset the number
          </Text>
        </View>

        {/* Counter display */}
        <View style={styles.counterCard}>
          <Text style={styles.counterLabel}>CURRENT COUNT</Text>

          <Text
            style={styles.counterValue}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {count}
          </Text>
        </View>

        {/* Counter buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.operationButton, styles.decreaseButton]}
            activeOpacity={0.8}
            onPress={decrease}
          >
            <Text style={styles.operationSymbol}>−</Text>
            <Text style={styles.buttonText}>DECREASE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.operationButton, styles.increaseButton]}
            activeOpacity={0.8}
            onPress={increase}
          >
            <Text style={styles.operationSymbol}>＋</Text>
            <Text style={styles.buttonText}>INCREASE</Text>
          </TouchableOpacity>
        </View>

        {/* Reset button */}
        <TouchableOpacity
          style={styles.resetButton}
          activeOpacity={0.8}
          onPress={reset}
        >
          <Text style={styles.resetIcon}>↻</Text>
          <Text style={styles.resetText}>RESET COUNTER</Text>
        </TouchableOpacity>

        {/* Navigation */}
        <View style={styles.navigationCard}>
          <Text style={styles.navigationTitle}>Explore More</Text>

          <Link href="/arith" asChild>
            <TouchableOpacity
              style={styles.navigationButton}
              activeOpacity={0.8}
            >
              <View style={styles.navigationIconContainer}>
                <Text style={styles.navigationIcon}>🧮</Text>
              </View>

              <View style={styles.navigationTextContainer}>
                <Text style={styles.navigationButtonTitle}>
                  Arithmetic Calculator
                </Text>

                <Text style={styles.navigationDescription}>
                  ADD, SUB, MUL and DIV
                </Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/form" asChild>
            <TouchableOpacity
              style={styles.navigationButton}
              activeOpacity={0.8}
            >
              <View style={styles.navigationIconContainer}>
                <Text style={styles.navigationIcon}>📝</Text>
              </View>

              <View style={styles.navigationTextContainer}>
                <Text style={styles.navigationButtonTitle}>
                  CED Form
                </Text>

                <Text style={styles.navigationDescription}>
                  Enter and display information
                </Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#EEF5FF",
  },

  container: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 30,
    paddingBottom: 45,
    backgroundColor: "#EEF5FF",
  },

  circleOne: {
    position: "absolute",
    top: -55,
    right: -45,
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: "#D8E9FF",
  },

  circleTwo: {
    position: "absolute",
    bottom: 60,
    left: -80,
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "#DDEAFF",
  },

  header: {
    alignItems: "center",
    marginBottom: 25,
  },

  iconContainer: {
    width: 76,
    height: 76,
    marginBottom: 12,
    borderRadius: 38,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#687C99",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 7,
    elevation: 5,
  },

  headerIcon: {
    fontSize: 40,
  },

  title: {
    fontSize: 30,
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

  counterCard: {
    minHeight: 190,
    marginBottom: 22,
    padding: 25,
    borderRadius: 28,
    backgroundColor: "#4D7CFE",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#244A9F",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11,
    elevation: 8,
  },

  counterLabel: {
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#DCE7FF",
  },

  counterValue: {
    width: "100%",
    marginTop: 8,
    fontSize: 72,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  operationButton: {
    width: "48%",
    minHeight: 105,
    marginBottom: 15,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#687C99",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.16,
    shadowRadius: 7,
    elevation: 4,
  },

  decreaseButton: {
    backgroundColor: "#FF9F43",
  },

  increaseButton: {
    backgroundColor: "#50B788",
  },

  operationSymbol: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  buttonText: {
    marginTop: 3,
    fontSize: 13,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: 0.7,
  },

  resetButton: {
    height: 58,
    marginBottom: 23,
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
    fontSize: 15,
    fontWeight: "bold",
    color: "#D84C4C",
    letterSpacing: 0.8,
  },

  navigationCard: {
    padding: 19,
    borderRadius: 23,
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

  navigationTitle: {
    marginBottom: 15,
    fontSize: 20,
    fontWeight: "bold",
    color: "#263B56",
  },

  navigationButton: {
    minHeight: 76,
    marginBottom: 12,
    paddingHorizontal: 13,
    paddingVertical: 11,
    borderWidth: 1.5,
    borderColor: "#DCE6F3",
    borderRadius: 17,
    backgroundColor: "#F8FAFD",
    flexDirection: "row",
    alignItems: "center",
  },

  navigationIconContainer: {
    width: 48,
    height: 48,
    marginRight: 12,
    borderRadius: 15,
    backgroundColor: "#E6EEFF",
    justifyContent: "center",
    alignItems: "center",
  },

  navigationIcon: {
    fontSize: 25,
  },

  navigationTextContainer: {
    flex: 1,
  },

  navigationButtonTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#263B56",
  },

  navigationDescription: {
    marginTop: 4,
    fontSize: 12,
    color: "#78889C",
  },

  arrow: {
    marginLeft: 8,
    fontSize: 30,
    color: "#4D7CFE",
  },
});