import { Ionicons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { useThemeColor } from '../hooks/use-theme-color';


interface Props extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
}

const ThemedTextInput = ({ icon, ...rest}: Props) => {
  
  const primaryColor = useThemeColor({}, 'primary');
  const textColor = useThemeColor({}, 'text');
  const inputRef = useRef<TextInput>(null);

  const [isActive, setIsActive] = useState(false)
  
  
  
  return (
    <View
      style = {{
        ...styles.border,
        borderColor: isActive ? primaryColor : '#CCC',
      }}
      onTouchStart={ () => inputRef.current?.focus() }
    >
      {
        icon && (
          <Ionicons
            name={icon}
            size={24}
            color={textColor}
            style={{ marginRight: 10 }}
          />
        )
      }
      <TextInput
      ref={inputRef}
        placeholderTextColor='#5C5C5C'
        onFocus={ () => setIsActive(true) }
        onBlur={ () => setIsActive(false) }
        style={{
          color: textColor,
          marginRight: 10,
          flex: 1,
        }}
        {...rest}
      />
    </View>
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
})