import React, { useState, useEffect } from "react";
import { Dimensions, View, Text, TextInput } from "react-native";
import CoinDetailHeader from "./components/CoinDetailHeader";
import Coin from "/Users/hiepnnguyen/CryptoTracker/assets/Crypto Tracker Assets/data/crypto.json";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native"

import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";

const CoinDetailsScreen = () => {
  const {
    image: { small },
    name,
    symbol,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  

  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUSDValue] = useState(current_price.usd.toString());
  
  const route = useRoute();
  const {params: {coinId}} = route;

  console.log(coinId)

  const percentageColor =
    price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";
  const upOrDown = price_change_percentage_24h < 0 ? "caretdown" : "caretup";
  const screenWidth = Dimensions.get("window").width;
  const chartColor = current_price.usd > prices[0][1] ? "#16c784" : "#ea3943";

  useEffect(() => {
    const floatValue = parseFloat(coinValue.replace(',','.')) || 0
    setUSDValue((floatValue*current_price.usd).toString())
  },[coinValue])

  useEffect(() => {
    const floatValue = parseFloat(usdValue.replace(',','.')) || 0
    setCoinValue((floatValue/current_price.usd).toString())

  },[usdValue])


  const formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <ChartPathProvider
        data={{
          points: prices.map((price) => ({ x: price[0], y: price[1] })),
          smoothingStrategy: "bezier",
        }}
      >
        {/* header installation */}
        <CoinDetailHeader
          image={small}
          marketCapRank={market_cap_rank}
          symbol={symbol}
        />

        {/* price container installation */}
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.nameContainer}>{name}</Text>
            <ChartYLabel
              format={formatCurrency}
              style={styles.currentPriceContainer}
            />
          </View>

          <View
            style={{
              backgroundColor: percentageColor,
              paddingHorizontal: 3,
              paddingVertical: 8,
              borderRadius: 5,
              flexDirection: "row",
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

        {/* chart installation */}
        <View>
          <ChartPath
            strokeWidth={2}
            height={screenWidth / 2}
            stroke={chartColor}
            width={screenWidth}
          />
          <ChartDot style={{ backgroundColor: chartColor }} />
        </View>
      </ChartPathProvider>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text style={styles.symbolStyle}>{symbol.toUpperCase()}</Text>
          <TextInput
            style={styles.input}
            value={coinValue.toString()}
            keyboardType="numeric"
            onChangeText = {setCoinValue}

          />
        </View>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text style={styles.symbolStyle}>USD</Text>
          <TextInput
            style={styles.input}
            value={usdValue.toString()}
            keyboardType="numeric"
            onChangeText = {setUSDValue}

          />
        </View>
      </View>
    </View>
  );
};
export default CoinDetailsScreen;
