import React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

export default function StatusBarPage(props) {

    const IsFocused = useIsFocused();

    return IsFocused ? <StatusBar  {...props} /> : null;
}