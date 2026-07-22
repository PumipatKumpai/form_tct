import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { RadioButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Form() {
  const depts = [
    {
      label: "Please Select Department",
      value: "",
      index: 0,
    },
    {
      label: "Civil Engineering",
      value: "CE",
      index: 1,
    },
    {
      label: "Computer Education",
      value: "CED",
      index: 2,
    },
    {
      label: "Electrical Engineering",
      value: "EE",
      index: 3,
    },
    {
      label: "Mechanical Engineering",
      value: "ME",
      index: 4,
    },
  ];

  const [data, setData] = useState({
    name: "",
    gender: "",
    dept: "",
    comment: "",
    isAgree: false,
  });

  const selectedDepartment =
    depts.find((item) => item.value === data.dept)?.label ||
    "Not selected";

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
          {/* Decorative background */}
          <View style={styles.circleOne} />
          <View style={styles.circleTwo} />

          {/* Header */}
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Text style={styles.headerIcon}>📝</Text>
            </View>

            <Text style={styles.title}>CED Form</Text>

            <Text style={styles.subtitle}>
              Please complete your information
            </Text>
          </View>

          {/* Display result */}
          <View style={styles.displayCard}>
            <View style={styles.displayHeader}>
              <Text style={styles.displayIcon}>👤</Text>
              <Text style={styles.displayTitle}>Your Information</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.informationRow}>
              <Text style={styles.informationLabel}>Name</Text>
              <Text style={styles.informationValue}>
                {data.name || "Not entered"}
              </Text>
            </View>

            <View style={styles.informationRow}>
              <Text style={styles.informationLabel}>Gender</Text>
              <Text style={styles.informationValue}>
                {data.gender || "Not selected"}
              </Text>
            </View>

            <View style={styles.informationRow}>
              <Text style={styles.informationLabel}>Department</Text>
              <Text style={styles.informationValue}>
                {selectedDepartment}
              </Text>
            </View>

            <View style={styles.informationRow}>
              <Text style={styles.informationLabel}>Comment</Text>
              <Text style={styles.informationValue}>
                {data.comment || "No comment"}
              </Text>
            </View>

            <View style={styles.informationRow}>
              <Text style={styles.informationLabel}>Agreement</Text>

              <View
                style={[
                  styles.statusBadge,
                  data.isAgree
                    ? styles.agreeBadge
                    : styles.notAgreeBadge,
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    data.isAgree
                      ? styles.agreeText
                      : styles.notAgreeText,
                  ]}
                >
                  {data.isAgree ? "Yes" : "No"}
                </Text>
              </View>
            </View>
          </View>

          {/* Form */}
          <View style={styles.formCard}>
            <Text style={styles.sectionTitle}>Personal Information</Text>

            {/* Name */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Name</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>👤</Text>

                <TextInput
                  style={styles.input}
                  value={data.name}
                  onChangeText={(text) =>
                    setData({
                      ...data,
                      name: text,
                    })
                  }
                  placeholder="Enter your name"
                  placeholderTextColor="#9AA5B1"
                />
              </View>
            </View>

            {/* Gender */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Gender</Text>

              <RadioButton.Group
                value={data.gender}
                onValueChange={(value) =>
                  setData({
                    ...data,
                    gender: value,
                  })
                }
              >
                <View style={styles.genderContainer}>
                  <View
                    style={[
                      styles.genderOption,
                      data.gender === "Male" &&
                        styles.selectedGenderOption,
                    ]}
                  >
                    <RadioButton
                      value="Male"
                      color="#4D7CFE"
                    />

                    <Text style={styles.genderIcon}>👨</Text>
                    <Text style={styles.genderText}>Male</Text>
                  </View>

                  <View
                    style={[
                      styles.genderOption,
                      data.gender === "Female" &&
                        styles.selectedGenderOption,
                    ]}
                  >
                    <RadioButton
                      value="Female"
                      color="#4D7CFE"
                    />

                    <Text style={styles.genderIcon}>👩</Text>
                    <Text style={styles.genderText}>Female</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>

            {/* Department */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Department</Text>

              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.searchInput}
                iconStyle={styles.dropdownIcon}
                containerStyle={styles.dropdownContainer}
                activeColor="#EEF4FF"
                data={depts}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select department"
                search
                searchPlaceholder="Search department"
                value={data.dept}
                onChange={(item) =>
                  setData({
                    ...data,
                    dept: item.value,
                  })
                }
              />
            </View>

            {/* Comment */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Comment</Text>

              <TextInput
                style={styles.comment}
                multiline
                textAlignVertical="top"
                value={data.comment}
                onChangeText={(text) =>
                  setData({
                    ...data,
                    comment: text,
                  })
                }
                placeholder="Enter your comment"
                placeholderTextColor="#9AA5B1"
                maxLength={200}
              />

              <Text style={styles.characterCount}>
                {data.comment.length}/200
              </Text>
            </View>

            {/* Agreement */}
            <View style={styles.switchCard}>
              <View style={styles.switchTextContainer}>
                <Text style={styles.switchTitle}>
                  Do you agree?
                </Text>

                <Text style={styles.switchDescription}>
                  Confirm that the information is correct
                </Text>
              </View>

              <Switch
                trackColor={{
                  false: "#D6DCE5",
                  true: "#A9C0FF",
                }}
                thumbColor={
                  data.isAgree ? "#4D7CFE" : "#FFFFFF"
                }
                ios_backgroundColor="#D6DCE5"
                value={data.isAgree}
                onValueChange={(value) =>
                  setData({
                    ...data,
                    isAgree: value,
                  })
                }
              />
            </View>
          </View>
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
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 45,
    backgroundColor: "#EEF5FF",
  },

  circleOne: {
    position: "absolute",
    top: -70,
    right: -45,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "#D8E9FF",
  },

  circleTwo: {
    position: "absolute",
    bottom: 100,
    left: -80,
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "#DDEAFF",
  },

  header: {
    alignItems: "center",
    marginBottom: 24,
  },

  iconContainer: {
    width: 72,
    height: 72,
    marginBottom: 12,
    borderRadius: 36,
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
    fontSize: 38,
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

  displayCard: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 23,
    backgroundColor: "#4D7CFE",
    shadowColor: "#244A9F",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.22,
    shadowRadius: 10,
    elevation: 7,
  },

  displayHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  displayIcon: {
    marginRight: 9,
    fontSize: 24,
  },

  displayTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  divider: {
    height: 1,
    marginVertical: 15,
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  informationRow: {
    minHeight: 34,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  informationLabel: {
    width: "36%",
    fontSize: 14,
    fontWeight: "600",
    color: "#DCE7FF",
  },

  informationValue: {
    width: "61%",
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "right",
  },

  statusBadge: {
    minWidth: 55,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    alignItems: "center",
  },

  agreeBadge: {
    backgroundColor: "#DDF8E9",
  },

  notAgreeBadge: {
    backgroundColor: "#FFE5E5",
  },

  statusText: {
    fontSize: 12,
    fontWeight: "bold",
  },

  agreeText: {
    color: "#26845A",
  },

  notAgreeText: {
    color: "#D84C4C",
  },

  formCard: {
    padding: 20,
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

  sectionTitle: {
    marginBottom: 22,
    fontSize: 20,
    fontWeight: "bold",
    color: "#263B56",
  },

  formGroup: {
    marginBottom: 21,
  },

  label: {
    marginBottom: 9,
    fontSize: 15,
    fontWeight: "bold",
    color: "#44566C",
  },

  inputContainer: {
    height: 55,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderColor: "#D8E2F0",
    borderRadius: 15,
    backgroundColor: "#F8FAFD",
    flexDirection: "row",
    alignItems: "center",
  },

  inputIcon: {
    marginRight: 10,
    fontSize: 20,
  },

  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#263B56",
  },

  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  genderOption: {
    width: "48%",
    minHeight: 58,
    paddingHorizontal: 4,
    borderWidth: 1.5,
    borderColor: "#D8E2F0",
    borderRadius: 15,
    backgroundColor: "#F8FAFD",
    flexDirection: "row",
    alignItems: "center",
  },

  selectedGenderOption: {
    borderColor: "#4D7CFE",
    backgroundColor: "#EEF4FF",
  },

  genderIcon: {
    marginRight: 4,
    fontSize: 20,
  },

  genderText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#44566C",
  },

  dropdown: {
    height: 55,
    paddingHorizontal: 15,
    borderWidth: 1.5,
    borderColor: "#D8E2F0",
    borderRadius: 15,
    backgroundColor: "#F8FAFD",
  },

  placeholderStyle: {
    fontSize: 15,
    color: "#9AA5B1",
  },

  selectedTextStyle: {
    fontSize: 15,
    color: "#263B56",
  },

  searchInput: {
    height: 45,
    borderRadius: 10,
    fontSize: 15,
  },

  dropdownIcon: {
    width: 23,
    height: 23,
  },

  dropdownContainer: {
    borderRadius: 14,
    borderColor: "#D8E2F0",
    overflow: "hidden",
  },

  comment: {
    minHeight: 110,
    paddingHorizontal: 15,
    paddingTop: 14,
    paddingBottom: 14,
    borderWidth: 1.5,
    borderColor: "#D8E2F0",
    borderRadius: 15,
    backgroundColor: "#F8FAFD",
    fontSize: 16,
    color: "#263B56",
  },

  characterCount: {
    marginTop: 6,
    fontSize: 12,
    color: "#8A97A8",
    textAlign: "right",
  },

  switchCard: {
    minHeight: 78,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 16,
    backgroundColor: "#EEF4FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  switchTextContainer: {
    flex: 1,
    paddingRight: 15,
  },

  switchTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#263B56",
  },

  switchDescription: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 17,
    color: "#708090",
  },
});