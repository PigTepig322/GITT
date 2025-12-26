export namespace UserManagement {
  export interface IUser {
    uuid: string;
    email: string;
    profile: IUserProfile;
    auth: AuthInfo;
    metadata: UserMetadata;
  }

  export interface IUserProfile {
    personalInfo: PersonalInformation;
    settings: UserSettings;
    security: SecuritySettings;
  }

  export interface PersonalInformation {
    firstName: string;
    lastName: string;
    birthDate?: Date;
  }

  export interface UserSettings {
    theme: ThemeMode;
    notificationSettings: NotificationConfig;
    language: string;
  }

  export interface AuthInfo {
    roles: string[];
    permissions: string[];
    lastLogin: Date;
    mfaEnabled: boolean;
  }

  export interface SecuritySettings {
    twoFactorAuth: boolean;
    loginAlerts: boolean;
    sessionTimeout: number;
  }

  export type ThemeMode = 'LIGHT' | 'DARK' | 'AUTO';

  export interface NotificationConfig {
    email: boolean;
    push: boolean;
    sms: boolean;
  }

  export interface UserMetadata {
    createdAt: Date;
    updatedAt: Date;
    version: number;
  }
}
