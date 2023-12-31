import Input from '@/components/Input'
import axios from 'axios'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const Auth = () => {

  // const router = useRouter()
  
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVatiant) => currentVatiant === 'login' ? 'register' : 'login')
  }, [])

  const login = useCallback(async () => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        callbackUrl: '/profiles'
      })
      // if (!!result) router.push(result.url!)
    } catch(e) {[
      console.log(e)
    ]}
  }, [email, password])

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password,
      })
      login()
    } catch(e) {
      console.log(e)
    }
  }, [email, login, name, password])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image src="/images/logo.png" height={100} width={200} alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-lg rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  id="Username"
                  value={name}
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <Input
                id="email"
                value={email}
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                id="password"
                value={password}
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition" onClick={variant === 'login' ? login : register}>
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                className="
                  w-10
                  h-10
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  hover:opacity-80
                  transition
                "
              >
                <FcGoogle size={30} onClick={() => signIn('google', { callbackUrl: '/profiles' })} />
              </div>
              <div
                className="
                  w-10
                  h-10
                  bg-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  hover:opacity-80
                  transition
                "
              >
                <FaGithub size={30} onClick={() => signIn('github', { callbackUrl: '/profiles' })} />
              </div>
            </div>
            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
              <span className="text-white ml-2 hover:underline cursor-pointer" onClick={toggleVariant}>
              {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
