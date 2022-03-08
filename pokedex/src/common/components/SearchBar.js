import React, { useState } from 'react'
import SearchBar from 'material-ui-search-bar'

export default function MuiSearchBar({ onSearch }) {
    const [toSearch, setToSearch] = useState('')

    return (
        <SearchBar
            value={toSearch}
            onChange={(newValue) => setToSearch(newValue)}
            onRequestSearch={() => onSearch(toSearch)}
        ></SearchBar>
    )
}
