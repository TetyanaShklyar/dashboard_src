import './styles.scss'

const Customer = (props) => {
  const { name, company, phone, email, country, status } = props
  return (
    <tr className="table_tbody__tr">
      <td className="table_tbody__td">{name}</td>
      <td className="table_tbody__td">{company}</td>
      <td className="table_tbody__td">
        <a className="table_link" href={'tel:' + phone}>
          {phone}
        </a>
      </td>
      <td className="table_tbody__td">
        <a className="table_link" href={'mailto:' + email}>
          {email}
        </a>
      </td>
      <td className="table_tbody__td">{country}</td>
      <td className="table_tbody__td">
        {status ? (
          <span className="status active">Active</span>
        ) : (
          <span className="status inactive">Inactive</span>
        )}
      </td>
    </tr>
  )
}

export default Customer
