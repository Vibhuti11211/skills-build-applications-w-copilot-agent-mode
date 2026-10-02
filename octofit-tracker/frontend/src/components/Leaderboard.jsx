import CollectionPage from './CollectionPage.jsx'
import { fetchCollection } from '../api.js'

const columns = [
  { key: 'position', label: 'Rank', format: (value) => value ? `#${value}` : '-' },
  { key: 'name', label: 'Athlete' },
  { key: 'score', label: 'Points', format: (value) => Number(value ?? 0).toLocaleString() },
]

export default function Leaderboard() {
  return (
    <CollectionPage
      category="Competition"
      columns={columns}
      description="See how members are moving up the standings."
      endpoint="/api/leaderboard/"
      fetch={fetchCollection}
      title="Leaderboard"
    />
  )
}