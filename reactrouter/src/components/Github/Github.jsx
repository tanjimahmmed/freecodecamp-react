import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const data = useLoaderData()
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/tanjimahmmed')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div>Github repo: {data.public_repos} <br/>
    Name: {data.name}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/tanjimahmmed')
    return response.json()
}