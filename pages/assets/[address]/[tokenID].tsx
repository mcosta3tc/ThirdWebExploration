import TopNavBarLayout from '@/layouts/TopNavBarLayout'
import { useEffect, useState } from 'react'
import NFTImage from '@/components/NFT/NFTImage'
import { useAddress, useMarketplace } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { BigNumber } from 'ethers'

const style = {}

const NFT = () => {
  const router = useRouter()
  const { tokenID } = router.query
  const address = useAddress()

  const marketplace = useMarketplace(process.env.NEXT_PUBLIC_MARKETPLACE_ADRESS)
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState<any>()

  useEffect(() => {
    getItems()
  }, [])
  useEffect(() => {
    if (!address) {
      router.replace('/')
    }
  }, [address])

  const getItems = async () => {
    try {
      setLoading(true)
      const item = await marketplace?.getListing(BigNumber.from(tokenID))
      setItem(item)
      setLoading(false)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <TopNavBarLayout>
      <div className={style.wrapper}>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className={style.nftContainer}>
            <div className={style.leftContainer}>
              <div className={style.leftElement}>
                <NFTImage image={item?.asset?.image} />
              </div>
              <div className={style.leftElement}>NFT DEATILS</div>
            </div>
            <div className={style.rightContainer}>
              NFT BASIC INFO
              <div className={style.buyoutContainer}>NFT SALES INFO</div>
            </div>
          </div>
        )}
      </div>
    </TopNavBarLayout>
  )
}

export default NFT
