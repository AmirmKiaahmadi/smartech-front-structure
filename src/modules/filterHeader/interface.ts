export interface FilterHeaders  {
    children : React.ReactElement,
    handleFetch: (data : {[key : string]: string}) => void
    body : {[key : string]: string}
  }