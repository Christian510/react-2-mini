import React from 'react';

export default function SizeChanger(props) {
  return (
    <select className="dropDownContainer" onChange={(e) =>  props.update(e.target.value)} value={props.fontSize}>
      <option value="12"> 12 </option>
      <option value="13"> 13 </option>
      <option value="14"> 14 </option>
    </select>
  )
}