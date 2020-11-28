import DataTable from 'components/data/table'
import data from 'mocks/sites/all'

const Sites = () => (
  <DataTable data={data} headers={['id', 'name']} route={'sites'} />
)

export default Sites
