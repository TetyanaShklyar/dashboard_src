import user from '../../data/users'
import './styles.scss'

const User = () => {
  const { name, position, image } = user
  return (
    <div className="user">
      <div className="user_photo">
        <img src={`${window.location.pathname}` + image} />
      </div>
      <div className="user_description">
        <p className="user_description__name">{name}</p>
        <p className="user_description__position">{position}</p>
      </div>
    </div>
  )
}

export default User
