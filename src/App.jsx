import React, { useState } from 'react'

const App = () => {
  const [form, setForm] = useState({
    title: "",
    description: ""
  })
  const [data, setData] = useState([]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setForm((prev) => ({
      ...prev, [name]: value

    }))
  }
  const handleClick = () => {
    let newObject = { ...form };
    setData((prev) => [...prev, newObject])
    console.log("newObject", newObject);
    console.log("Form", form);
    setForm({
      title: "",
      description: ""
    })
  }
  return (
    <div>
      <label htmlFor='title'>Title</label>
      <input name='title' value={form.title} onChange={handleChange} />
      <label htmlFor='description'>Descritpion</label>
      <input name='description' value={form.description} onChange={handleChange} />
      <div>
        <button type='button' onClick={handleClick}>Click Me</button>
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index} style={{ color: "white" }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App