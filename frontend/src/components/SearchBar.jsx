// src/components/SearchBar.jsx
import React from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import '../styles/customercss/customerschedule.css'; // make sure to import your CSS

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search-description">
      <HiMagnifyingGlass />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
