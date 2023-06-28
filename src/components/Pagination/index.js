import './styles.scss'

const Pagination = () => {
  return (
    <div className="pagination_list">
      <div className="pagination_block">
        <p className="pagination_text">Showing data 1 to 8 of 256K entries</p>
      </div>
      <nav>
        <ul className="pagination">
          <li>
            <a href="#">{'<'}</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li className="not-item">
            <span>...</span>
          </li>
          <li>
            <a href="#">40</a>
          </li>
          <li>
            <a href="#">{'>'}</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
