import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart'

const style = {
  wrapper: `relative flex h-[450px] w-[340px] cursor-pointer flex-col rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-[#333]`,
  imageContainer: `h-3/4 overflow-hidden`,
  nftImage: `rounded-t-lg object-cover h-100`,
  nftLowerContainer: `flex h-1/4 flex-col justify-betweeb p-4`,
  nftInfoContainer: `felx justify-between`,
  collectionTitle: `text-sm text-grey-500 dark:text-gray-400`,
  nftTitle: `text-sm font-bold`,
  priceContainer: `flex flex-col items-end justify-center sapce-y-1`,
  priceTitle: `text-xs font-light`,
  likesContainer: `flex items-center justify-end space-x-2`,
  wethImageContainer: `flex items-center justify-end space-x-2`,
  heartIcon: `h-3 w-3 text-gray-500 dark:text-gray-400`,
  likesCounter: `text-xs text-gray-500 dark:text-gray-400`,
}

const NFTCard = ({ item }: any) => {
  return (
    <div className={style.wrapper}>
      <div className={style.imageContainer}>
        <Image src={item.asset.image} className={style.nftImage} height={340} width={340} alt="nft" />
      </div>
      <div className={style.nftLowerContainer}>
        <div className={style.nftInfoContainer}>
          <div>
            {item.asset.collection && <div className={style.collectionTitle}>{item.asset?.collection?.name}</div>}
            <div className={style.nftTitle}>{item.asset.name}</div>
          </div>
          <div className={style.priceContainer}>
            <div className={style.priceTitle}>Buy at</div>
            <div className={style.wethImageContainer}>
              <Image src="/weth-logo.svg" alt="weth" height={16} width={16} />
              <div>{item.buyoutCurrencyValuePerToken?.displayValue}</div>
            </div>
          </div>
        </div>
        <div className={style.likesContainer}>
          <AiOutlineHeart className={style.heartIcon} />
          <div className={style.likesCounter}>{item.asset?.stats?.favorites ?? 0}</div>
        </div>
      </div>
    </div>
  )
}

export default NFTCard
