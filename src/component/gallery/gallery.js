import React, {useState, useEffect} from "react";
import API from "./API";
import './gallery.css'

let pageNum = 1;

const gallery = () => {

  const [imagesArray, setImagesArray] = useState([]);
  const [totalPages, setTotalPages] = useState(0)

  const fetchImages = pageNumber => {
    API.get("/",{params:{page:pageNumber}}).then(res => {
      // console.log(res)
      setImagesArray([...imagesArray,res.data.hits]);
      setTotalPages(res.data.totalHits / res.data.hits.length);
    })
    .catch((err) => console.log(err)); 
  }

  useEffect(() => {
    fetchImages(pageNum)
  },[])

  return (
    <div>
      <p>App</p>
    </div>
  );
};

export default gallery
