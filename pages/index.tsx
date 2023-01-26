import '@/../styles/Home.module.scss'
import { useAddress, useMetamask, useWalletConnect } from '@thirdweb-dev/react'
import Main from '@/components/Home'
import { useEffect, useState } from 'react'

const style = {
  wrapper: `flex h-screen items-center justify-center`,
  connectWalletButton: `rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white`,
}

export default function Home() {
  const connectWithMetamask = useMetamask()
  const connectWithTest = useWalletConnect()
  //logged user wallet address
  const address = useAddress()

  const Auth = () => {
    return (
      <div className={style.wrapper}>
        <button onClick={connectWithMetamask} className={style.connectWalletButton}>
          Connectez votre wallet Metamask
        </button>
        <button onClick={connectWithTest} className={style.connectWalletButton}>
          Connectez votre wallet Metamask
        </button>
      </div>
    )
  }
  return <>{address ? <Main /> : Auth()}</>
}
