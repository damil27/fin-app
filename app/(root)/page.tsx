import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import Header from '@/components/header'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName:"Damilare", lastName:"Emmanuel", email:"Damilare@me.com"}
  return (
      <section className='home' >
          <div className='home-content' >
              <header className='home-content'>
                 <Header 
                      type="greeting"
                      title="Welcome"
                      user={loggedIn.firstName} 
                      subtext="Access and manage your account and transaction efficiently"
                 
                  />
                  <TotalBalanceBox
                      accounts={[]}
                      totalBanks={1}
                      totalCurrentBalance={1250.35}
                  />
        </header>
        
        RECENT TRANSACTION
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  )
}

export default Home