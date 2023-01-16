import { useMarketplace } from '@thirdweb-dev/react'
import * as process from 'process'
import { useEffect, useState } from 'react'
import NFTCard from '@/components/Home/NFTCard'
import Link from 'next/link'

const style = {
  wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg-grid-cols-3 cl:grid-cols-4 2xl:grid-cols-5`,
}

const Listings = () => {
  const [marketplaceItems, setMarketplaceItems] = useState<any>([])
  const marketplace = useMarketplace(process.env.NEXT_PUBLIC_MARKETPLACE_ADRESS)

  useEffect(() => {
    getListingsItems()
  })

  const getListingsItems = async () => {
    try {
      const itemsList = await marketplace?.getActiveListings()
      setMarketplaceItems(itemsList)
      console.log()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <div className={style.wrapper}>
        {marketplaceItems?.length > 0 ? (
          <>
            {marketplaceItems?.map((item: any, index: number) => (
              <Link key={index} href={`/assets/${item.assetContractAddress}/${item.id}`}>
                <NFTCard item={item} />
              </Link>
            ))}
          </>
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    </>
  )
}

export default Listings
