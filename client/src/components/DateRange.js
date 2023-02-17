import React from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

export default function DateRange({state, setState, handleDateChange}) {
    

  return (
    <DateRangePicker
        onChange={(e) => handleDateChange(e)}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={1}
        ranges={state}
        direction="horizontal"
      />
  )
}
