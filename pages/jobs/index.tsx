import data from 'mocks/jobs/all'
import DataTable from 'components/data/table'

const Jobs = () => (
  <DataTable data={data} headers={['id', 'name']} route={'jobs'} />
)

export default Jobs
