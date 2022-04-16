import React from 'react'
import Entry from './components/Entry'
import Header from './components/Header'
import data from './data'

export default function App() {
    const entries = data.map(entry => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
            />
        )
    })
    return (
        <div>
            <Header />
            {entries}
        </div>
    )
}
