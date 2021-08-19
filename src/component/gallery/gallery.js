import React, {useEffect} from 'react'
import axios from 'axios'

const Gallery = () => {
  // const [gambar, setGambar] = useState([])
  
  useEffect(() => {
    axios
    .get('https://mirror-application.herokuapp.com/mirror/photos/all')
  .then ((response) => {
    console.log(response)
  })
  .catch ((error) => {
    console.log(error)
  })
}, []);

  return (
    <div>
      
    </div>
  )
}

export default Gallery
