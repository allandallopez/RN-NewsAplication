import AsyncStorage from "@react-native-community/async-storage";

export const asyncStore = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
    console.log("error asyncStore", e);
  }
};

export const asyncGet = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      //console.log(value);
      return value;
      // value previously stored
    }
  } catch (e) {
    console.log("error asyncGet", e);
    // error reading value
  }
};

export const asyncClear = () => {
  AsyncStorage.clear()
}
