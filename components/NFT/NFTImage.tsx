import Image from 'next/image'
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart'

const style = {
  wrapper: `rounded -lg border dark:border-transparent dark-bg-[#313339]`,
  nftHeader: `flex items-center justify-between p-4`,
  likesContainer: `flex items-center justify-end space-x-2`,
  heartIcon: `h-5 w-5 text-gray-500 dark:text-gray-400`,
  likesCount: `text-sm font-semibold text-gray-500 dark:text-gray-400`,
  nftImage: `rounded-b-lg object-cover`,
}

const NFTImage = ({ image }: any) => {
  return (
    <div className={style.wrapper}>
      <div className={style.nftHeader}>
        <Image src="/eth-logo.svg" alt="ether-logo" height={20} width={20} />
        <div className={style.likesContainer}>
          <AiOutlineHeart className={style.heartIcon} />
          <div className={style.likesCount}>200</div>
        </div>
      </div>
      <>{image && <Image src={image} alt="nft" width={448} height={448}></Image>}</>
    </div>
  )
}

export default NFTImage
