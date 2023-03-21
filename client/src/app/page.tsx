'use client';

import { useEffect, useState } from 'react'
import Header from './common/header'
import Footer from './common/footer'
import AddFoodTruck from './merchant/addFoodTruck'
import ListFoodTruck from './merchant/listFoodTruck';

export default function Home() {
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  const [filterByCurrentDate, setFilterByCurrentDate] = useState('all')

  const onRefreshStart = () => {
    setRefresh(true)
  }

  const onRefreshComplete = () => {
    setRefresh(false)
  }

  return (
    <main className='container py-4'>
      <Header />

      <div className='content'>
        <AddFoodTruck onRefresh={onRefreshStart} />
        
        <div className="alert alert-warning mt-4 py-2">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="availableDate" />
            <label className="form-check-label" htmlFor="availableDate">By default, show all food truck available today. Click to turn off default and show all food truck.</label>
          </div>
        </div>

        <ListFoodTruck filterByCurrentDate={filterByCurrentDate} onRefreshComplete={onRefreshComplete} refresh={refresh} />
      </div>

      <Footer />
    </main>
  )
}
