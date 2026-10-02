import CollectionPage from './CollectionPage.jsx'
import { fetchCollection } from '../api.js'

const columns = [
  { key: 'name', label: 'Member' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
]

export default function Users() {
  return (
    <CollectionPage
      category="Community"
      columns={columns}
      description="People taking part in the Octofit program."
      endpoint="/api/users/"
      fetch={fetchCollection}
      title="Members"
    />
  )
}