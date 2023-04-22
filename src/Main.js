import './Main.css'
import Form from './Form'
import {useState, useEffect} from 'react'
import image from './image.jpg'

export default function Main() {

  const [memes,setMemes] = useState([]);
  
  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setMemes(data.data.memes))
  }, [])
  
  const [meme,setMeme] = useState({
    top: 'hey there',
    bottom: 'get lost!',
    url: 'https://i.imgflip.com/30b1gx.jpg'
  })
  
  function update(event) {
    const {name,value} = event.target;
    setMeme(prev=>(
      {...prev, [name]: value}
    ))
  }
  
  function getMeme() {
    const i = Math.floor(Math.random()*memes.length);
    const memeUrl = memes[i].url
    setMeme(prev=>({
      ...prev,
      url: memeUrl
    }))
  }
  
  return (
    <main>
      <Form
        form={meme}
        update={update}
        getMeme={getMeme} />
      
      <div className='meme'>
        <div className='meme-img'>
          <img src={meme.url} />
          <h1 className='meme-top'>{
            meme.top.toUpperCase()
          }</h1>
          <h1 className='meme-bottom'>{
            meme.bottom.toUpperCase()
          }</h1>
        </div>
      </div>
    </main>
  )
}
