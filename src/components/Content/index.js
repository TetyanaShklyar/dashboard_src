import Pagination from '../Pagination'
import Search from '../Search'
import Table from '../Table'
import './styles.scss'

const Content = () => {
  return (
    <div className="content">
      <div className="top_information">
        <div className="top_information__text">
          <h3 className="title_h3">All Customers</h3>
          <span className="information_status active">Active Members</span>
        </div>
        <Search />
      </div>
      <Table />
      <Pagination />
    </div>
  )
}

export default Content
