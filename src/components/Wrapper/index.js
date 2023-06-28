import Content from '../Content'
import user from '../../data/users'
import './styles.scss'

const Wrapper = () => {
  const { name } = user
  return (
    <div className="wrapper">
      <h2 className="title_h2">Hello {name} 👋🏼,</h2>
      <Content />
    </div>
  )
}

export default Wrapper
