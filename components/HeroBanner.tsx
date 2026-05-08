import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { hospitalConfig } from '../constants/hospitalConfig';

export function HeroBanner() {
  return (
    <View className="mb-8 w-full items-center">
      <LinearGradient
        colors={[hospitalConfig.accentColor, hospitalConfig.primaryColor]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="w-full h-[220px] items-center justify-center sm:h-[260px]"
      >
        <Text className="font-noto text-sm tracking-[0.2em] text-white opacity-90 uppercase mb-2">
          Questionnaire
        </Text>
        <Text className="font-noto text-3xl sm:text-4xl font-bold text-white tracking-widest mb-4 text-center px-4">
          {hospitalConfig.bannerTitle}
        </Text>
        <View className="h-[2px] w-12 bg-white/50 mb-6" />
        <Text className="font-noto text-sm sm:text-base text-white opacity-90 px-6 text-center leading-relaxed">
          {hospitalConfig.bannerDescription}
        </Text>
      </LinearGradient>
    </View>
  );
}
