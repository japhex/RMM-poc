import data from 'mocks/devices/all'
import DataTable from 'components/data/table'

const Devices = () => (
  <DataTable data={data} headers={['id', 'name']} route={'devices'} />
)

export default Devices
