import { useActiveListings, useContract } from '@thirdweb-dev/react'

const Listings = () => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_MARKETPLACE_ADRESS, 'marketplace')

  const getListings = () => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { data: nfts, isLoading } = useActiveListings(contract)
      console.log(nfts)
    } catch (e) {
      console.error(e)
    }
  }

  return <div>LISTINGS</div>
}

export default Listings
