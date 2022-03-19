import React, { useEffect, useState } from 'react'
import Trie from '../../common/utils/trie'
import './ByCountryPage.css'
import { getRequest } from '../../common/api/BasicApi'
import countryData from '../../common/countries.json'

export default function ByCountryPage() {
    const [prefix, setPrefix] = useState('')
    const [suggestion, setSuggestion] = useState('')
    const [trie, setTrie] = useState(null)

    useEffect(() => {
        const words = countryData.countries
        const newTrie = new Trie()
        for (let i = 0; i < words.length; i++) {
            const word = words[i]
            newTrie.insert(word)
        }
        setTrie(newTrie)
    }, [])

    const onChange = (e) => {
        var value = e.target.value
        setPrefix(value)
        var words = value.split(' ')
        var trie_prefix = words[words.length - 1]
        var found_words = trie.find(trie_prefix).sort((a, b) => {
            return a.length - b.length
        })
        var first_word = found_words[0]
        if (
            found_words.length !== 0 &&
            value !== '' &&
            value[value.length - 1] !== ' '
        ) {
            if (first_word != null) {
                var remainder = first_word.slice(trie_prefix.length)
                setSuggestion(value + remainder)
            }
        } else {
            setSuggestion(value)
        }
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 39) {
            setPrefix(suggestion)
        } else if (e.keyCode === 13) {
            // Enter was pressed
        }
    }
    return (
        <div className="covid-page">
            <input
                type="text"
                name="search-bar"
                id="search-bar"
                placeholder="Search..."
                value={prefix}
                onChange={(event) => onChange(event)}
                onKeyDown={(event) => handleKeyDown(event)}
            />
            <input
                type="text"
                name="search-bar"
                id="search-bar2"
                value={suggestion}
            />
        </div>
    )
}
