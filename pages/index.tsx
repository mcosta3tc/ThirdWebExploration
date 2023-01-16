import '@/../styles/Home.module.scss'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import Main from '@/components/Home'

const style = {
  wrapper: `flex h-screen items-center justify-center`,
  connectWalletButton: `rounded-lg border border-black px-10 py-5 transition-all hover:bg-black hover:text-white`,
}

export default function Home() {
  const connectWithMetamask = useMetamask()
  //logged user wallet address
  const address = useAddress()

  const Auth = () => {
    return (
      <div className={style.wrapper}>
        <button onClick={connectWithMetamask} className={style.connectWalletButton}>
          Connectez votre wallet Metamask
        </button>
      </div>
    )
  }
  return <>{address ? <Main /> : Auth()}</>
}
