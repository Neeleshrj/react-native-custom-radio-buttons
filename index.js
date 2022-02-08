import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function RadioButtons({
  text,
  setOption,
  selected,
  radioButtonBorderColor = "#000",
  radioButtonSize = 20,
  selectedRadioButtonColor = "#000",
  optionTextStyling,
}) {
  let selectedRadioButtonSize = parseInt(radioButtonSize)/2;
  return (
    <TouchableOpacity
      onPress={() => {
        setOption(text);
      }}
    >
      <View style={styles.option}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={optionTextStyling}>{text}</Text>
          <View
            style={[
              styles.radio,
              {
                borderColor: radioButtonBorderColor,
                height: radioButtonSize,
                width: radioButtonSize,
              },
            ]}
          >
            <View
              style={
                selected === text
                  ? [
                      styles.selected,
                      {
                        backgroundColor: selectedRadioButtonColor,
                        height: selectedRadioButtonSize,
                        width: selectedRadioButtonSize,
                      },
                    ]
                  : null
              }
            ></View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  radio: {
    borderRadius: 100,
    borderWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    borderRadius: 100,
    backgroundColor: "#000",
  },
});
