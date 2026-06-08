import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  value: number | null; // 1〜5、null=未選択
  onChange: (value: number | null) => void;
  hasError?: boolean;
  allowNA?: boolean; // 「該当なし」オプションを表示するか
}

const STAR_COUNT = 5;
const STAR_LABELS: Record<number, string> = {
  1: '非常に不満',
  2: '不満',
  3: '普通',
  4: '満足',
  5: '非常に満足',
};
const NA_VALUE = -1; // 「該当なし」を示す特殊値

export function StarRating({ value, onChange, hasError, allowNA }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);

  const isNA = value === NA_VALUE;
  const displayValue = hovered ?? (isNA ? 0 : (value ?? 0));

  return (
    <View className="w-full">
      {/* スター */}
      <View className="flex-row items-center justify-start gap-2 mb-1">
        {Array.from({ length: STAR_COUNT }, (_, i) => i + 1).map((star) => {
          const filled = star <= displayValue;
          return (
            <TouchableOpacity
              key={star}
              activeOpacity={0.7}
              onPress={() => {
                // 同じ星をタップしたら選択解除
                if (value === star) {
                  onChange(null);
                } else {
                  onChange(star);
                }
              }}
              onPressIn={() => setHovered(star)}
              onPressOut={() => setHovered(null)}
              className="p-1"
            >
              <Ionicons
                name={filled ? 'star' : 'star-outline'}
                size={36}
                color={filled ? '#D4A84B' : (hasError ? '#EF4444' : '#D1C4A8')}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* ラベル表示 */}
      <View className="flex-row items-center mb-2 h-5">
        {displayValue > 0 && !isNA ? (
          <Text className="font-noto text-sm font-bold" style={{ color: '#C8622A' }}>
            {STAR_LABELS[displayValue]}
          </Text>
        ) : (
          <Text className="font-noto text-xs text-gray-400">
            {isNA ? '該当なし' : '星をタップして評価してください'}
          </Text>
        )}
      </View>

      {/* 「該当なし」ボタン */}
      {allowNA && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onChange(isNA ? null : NA_VALUE)}
          className={`mt-1 self-start flex-row items-center rounded-full border px-3 py-1 ${
            isNA ? 'border-primary bg-primary-light' : 'border-gray-300 bg-white'
          }`}
        >
          <Ionicons
            name={isNA ? 'checkmark-circle' : 'remove-circle-outline'}
            size={14}
            color={isNA ? '#C8622A' : '#9ca3af'}
          />
          <Text
            className={`ml-1 font-noto text-xs font-bold ${
              isNA ? 'text-primary' : 'text-gray-400'
            }`}
          >
            該当なし
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
