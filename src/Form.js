import './Form.css'

function Form({form, update, getMeme}) {

  const submit = (event) => {
    event.preventDefault()
    getMeme()
  }

  return (
    <form onSubmit={submit}>
      
      <input
        className='form-top'
        type='text'
        name='top'
        placeholder='Top Text'
        onChange={update}
        value={form.top} />
      
      <input
        className='form-bottom'
        type='text'
        name='bottom'
        placeholder='Bottom Text'
        onChange={update}
        value={form.bottom} />
      
      <button>Get a new meme image 🖼️</button>
      
    </form>
  )
}

export default Form;
  