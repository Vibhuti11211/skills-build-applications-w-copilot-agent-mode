import CollectionPage from './CollectionPage.jsx'
import { fetchCollection } from '../api.js'

const columns = [
  { key: 'type', label: 'Activity' },
  { key: 'durationMinutes', label: 'Duration', format: (value) => `${value ?? 0} min` },
  { key: 'distanceKm', label: 'Distance', format: (value) => `${value ?? 0} km` },
  { key: 'calories', label: 'Calories', format: (value) => Number(value ?? 0).toLocaleString() },
]

export default function Activities() {
  return (
    <CollectionPage
      category="Movement"
      columns={columns}
      description="Training sessions logged across the Octofit community."
      endpoint="/api/activities/"
      fetch={fetchCollection}
      title="Activity log"
    />
  )
}