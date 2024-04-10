import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getRandom } from "../../lib/util";

const COLORS = ["#EE8434", "#C95D63", "#AE8799", "#717EC3", "#496DDB"];

export default function Ye() {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState("");
  const [color, setColor] = useState(COLORS[0]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setLoading(true);
    try {
      const { quote } = await fetch(`https://api.kanye.rest`).then((r) =>
        r.json()
      );
      setQuote(quote);
      setColor(getRandom(COLORS));
    } catch (e) {
      console.error("Error fetching kanye quote: ", e);
    }
    setLoading(false);
  };

  return (
    <View style={[styles.ctr, { backgroundColor: color }]}>
      <Text style={styles.quote}>{quote}</Text>
      <View />
      <TouchableOpacity style={styles.btn} title="Refresh" onPress={load}>
        <Text style={{ fontSize: 18, color: "white" }}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ctr: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
  },
  quote: {
    color: "white",
    fontSize: 48,
    padding: 20,
  },
  btnCtr: {
    position: "relative",
    backgroundColor: "red",
  },
  btn: {
    position: "absolute",
    bottom: 60,
    paddingVertical: 24,
    width: "90%",
    backgroundColor: "rgba(217,217,217, .22)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
