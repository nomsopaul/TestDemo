import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchInput, { createFilter } from "react-native-search-filter";
import ChatList from "./widget";

export default function ChatScreen() {
  const [search, setSearch] = useState({ searchTerm: "" });
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("https://newsapi.org/v2/top-headlines?country=us", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 3dd6e2017fa140acb967d96bec56a5a2`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.articles);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const searchUpdated = (text: string) => setSearch({ searchTerm: text });

  const KeysToFilter = ["title", "description"];

  const filteredWords =
    data && data?.filter(createFilter(search.searchTerm, KeysToFilter));

  const _renderItem = ({ item }: { item: any }) => (
    <ChatList key={item.authour} {...item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent animated style="dark" />
      <View style={styles.cover}>
        <Text style={styles.title}>Search</Text>
        <SearchInput
          onChangeText={searchUpdated}
          placeholder="Search by user or places"
          placeholderTextColor="#ccc"
          style={{
            height: 40,
            color: "#535D7E",
            backgroundColor: "#fff",
            alignItems: "center",
            borderRadius: 4,
            paddingHorizontal: 10,
            marginVertical: 25,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        />
        <Text style={[styles.title, { marginTop: 0 }]}>Chats</Text>
        <FlatList
          data={filteredWords}
          contentContainerStyle={{
            flexGrow: 1,
            marginTop: 20,
            paddingBottom: 230,
          }}
          ListEmptyComponent={
            <Text
              style={{
                fontSize: 18,
                margin: 20,
                textAlign: "center",
              }}
            >
              You currently don't have any chat
            </Text>
          }
          showsVerticalScrollIndicator={false}
          renderItem={_renderItem}
          // keyExtractor={({ id }) => id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 40,
  },
  cover: {
    paddingHorizontal: 10,
  },
});
