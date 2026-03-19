export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginValue {
  token: string;
  id: string;
  empId: string;
  fullname: string;
  username: string;
  userRolename: string;
  permission?: string[];
}

export interface LoginResponse {
  value: LoginValue;
}
