export interface BConnectAccountRenderCreateRequest {
  merchantUid: string;
  redirectUrl: string | null;
}

export interface BConnectAccountInstitutionCreateRequest {
  accountIdentifier: string
}

export interface BConnectAccountCreateRequest {
  merchantUid: string;
  customerUid: string;
  institution: BConnectAccountInstitutionCreateRequest
  publicToken: string;
}
