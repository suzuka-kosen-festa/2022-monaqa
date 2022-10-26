export interface StudentResponse {
  studentId: string
  kana: string
  email: string
  Guest: [
    {
      guestId: string
      sex: string
      jobs: string
      name: string
      hostId: string
    },
  ]
}

export interface ObResponse {
  obId: string
  email: string
  name: string
  age: string
}
export interface SponsorResponse {
  sponsorId: string
  email: string
  name: string
}

export interface JhsResponse {
  studentId: string
  kana: string
  email: string
  Parents: [
    {
      guestId: string
      sex: string
      jobs: string
      name: string
      hostId: string
    },
  ]
}
export interface GuestObject extends Object {
  guestId: string
  sex: string
  jobs: string
  name: string
  hostId: string
}

export interface ObObject extends Object {
  obId: string
  email: string
  name: string
}
export interface SponsorObject extends Object {
  sponsorId: string
  email: string
  name: string
}
export interface StudentSuccessResponse {
  status: 'SUCCESS'
  results: StudentResponse[]
  length: number
}
export interface SponsorSuccessResponse {
  status: 'SUCCESS'
  results: SponsorResponse[]
  length: number
}
export interface ObSuccessResponse {
  status: 'SUCCESS'
  results: ObResponse[]
  length: number
}
export interface JhsSuccessResponse {
  status: 'SUCCESS'
  results: JhsResponse[]
  length: number
}

export interface FaiedResponse {
  status: 'FAILED'
  message: string
}
export interface CheckResponse {
  name: string
}
export interface LoginResponse {
  access_token: string
}
