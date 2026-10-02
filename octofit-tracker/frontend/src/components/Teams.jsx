import CollectionPage from './CollectionPage.jsx'
import { fetchCollection } from '../api.js'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'captain', label: 'Captain' },
  { key: 'members', label: 'Members', format: (value) => Number(value ?? 0).toLocaleString() },
]

export default function Teams() {
  return (
    <CollectionPage
      category="Community"
      columns={columns}
      description="Teams and training groups at Mergington High."
      endpoint="/api/teams/"
      fetch={fetchCollection}
      title="Teams"
    />
  )
}