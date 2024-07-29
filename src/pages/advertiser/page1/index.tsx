import React from 'react'
import { FilterHeader } from '../../../modules/filterHeader'
import useSetHeader from './hooks/useSetHeader'

export default function AdvertiserPage1() {
    const {handleFetch} = useSetHeader()
  return (
    <div>
      <FilterHeader handleFetch={handleFetch} body={{one : "sdcs"}}>
        <>
            <input type='text' name='one' />
            <input type='text' name='two' />
            <input type='text' name='three' />
        </>
           
      </FilterHeader>
      <p>advertiser page 1 </p>
    </div>
  )
}
