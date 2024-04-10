import { Text, TouchableOpacity } from "react-native";

const DEFAULT_BTN = {
  style: {
    paddingVertical: 24,
    width: "90%",
    backgroundColor: "#EE8434",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
};

const DEFAULT_TEXT = {
  style: { fontSize: 18, color: "white" },
};

export default function Btn({
  btnProps = DEFAULT_BTN,
  textProps = DEFAULT_TEXT,
  text = "Click me",
  ...restBtnProps
}) {
  return (
    <TouchableOpacity {...restBtnProps} {...btnProps}>
      <Text {...textProps}>{text}</Text>
    </TouchableOpacity>
  );
}
