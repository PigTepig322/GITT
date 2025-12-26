export interface User {
  id: string;
  email: string;
  profile: UserProfile;
  auth: AuthInfo;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  preferences: UserPreferences;
  security: SecuritySettings;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
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
