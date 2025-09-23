import { isIOS } from "libs";
import { IRegisteredGuest, UserDetail } from "models/GuestController";
import { getBundleId, getVersion } from "react-native-device-info";
import VersionCheck from "react-native-version-check";

export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export function getTestID(testID: string) {
  const appPrefix = "anandotsavScanner";
  if (!testID) {
    return "undefined";
  }
  const prefix = `${appPrefix}:id/`;
  const hasPrefix = testID.startsWith(prefix);
  return !hasPrefix ? `${prefix}${testID}` : testID;
}

export const capitalizeAllStartingWords = (str: string, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|[''({])+\S/g, (match) =>
    match.toUpperCase(),
  );

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const isBlankString = (str: string) =>
  !str || str.length === 0 || /^\s*$/.test(str);
export const removeAllDuplicateValuesInArray = (arr: any[]) => [
  ...new Set(arr),
];

export const mergeArrays = (a: any[], b: any[]) => [...a, ...b];

export const mergeArraysAndRemoveDuplicates = (a: any[], b: any[]) => [
  ...new Set([...a, ...b]),
];

export const safelyParseJson = (string?: string | null) => {
  try {
    return JSON.parse(string as string);
  } catch {
    return string;
  }
};

export const isEmptyObj = (obj: any) =>
  Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

export const convertSnakeToCamelCase = (str: string) => {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace("-", "").replace("_", ""),
  );
};

export const sleep = (delay: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const toObj = (arr: any[]) => Object.fromEntries(arr);

export const getUnion = (...arr: any[]) => [...new Set(arr.flat())];

export const partition = (arr: any[], criteria: any) =>
  arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);

//! use this instead of console.log throughout the app.
export function logger(
  log: any,
  invoker?: string,
  title?: string,
  error?: string,
) {
  if (__DEV__) {
    title && console.log(`TITLE: ${title}.`);
    console.log(`LOG: ${log}.`);
    error && console.log(`Error: ${error}.`);
    console.log(`Coming from : ${invoker}.`);
  }
}

export const checkAppUpdateStatus = async () => {
  const packageName = getBundleId();
  try {
    const latestVersion = await VersionCheck.getLatestVersion({
      provider: isIOS ? "appStore" : "playStore",
      packageName: packageName,
      ignoreErrors: true,
    });
    const currentVersion = getVersion();
    // The following logic navigates the user to the appropriate app store based on their platform
    if (latestVersion && currentVersion && latestVersion > currentVersion) {
      // const url = await VersionCheck.getStoreUrl({
      //   appID: "ENTER_APP_ID",
      //   packageName: packageName,
      // });
      // Linking.openURL(url);
    } else {
      logger("The app is up-to-date.");
    }
  } catch (e) {
    logger(e);
  }
};

const emptyUserDetail = {
  id: "",
  displayName: "No Guest Data",
  email: "No email available",
  department: "No department",
  jobtitle: "No job title available",
  locationName: "No location set",
  mobilePhone: "No phone number",
  numberOfGuest: 0,
  checkedInGuest: 0,
  registered: false,
  attended: false,
  profileImageUrl: undefined,
  checkedInAdults: 0,
  checkedInKids: 0,
  adults: 0,
  kids: 0,
  employeeNumber:'000/000/000'
};

export function getGuestData(guestDetail: IRegisteredGuest | null): UserDetail {
  if (!guestDetail) return emptyUserDetail;

  return {
    id: guestDetail?.id ?? emptyUserDetail.id,
    displayName: guestDetail?.displayName ?? emptyUserDetail.displayName,
    email: guestDetail?.email ?? emptyUserDetail.email,
    department: guestDetail?.department ?? emptyUserDetail.department,
    jobtitle: guestDetail?.jobtitle ?? emptyUserDetail.jobtitle,
    locationName: guestDetail?.locationName ?? emptyUserDetail.locationName,
    mobilePhone: guestDetail?.mobilePhone ?? emptyUserDetail.mobilePhone,
    numberOfGuest: guestDetail?.numberOfGuest ?? emptyUserDetail.numberOfGuest,
    checkedInGuest:
      guestDetail?.checkedInGuest ?? emptyUserDetail.checkedInGuest,
    registered: guestDetail?.registered ?? emptyUserDetail.registered,
    attended: guestDetail?.attended ?? emptyUserDetail.attended,
    profileImageUrl:
      guestDetail.profileImageUrl ?? emptyUserDetail.profileImageUrl,
    checkedInAdults: guestDetail?.checkedInAdults ?? 0,
    checkedInKids: guestDetail?.checkedInKids ?? 0,
    adults: guestDetail?.adults ?? 0,
    kids: guestDetail?.kids ?? 0,
    employeeNumber:guestDetail?.employeeNumber ?? emptyUserDetail?.employeeNumber
  };
}
