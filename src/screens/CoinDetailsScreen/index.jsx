import React from "react";
import { View, Text } from "react-native";
import CoinDetailHeader from "./components/CoinDetailHeader";
import Coin from "/Users/hiepnnguyen/CryptoTracker/assets/Crypto Tracker Assets/data/crypto.json";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const CoinDetailsScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;
  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";
  const upOrDown = price_change_percentage_24h < 0 ? "caretdown" : "caretup";

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <CoinDetailHeader
        image={small}
        marketCapRank={market_cap_rank}
        symbol={symbol}
      />

      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.nameContainer}>{name}</Text>
          <Text style={styles.currentPriceContainer}>${current_price.usd}</Text>
        </View>

        <View
          style={{
            backgroundColor: percentageColor,
            paddingHorizontal: 3,
            paddingVertical: 8,
            borderRadius: 5,
            flexDirection: "row"
          }}
        >
          <AntDesign
            name={upOrDown}
            size={12}
            color="white"
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={styles.priceChange}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  );
};
export default CoinDetailsScreen;
