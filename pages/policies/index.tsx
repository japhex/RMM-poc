import data from 'mocks/policies/all'
import DataTable from 'components/data/table'

const Policies = () => (
  <DataTable data={data} headers={['id', 'name']} route={'policies'} />
)

export default Policies
