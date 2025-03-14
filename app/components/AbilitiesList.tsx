import React from "react";
import { View, Text } from "react-native";

interface Ability {
  name: string;
}

interface AbilitiesListProps {
  abilities: Ability[];
}

export default function AbilitiesList({ abilities }: AbilitiesListProps) {
  return (
    <View style={{ marginTop: 20 }}>
      {abilities.map((ability, index) => (
        <Text key={index} style={{ marginVertical: 5 }}>
          {ability.name}
        </Text>
      ))}
    </View>
  );
}
