import React from "react";
import { View } from "react-native";


import CoinDetailHeader from "./components/CoinDetailHeader";
import Coin from "/Users/hiepnnguyen/CryptoTracker/assets/Crypto Tracker Assets/data/crypto.json"


const CoinDetailsScreen = () => {
    const {
        image: { small },
        name,
        symbol,
        market_data: { market_cap_rank },
      } = Coin;

  return (
    <View>
      <CoinDetailHeader image={small} marketCapRank={market_cap_rank} symbol = {symbol} />
    </View>
  );
};
export default CoinDetailsScreen;
