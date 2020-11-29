import { DataType } from 'types/data'
import Link from 'next/link'
import styles from './table.module.css'

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
          <tr className={styles.tableRow}>
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
