import { DataType } from 'types/data'
import Link from 'next/link'

interface Props {
  data: DataType[]
  headers: string[]
  route: string
}

const DataTable = ({ data, headers, route }: Props) => {
  return (
    <table>
      <tr>
        {headers.map(header => (
          <th>{header}</th>
        ))}
      </tr>
      {data.map(record => (
        <Link href={`${route}/${record.id}`}>
          <tr>
            {Object.values(record).map(item => (
              <td>{item}</td>
            ))}
          </tr>
        </Link>
      ))}
    </table>
  )
}

export default DataTable
