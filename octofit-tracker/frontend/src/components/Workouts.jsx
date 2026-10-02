import CollectionPage from './CollectionPage.jsx'
import { fetchCollection } from '../api.js'

const columns = [
  { key: 'name', label: 'Workout' },
  { key: 'focus', label: 'Focus' },
  { key: 'durationMinutes', label: 'Duration', format: (value) => `${value ?? 0} min` },
]

export default function Workouts() {
  return (
    <CollectionPage
      category="Training"
      columns={columns}
      description="Workout ideas for the next session."
      endpoint="/api/workouts/"
      fetch={fetchCollection}
      title="Workouts"
    />
  )
}