import React from 'react'
import { AiOutlineClockCircle } from '@react-icons/all-files/ai/AiOutlineClockCircle'
import Image from 'next/image'
import { BsFillTagFill } from '@react-icons/all-files/bs/BsFillTagFill'

const NFTSalesInfo = ({ price, buyNFT }) => {
  const style = {
    wrapper: `flex flex-col divide-y border dark:divide-black dark:rounded-lg dark:border-black`,
    header: `flex items-center justify-betweeb rounded-t-lg px-6 py-4 dark:bg-[#262a30]`,
    headerContent: `flex items-center space-x-2`,
    headerIcon: `h-6 w-6`,
    greyText: `text-gray-400`,
    mainContainer: `space-y-4 rounded-b-lg px-6 py-4 dark:bg-[#313339]`,
    priceInfoContainer: `space-y-1`,
    mediumFont: `font-medium`,
    priceContainer: `flex items-center space-x-2`,
    price: `text-3xl font-bold`,
    buttonsContainer: `flex space-x-4`,
    button: `flex w-[14rem] items-center cusrsor-pointer justify-center space-x-4 rounded-lg py-2 text-white`,
    purchaseButton: `bg-blue-500`,
    offerButton: `border border-black bg-[#363840]`,
    buttonIcon: `h-6 w-6`,
  }

  return (
    <>
      <div className={style.wrapper}>
        {/*      <h2>{price}</h2>
      <button onClick={buyNFT}>Buy NFT</button>*/}
        <div className={style.header}>
          <div className={style.headerContent}>
            <AiOutlineClockCircle className={`${style.greyText} ${style.headerIcon}`} />
            <div className={style.greyText}>Sale ends June</div>
            <AiOutlineClockCircle className={style.headerIcon} />
          </div>
          <div className={style.mainContainer}>
            <div className={style.priceInfoContainer}>
              <div className={`${style.greyText} ${style.mediumFont}`}>Buy at</div>
              <div className={style.priceContainer}>
                <Image src="/weth-logo.svg" width={24} height={24} alt="weth" />
                <span className={style.price}>{price}</span>
              </div>
            </div>
            <div className={style.buttonsContainer}></div>
            <div className={`${style.button} ${style.purchaseButton}`} onClick={buyNFT}>
              <span className="text-lg font-semibold">Buy Now</span>
            </div>
            <div className={`${style.button} ${style.offerButton}`}>
              <BsFillTagFill className={style.buttonIcon} />
              {/*possible to make the fn as buyNFT onClick*/}
              <span className="text-lg font-semibold">Make Offer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NFTSalesInfo
