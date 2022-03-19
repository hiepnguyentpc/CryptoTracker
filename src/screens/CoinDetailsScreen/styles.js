import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },

  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  tickerTitle: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 5,
    fontSize: 17,
  },

  rankContainer: {
    backgroundColor: "#585858",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },

  nameContainer: {
    color: "white",
    fontSize: 15,
  },

  currentPriceContainer: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  priceChange: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  priceChangeContainer: {
    padding: 5,
    borderRadius: 5,
    flexDirection: "row"
  },
  priceContainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;
