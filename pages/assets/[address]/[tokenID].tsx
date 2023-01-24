import TopNavBarLayout from '@/layouts/TopNavBarLayout'
import { useEffect, useState } from 'react'
import NFTImage from '@/components/NFT/NFTImage'
import { useAddress, useMarketplace } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { BigNumber } from 'ethers'
import NFTSalesInfo from '@/components/NFT/NFTSalesInfo'

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

  const buyNFT = async () => {
    try {
      if (tokenID) {
        if (typeof tokenID === 'string') {
          const castTokenId = await marketplace?.buyoutListing(parseInt(tokenID), 1)
        }
      }
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
              <div className={style.buyoutContainer}>
                <NFTSalesInfo price={item?.buyoutCurrencyValuePerToken?.displayValue} buyNFT={buyNFT} />
              </div>
            </div>
          </div>
        )}
      </div>
    </TopNavBarLayout>
  )
}

export default NFT
