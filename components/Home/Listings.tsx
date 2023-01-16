import { useMarketplace } from '@thirdweb-dev/react'
import * as process from 'process'
import { useEffect } from 'react'

const Listings = () => {
  const marketplace = useMarketplace(process.env.NEXT_PUBLIC_MARKETPLACE_ADRESS)

  useEffect(() => {
    getListingsItems()
  }, [])
  const getListingsItems = async () => {
    try {
      const itemsList = await marketplace?.getActiveListings()
      console.log(itemsList)
    } catch (e) {
      console.error(e)
    }
  }

  return <div>LISTINGS</div>
}

export default Listings
