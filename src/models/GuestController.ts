export interface IRegisteredGuestResponse {
  data: IRegisteredGuest;
}

export interface IRegisteredGuest {
  id: string;
  identifier: string;
  displayName: string;
  email: string;
  employeeNumber: string;
  workPhone: string | null;
  mobilePhone: string;
  profileImageUrl: string;
  parentDepartmentName: string | null;
  department: string;
  jobtitle: string;
  secondaryJobTitle: string | null;
  locationName: string;
  checkedInAdults: number;
  checkedInKids: number;
  numberOfGuest: number;
  checkedInGuest: number;
  adults: number;
  kids: number;
  registered: boolean;
  attended: boolean;
}

export interface UserDetail {
  id: string;
  displayName: string;
  email: string;
  department: string;
  jobtitle: string;
  locationName: string;
  mobilePhone: string;
  numberOfGuest: number;
  checkedInGuest: number;
  registered: boolean;
  attended: boolean;
  profileImageUrl?: string;
}

export interface DetailItemData {
  label: string;
  value: string | number;
  numberOfLines?: number;
}

export interface StatusBadgeData {
  text: string;
  isActive: boolean;
  activeStyle: string;
  inactiveStyle: string;
}
