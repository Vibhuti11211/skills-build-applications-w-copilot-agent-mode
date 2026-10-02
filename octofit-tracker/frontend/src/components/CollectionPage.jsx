import { useEffect, useState } from 'react'

export default function CollectionPage({ title, category, description, endpoint, columns, fetch: loadCollection }) {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    loadCollection(endpoint, { signal: controller.signal })
      .then(setRecords)
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [endpoint, attempt, loadCollection])

  function refreshCollection() {
    setLoading(true)
    setError('')
    setAttempt((currentAttempt) => currentAttempt + 1)
  }

  return (
    <section className="collection-page" aria-labelledby="collection-title">
      <header className="collection-heading">
        <div>
          <span className="heading-kicker">{category} / OCTOFIT DATA</span>
          <h1 id="collection-title">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="record-total" aria-live="polite">
          <strong>{loading ? '--' : String(records.length).padStart(2, '0')}</strong>
          <span>records</span>
        </div>
      </header>

      <div className="collection-toolbar">
        <p><strong>Directory</strong> / {category}</p>
        <button
          className="refresh-button"
          onClick={refreshCollection}
          type="button"
        >
          Refresh data
        </button>
      </div>

      <div className="table-frame">
        {loading ? (
          <div className="table-state" role="status">Loading {title.toLowerCase()}...</div>
        ) : error ? (
          <div className="table-state error" role="alert">
            {error}
            <button
              className="refresh-button"
              onClick={refreshCollection}
              type="button"
            >
              Try again
            </button>
          </div>
        ) : records.length === 0 ? (
          <div className="table-state">No {title.toLowerCase()} found.</div>
        ) : (
          <div className="table-scroll">
            <table className="collection-table">
              <thead>
                <tr>
                  {columns.map(({ key, label }) => <th key={key} scope="col">{label}</th>)}
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={record._id ?? record.id ?? `${endpoint}-${index}`}>
                    {columns.map(({ key, format }) => (
                      <td key={key}>{format ? format(record[key], record) : record[key] ?? '-'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <footer className="table-footnote">
        <span>OCTOFIT TRACKER</span>
        <span>{loading ? 'SYNCING' : error ? 'CONNECTION ISSUE' : 'LIVE COLLECTION'}</span>
      </footer>
    </section>
  )
}