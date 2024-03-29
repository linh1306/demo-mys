import React, {CSSProperties} from "react";

export interface CommonReduxAction {
  type: string;
}

export interface CommonReactProps {
  children: React.ReactNode;
}

export interface ISettingId {
  _id?: string;
  themes?: string;
  location?: string;
  region?: string;
  language?: string;
  referCode?: string;
}

export enum IAccountRole {
  USER = 0,
  ADMIN = 1,
  ANONYMOUS = 2,
}

export enum IState {
  INACTIVE,
  ACTIVE,
  DELETED,
}
export interface IProfile {
  _id?: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  phone?: string;
  location?: string;
  website?: string;
  facebook?: string;
  twitter?: string;
  avatar?: string;
  newEmail?: string;
  workspaceId?: number;
}

export interface IUserLogin {
  id: number;
  fullName?: string;
  state?: IState;
  email?: string;
  username?: string;
  dateOfBirth?: string;
  positionId?: number;
  avatar?: string;
  avatarUrl?: string;
  personId?: number;
  profile?: IProfile;
  address?: string;
  role?: {
    id?: IAccountRole;
    roleName?: string;
  };
  baseSalary?: number;
  manageSalary?: number;
  gender?: string;
}

export interface IAccountInfo {
  user?: IUserLogin;
  accessToken?: string;
  refreshToken?: string;
  isConfirmed?: boolean;
  dataProfile?: IProfile;
}
export interface ISvgIcon {
  width?: string;
  height?: string;
  fillColor?: string;
  className?: string;
  style?: CSSProperties;
}

export interface IFeatureValue {
  title?: string;
  items?: string[];
  image?: string;
  circle?: {
    fillColor?: string;
    height?: string;
    width?: string;
  };
}

export interface IUpdateOrderingBody {
  id: number;
  ordering: number;
}

export enum EPermissionsDepartMent {
  MNG_DEPT = "MNG_DEPT",
  MNG_POSITION = "MNG_POSITION",
  MNG_MEMBER = "MNG_MEMBER",
  MNG_NEWS = "MNG_NEWS",
  MNG_COMPANY = "MNG_COMPANY",
}

export enum EModalChild {
  MEMBER = "member",
  TAG = "tag",
  FILE = "file",
  MISION = "mission",
  BACKGROUND = "background",
  DEPATHMENT = "depathment",
  CYCLE = "cycle",
}

export enum EWSCATEGORY {
  CT,
  TC,
}

export enum EUserStatus {
  ACTIVE,
  LOCK,
  LEAVE,
  DO_NOT_INVITE,
  DELETED,
  PENDING,
}
