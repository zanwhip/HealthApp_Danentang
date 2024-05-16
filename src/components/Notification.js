// NotificationService.js
import Toast from 'react-native-toast-message';

export const showNotification = (type, message) => {
  Toast.show({
    type: type,
    text1: message,
    position: 'bottom',
    visibilityTime: 4000,
  });
};
