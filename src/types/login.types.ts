export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  empId: string;
  fullname: string;
  username: string;
  userRolename: string;
  permission: string[];
}
