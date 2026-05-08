import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { hospitalConfig } from '../constants/hospitalConfig';

export function Header() {
  return (
    <View className="w-full border-b border-gray-100 bg-white py-4 shadow-sm z-10">
      <View className="flex-row items-center justify-center px-4">
        <View 
          className="mr-2 h-8 w-8 items-center justify-center rounded-full"
          style={{ backgroundColor: `${hospitalConfig.primaryColor}20` }}
        >
          <Ionicons name={hospitalConfig.headerIcon as any} size={20} color={hospitalConfig.primaryColor} />
        </View>
        <Text 
          className="font-noto text-xl font-bold tracking-tighter"
          style={{ color: hospitalConfig.primaryColor }}
        >
          {hospitalConfig.hospitalName}
        </Text>
      </View>
    </View>
  );
}
