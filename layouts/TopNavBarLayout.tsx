import Header from '@/components/Header/Header'

const TopNavBarLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default TopNavBarLayout
