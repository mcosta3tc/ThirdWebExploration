import { useActiveListings, useContract } from '@thirdweb-dev/react'
import * as process from 'process'
import NFTCard from '@/components/Home/NFTCard'
import Link from 'next/link'
import { Pinwheel } from '@uiball/loaders'
import { useTheme } from 'next-themes'

const style = {
  wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg-grid-cols-3 cl:grid-cols-4 2xl:grid-cols-5 justify-items-center`,
  loader: `w-100`,
}

const Listings = () => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_MARKETPLACE_ADRESS, 'marketplace')
  const { data: nfts, isLoading, error } = useActiveListings(contract)

  const { systemTheme, theme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  console.log({ nfts, isLoading, error })

  return (
    <>
      {
        <div className={style.wrapper}>
          {!isLoading
            ? nfts?.map((item: any, index: number) => (
                <Link key={index} href={`/assets/${item.assetContractAddress}/${item.id}`}>
                  <NFTCard item={item} />
                </Link>
              ))
            : isLoading && (
                <div className={style.loader}>
                  <Pinwheel size={75} lineWeight={3.5} speed={1} color={currentTheme === 'dark' ? 'white' : 'black'} />
                </div>
              )}
        </div>
      }
    </>
  )
}

export default Listings
