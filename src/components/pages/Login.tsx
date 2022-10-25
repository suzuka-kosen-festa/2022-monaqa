import React, { useState, useEffect, useRef } from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import type { AxiosError } from 'axios'

import { Text } from '../common/Text'
import { Textfield } from '../common/Textfield'
import { Button } from '../common/Button'
import { firestApiClient } from '../utils/axios'
import type { LoginResponse, FaiedResponse } from '../utils/model'

const LoginContainer = tw.div`flex  flex-col items-center justify-center space-y-4 h-[calc(100vh)]`

const Login: FC = () => {
  const [isLogin, setIslogin] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null!)

  const loginHandler = (pass: string) => {
    firestApiClient
      .post<LoginResponse>('/auth', {
        username: 'admin',
        password: pass,
      })
      .then(res => {
        window.localStorage.setItem('access_token', res.data.access_token)
        setIslogin(true)
      })
      .catch((err: AxiosError<FaiedResponse>) => {
        toast.error(err.message)
      })
  }
  useEffect(() => {
    if (isLogin) window.location.href = '/search'
  }, [isLogin])

  return isLogin ? (
    <Text>リダイレクトします</Text>
  ) : (
    <LoginContainer>
      <Text>認証コードを入力してください</Text>
      <Textfield
        type="password"
        name="loginpath"
        maxLength={20}
        ref={inputRef}
      />
      <Button
        buttonKey="accept"
        onClick={() => loginHandler(inputRef.current.value)}
      >
        認証
      </Button>
      <ToastContainer position="bottom-center" />
    </LoginContainer>
  )
}

export { Login }
