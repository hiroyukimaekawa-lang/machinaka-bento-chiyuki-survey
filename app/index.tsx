import React from 'react';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Alert, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Header } from '../components/Header';
import { HeroBanner } from '../components/HeroBanner';
import { StarRating } from '../components/StarRating';
import { SubmitButton } from '../components/SubmitButton';
import { FormError } from '../components/FormError';

import { useSurveyForm } from '../hooks/useSurveyForm';
import questionsData from '../questions/surveyQuestions.json';
import { SurveyFormState } from '../types/survey';

function RequiredBadge() {
  return (
    <Text className="ml-1 text-sm font-bold text-[#D34141]">※必須</Text>
  );
}

export default function SurveyScreen() {
  const { form, errors, submitting, updateField, submit } = useSurveyForm();

  const onSubmit = async () => {
    const result = await submit();

    if (!result.success) {
      if ('validationError' in result && result.validationError) {
        Alert.alert('入力エラー', '必須項目をご確認ください。');
      } else {
        Alert.alert('送信に失敗しました', '通信環境をご確認の上、再度お試しください。');
      }
      return;
    }

    router.replace({
      pathname: '/thanks',
      params: { taste: form.taste }, // 評価を渡す
    });
  };

  const renderQuestion = (question: any) => {
    const error = errors[question.id as keyof SurveyFormState];
    const value = form[question.id as keyof SurveyFormState];

    return (
      <View key={question.id} className="mb-8 w-full">
        {/* 質問タイトル */}
        <View className="mb-3 flex-row items-start flex-wrap">
          <Text className="font-noto text-base font-bold" style={{ color: '#2D1A0E', flex: 1 }}>
            {question.title}
          </Text>
          {question.required && <RequiredBadge />}
        </View>

        {/* サブタイトル（任意項目の補足説明など） */}
        {question.subtitle ? (
          <Text className="font-noto text-xs mb-3" style={{ color: '#9A7A63' }}>
            {question.subtitle}
          </Text>
        ) : null}

        {/* 5段階スター評価（必須） */}
        {question.type === 'star' && (
          <StarRating
            value={value ? Number(value) : null}
            onChange={(val) =>
              updateField(question.id as keyof SurveyFormState, val !== null ? String(val) : '')
            }
            hasError={!!error}
            allowNA={false}
          />
        )}

        <FormError error={error} />
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#FFFAF6' }}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <Header />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <HeroBanner />

        <View className="w-full max-w-[760px] px-6">
          {/* 案内文 */}
          <View
            className="mb-8 rounded-xl p-4 flex-row items-start"
            style={{ backgroundColor: '#FDF4EE', borderLeftWidth: 3, borderLeftColor: '#C8622A' }}
          >
            <Ionicons name="information-circle-outline" size={18} color="#C8622A" style={{ marginTop: 2, marginRight: 8 }} />
            <Text className="font-noto text-sm leading-relaxed flex-1" style={{ color: '#7A5C45' }}>
              本アンケートは匿名でご回答いただけます。いただいたご意見はサービス向上に活用させていただきます。
            </Text>
          </View>

          {/* 設問 */}
          <View className="w-full">
            {questionsData.map(renderQuestion)}
          </View>

          {/* 送信ボタン */}
          <View className="mt-10 items-center">
            <SubmitButton
              title="アンケートを送信する"
              onPress={onSubmit}
              disabled={submitting}
              className="w-full max-w-sm rounded-full py-4"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
