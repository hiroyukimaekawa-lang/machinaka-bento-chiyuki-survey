import React, { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { Header } from '../components/Header';
import { TextArea } from '../components/TextArea';
import { hospitalConfig } from '../constants/hospitalConfig';

export default function ThanksScreen() {
  const params = useLocalSearchParams();
  const tasteScore = Number(params.taste) || 0;
  // 星3以下の場合はGoogleへ誘導しない
  const isLowScore = tasteScore > 0 && tasteScore <= 3;

  const defaultText = "注文したお弁当名や、お気づきの点（お褒めの言葉・改善点）をご自由にお書きください";
  const [reviewDraft, setReviewDraft] = useState(defaultText);
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    await Clipboard.setStringAsync(reviewDraft);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleOpenGoogleMaps = () => {
    Linking.openURL(hospitalConfig.googleReviewUrl);
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#FFFAF6' }}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <Header />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 60, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        {/* ヒーロー完了バナー */}
        <View className="mb-8 w-full items-center">
          <LinearGradient
            colors={['#E8943A', '#C8622A']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ width: '100%', minHeight: 180, alignItems: 'center', justifyContent: 'center', paddingVertical: 32 }}
          >
            {/* チェックマークアイコン */}
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: 'rgba(255,255,255,0.25)',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
              }}
            >
              <Ionicons name="checkmark" size={32} color="white" />
            </View>
            <Text className="font-noto text-2xl font-bold text-white tracking-widest text-center px-4">
              ご協力、ありがとうございました。
            </Text>
            <Text className="font-noto text-sm text-white opacity-80 mt-2 text-center px-6">
              アンケートのご回答が完了しました
            </Text>
          </LinearGradient>
        </View>

        <View className="w-full max-w-[760px] px-6">

          {/* 感謝メッセージ */}
          <View
            className="mb-8 rounded-xl p-5"
            style={{ backgroundColor: '#FDF4EE', borderLeftWidth: 3, borderLeftColor: '#C8622A' }}
          >
            <Text className="font-noto text-sm leading-relaxed text-center" style={{ color: '#7A5C45' }}>
              いただいたご意見は、より美味しいお弁当とより良い配達サービスの向上に活かしてまいります。引き続き「街中弁当 千行」をよろしくお願いいたします。
            </Text>
          </View>

          {/* Google誘導とコピペUI（星4以上のみ表示） */}
          {!isLowScore && (
            <>
              {/* 区切り線 */}
              <View className="mb-8 flex-row items-center justify-center">
                <View className="h-[1px] flex-1" style={{ backgroundColor: '#F0DECE' }} />
                <Ionicons name="restaurant-outline" size={20} color="#C8622A" style={{ marginHorizontal: 16 }} />
                <View className="h-[1px] flex-1" style={{ backgroundColor: '#F0DECE' }} />
              </View>

              {/* クチコミ投稿セクション */}
              <View className="mb-6">
                <Text className="text-center font-noto text-xl font-bold mb-2" style={{ color: '#2D1A0E' }}>
                  Googleクチコミにご協力ください 🙏
                </Text>
                <Text className="font-noto text-sm leading-relaxed mb-6 text-center" style={{ color: '#7A5C45' }}>
                  お客様の声が、他のお客様の参考になります。よろしければ、Googleクチコミへの投稿をお願いいたします。
                </Text>
              </View>

              {/* コピペ支援UI */}
              <View
                className="mb-6 rounded-2xl overflow-hidden"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.08,
                  shadowRadius: 12,
                  elevation: 3,
                }}
              >
                {/* ヘッダー部分 */}
                <View
                  style={{ backgroundColor: '#C8622A' }}
                  className="px-4 py-3 flex-row items-center"
                >
                  <Ionicons name="clipboard-outline" size={16} color="white" />
                  <Text className="font-noto text-sm font-bold text-white ml-2 flex-1">
                    👇 以下の文章をコピーしてクチコミに貼り付けられます
                  </Text>
                </View>

                {/* テキスト編集エリア */}
                <View className="bg-white p-4">
                  <TextArea
                    value={reviewDraft}
                    onChangeText={setReviewDraft}
                    className="bg-white border-gray-200"
                  />
                </View>

                {/* コピーボタン */}
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={handleCopyToClipboard}
                  style={{ backgroundColor: copied ? '#10b981' : '#FDF4EE' }}
                  className="px-4 py-4 flex-row items-center justify-center border-t border-gray-100"
                >
                  <Ionicons
                    name={copied ? 'checkmark-circle' : 'copy-outline'}
                    size={20}
                    color={copied ? 'white' : '#C8622A'}
                  />
                  <Text
                    className="font-noto text-base font-bold ml-2"
                    style={{ color: copied ? 'white' : '#C8622A' }}
                  >
                    {copied ? '✅ コピー完了！' : '📋 投稿文をコピーする'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Googleマップ クチコミボタン */}
              <View
                className="items-center mt-2 mb-4"
                style={{
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                  padding: 0,
                  marginHorizontal: 0,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={handleOpenGoogleMaps}
                  className="outline-none border-0"
                  style={{
                    width: '100%',
                    maxWidth: 400,
                    backgroundColor: 'transparent',
                    borderWidth: 0,
                    shadowColor: '#C8622A',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 12,
                    elevation: 6,
                    // @ts-ignore
                    outlineStyle: 'none',
                    // @ts-ignore
                    outlineWidth: 0,
                  }}
                >
                  <LinearGradient
                    colors={['#E8943A', '#C8622A']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                      borderRadius: 50,
                      paddingVertical: 18,
                      paddingHorizontal: 24,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Ionicons name="map-outline" size={22} color="white" style={{ marginRight: 10 }} />
                    <Text className="font-noto text-base font-bold text-white tracking-wider">
                      🗺️ Googleマップを開いてクチコミを書く
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>

                <Text className="font-noto text-xs mt-3 text-center" style={{ color: '#B09080' }}>
                  ※ Googleマップのクチコミページに移動します
                </Text>
              </View>
            </>
          )}

          {/* 前のページへ戻るリンク */}
          <View className="items-center mt-8 mb-4">
            <TouchableOpacity onPress={() => router.replace('/')}>
              <Text className="font-noto text-sm underline" style={{ color: '#B09080' }}>
                最初のページに戻る
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
