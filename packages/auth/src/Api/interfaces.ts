import { AuthPluginOptions } from '../interfaces';
import { RedirectOptions } from '@frontegg/react-core';

export interface User {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  expires: string;

  [key: string]: any;
}

// Login
export enum LoginStep {
  'preLogin' = 'preLogin',
  'loginWithPassword' = 'loginWithPassword',
  'loginWithTwoFactor' = 'loginWithTwoFactor',
  'redirectToSSO' = 'redirectToSSO',
  'success' = 'success',
  'recoverTwoFactor' = 'recoverTwoFactor',
}

export interface LoginState {
  loading: boolean;
  error?: any;
  step: LoginStep;

  ssoRedirectUrl?: string;
  mfaRequired?: boolean;
  mfaToken?: string;
  email?: string;
}


// Activate
export enum ActivateStep {
  'activating' = 'activating',
  'success' = 'success',
}

export interface ActivateState {
  loading: boolean;
  error?: any;
  step: ActivateStep
}


// Forgot Password
export enum ForgotPasswordStep {
  'forgotPassword' = 'forgotPassword',
  'success' = 'success',
}

export interface ForgotPasswordState {
  step: ForgotPasswordStep;
  email: string;
  loading: boolean;
  error?: any;

}

export interface AuthState extends AuthPluginOptions {
  error?: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: User;
  isSSOAuth: boolean;
  loginState: LoginState;
  activateState: ActivateState;
  forgetPasswordState: ForgotPasswordState;
  onRedirectTo: (path: string, opts?: RedirectOptions) => void;
}

export type PreLoginPayload = {
  email: string
}

export type LogoutPayload = () => void
export type LoginWithMfaPayload = {
  mfaToken: string;
  value: string;
}
export type ActivateAccountPayload = {
  token: string;
  userId: string;
  password: string;
}
export type ForgotPasswordPayload = PreLoginPayload;
export type ResetPasswordPayload = ActivateAccountPayload;