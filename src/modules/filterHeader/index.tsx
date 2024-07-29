import React from 'react'
import { FilterHeaders } from './interface';

export const FilterHeader = ({ children , handleFetch  , body} : FilterHeaders) => {
    return (
        <>
        {children}
        <button onClick={() => handleFetch(body)}>Search</button>
        </>
    );
  };
