import React from 'react'
import { Link, useOutletContext, useNavigate } from 'react-router-dom';


function Feed() {
  const [feedData, setFeedData] = useOutletContext();
  let navigate = useNavigate();

  React.useEffect(()=>{
    if(!feedData){
      return navigate("/feeds");
    }
  }, [])

  return (
    <div className='FeedDetailPage'>
      { feedData ? 
        <>
        <div className='FeedHeader'>
          <p>Feed details</p>
          <div className='close' onClick={() => navigate(-1)}>
            <span>X</span> close
          </div>
        </div>
        <div className='FeedBody'>
          <img src={feedData.urlToImage}/>
          <p className='card-title'>
            {feedData.author ? feedData.author : 'Unknown source'}
          </p>
          <p className='card-description'>{feedData.description}</p>
        </div>
        </>
      : null }
    </div>
  )
}

export default Feed