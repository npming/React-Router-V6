import React from 'react'
import '../Styles/Feeds.css'

function Feeds() {

  const [state, setState] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
      if(!state.length){
        fetch('https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json')
        .then((res) => res.json())
        .then(data => {
          if(data.articles && data.articles.length){
            setState(data.articles);
            setLoading(false)
          } else {
            setLoading(false)
          }
        })
        .catch(err => {
          console.log(err);
          setLoading(false)
        })
      }
  },[state])

  return (
    <div className='feeds-wrapper'>
      <h3 className='heading'>Feeds</h3>
      {
        loading === false && state.length ? 
          <ul className='feeds-list'>
            {
              state.map((item, index) => {
                return (
                  <li key={index}>
                    <div className='card'>
                      <img src={item.urlToImage}/>
                      <p className='card-title'>
                        {item.author ? item.author : 'Unknown source'}
                      </p>
                      <p className='card-description'>{item.description}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        : loading && !state.length ?
            <h3 className='feeds-loader'>Loading please wait....</h3>
        : "No data available, Try again later"
      }
    </div>
  )
}

export default Feeds