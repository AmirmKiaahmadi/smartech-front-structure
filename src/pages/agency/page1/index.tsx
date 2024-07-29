import { FilterHeader } from "../../../modules/filterHeader"
import useSetHeader from "./hooks/useSetHeader"

export default function AgencyPage1() {
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
      <p>agency page 1 </p>
    </div>
  )
}