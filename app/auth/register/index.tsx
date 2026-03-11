import ThemedButton from '@/presentation/theme/components/themed-button';
import ThemedLink from '@/presentation/theme/components/themed-link';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import ThemedTextInput from '@/presentation/theme/components/themed-text-input';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';


const RegisterScreen = () => {

  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={{ flex: 1 }}
    >
      <ScrollView style= {{
        paddingHorizontal: 40,
        backgroundColor:backgroundColor
      }}>
        <View style={{
          paddingTop: height * 0.35,
        }}>
          <ThemedText type='title'>Crear cuenta</ThemedText>
          <ThemedText style={{ color: 'grey'}}>Por favor crea una cuenta para continuar</ThemedText>
        </View>

        <View style={{ marginTop: 20 }}>
          <ThemedTextInput
            placeholder="Nombre completo"
            autoCapitalize="words"
            icon="person-outline"
          />
          <ThemedTextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
          />
          <ThemedTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
          />
        </View>

        {/* Spacer */}
        <View style={{marginTop: 10}} />

        {/* Botón */}
        <ThemedButton icon='arrow-forward-outline'>
          Crear cuenta
        </ThemedButton>

        {/* Spacer */}
        <View style={{marginTop: 10}} />

        {/* Enlace a registro */}
        <View
          style = {{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ThemedText>¿¿Ya tienes una cuenta??</ThemedText>
          <ThemedLink href='/auth/login' style={{ marginHorizontal: 5 }}>
            Ingresar
          </ThemedLink>
        </View>

      </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default RegisterScreen