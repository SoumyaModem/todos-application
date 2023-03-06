import './index.css'

const TodoItem = props => {
  const {details, deleteItem} = props
  const {id, title} = details

  const onClickButton = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="list-container">
        <p>{title}</p>
        <div>
          <button className="button" type="button" onClick={onClickButton}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
