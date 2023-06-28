import customers from '../../data/customers'
import Customer from '../Customer'
import './styles.scss'

const Table = () => {
  const tableHeads = [
    'Customer Name',
    'Company',
    'Phone Number',
    'Email',
    'Country',
    'Status',
  ]
  return (
    <div className="table_list table-responsive">
      <table className="table">
        <thead className="table_thead">
          <tr className="table_thead__tr">
            {tableHeads.map((th) => {
              return (
                <th key={[th]} scope="col" className="table_thead__th">
                  {[th]}
                </th>
              )
            })}
          </tr>
          <tr className="line">
            <td className="line_td">
              <span className="line_td__span"></span>
            </td>
          </tr>
        </thead>
        <tbody className="table_tbody">
          {customers.map((customer) => {
            return <Customer key={customer.id} {...customer} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
