import styles from '../styles/Home.module.css'


//  you will need the swr from next js rest api .
// check the package.json 
// you will see swr in the dependencies section
import useSWR from 'swr'

export default function Home() {

  
  // call the ping api endpoint
  // this will take an url param and return a response
  // turn it into json.
  const fetcher = (url) => fetch(url).then((res) => res.json())

  //  use this endpoint fetcher and callbadk handler
  const { data, error } = useSWR('/api/ping', fetcher)

  // you can get and match it as this way.
  // this console log should return "Pong"
  console.log("data: ", data );


  return (
    <div className={styles.container}>
      <h1 className={{ display: 'flex', textAlign: 'center', fontSize: '2em', color: '#777777' }}>
        { data && Object.values(data)[0] == 'pong' ? "Pong From API" : <> Loading ...</> }
      </h1>
    </div>
  )
}
