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
      {headers.map(header => (
        <tr>
          <td>{header}</td>
        </tr>
      ))}
      {data.map(({ id, name }) => (
        <tr>
          <td>
            <Link href={`${route}/${id}`}>{name}</Link>
          </td>
        </tr>
      ))}
    </table>
  )
}

export default DataTable
