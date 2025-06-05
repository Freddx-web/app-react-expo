import {
  Code,
  PhoneIphone,
  Web,
  Android,
  LaptopMac,
  ImportantDevices,
  Storage,
  Cloud,
  DataObject
} from '@mui/icons-material';

export const getIcon = (iconName) => {
  const icons = {
    code: Code,
    phone_iphone: PhoneIphone,
    web: Web,
    android: Android,
    laptop: LaptopMac,
    devices: ImportantDevices,
    database: Storage,
    cloud: Cloud,
    api: DataObject
  };
  
  return icons[iconName] || Code; // Default icon
};