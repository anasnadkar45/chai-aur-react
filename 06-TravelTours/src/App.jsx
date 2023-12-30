import { useState } from 'react'
import './App.css'
// import data from './data'
import Tours from './components/Tours'

function App() {
  const data = [
    {
      id: 1,
      name: "agra",
      info: "Agra is a city in the northern part of India and is located in the state of Uttar Pradesh. It is renowned for its historical and cultural significance, primarily due to the presence of the iconic Taj Mahal, one of the Seven Wonders of the World.Agra's rich history, architectural marvels, and cultural heritage make it a significant destination for tourists from around the world.",
      image: "https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg",
      price: "35,758"
    },
    {
      id: 2,
      name: "ranimahal",
      info: "Agra is a city in the northern part of India and is located in the state of Uttar Pradesh. It is renowned for its historical and cultural significance, primarily due to the presence of the iconic Taj Mahal, one of the Seven Wonders of the World.Agra's rich history, architectural marvels, and cultural heritage make it a significant destination for tourists from around the world.",
      image: "https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg",
      price: "35,758"
    },
    {
      id: 3,
      name: "agra",
      info: "Agra is a city in the northern part of India and is located in the state of Uttar Pradesh. It is renowned for its historical and cultural significance, primarily due to the presence of the iconic Taj Mahal, one of the Seven Wonders of the World.Agra's rich history, architectural marvels, and cultural heritage make it a significant destination for tourists from around the world.",
      image: "https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg",
      price: "35,758"
    },
    {
      id: 4,
      name: "agra",
      info: "Agra is a city in the northern part of India and is located in the state of Uttar Pradesh. It is renowned for its historical and cultural significance, primarily due to the presence of the iconic Taj Mahal, one of the Seven Wonders of the World.Agra's rich history, architectural marvels, and cultural heritage make it a significant destination for tourists from around the world.",
      image: "https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg",
      price: "35,758"
    },
    {
      id: 5,
      name: "agra",
      info: "Agra is a city in the northern part of India and is located in the state of Uttar Pradesh. It is renowned for its historical and cultural significance, primarily due to the presence of the iconic Taj Mahal, one of the Seven Wonders of the World.Agra's rich history, architectural marvels, and cultural heritage make it a significant destination for tourists from around the world.",
      image: "https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg",
      price: "35,758"
    },
    {
      id: 6,
      name: "agra",
      info: "Agra is a city in the northern part of India and is located in the state of Uttar Pradesh. It is renowned for its historical and cultural significance, primarily due to the presence of the iconic Taj Mahal, one of the Seven Wonders of the World.Agra's rich history, architectural marvels, and cultural heritage make it a significant destination for tourists from around the world.",
      image: "https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg",
      price: "35,758"
    },
    {
      id: 7,
      name: "agra",
      info: "Agra is a city in the northern part of India and is located in the state of Uttar Pradesh. It is renowned for its historical and cultural significance, primarily due to the presence of the iconic Taj Mahal, one of the Seven Wonders of the World.Agra's rich history, architectural marvels, and cultural heritage make it a significant destination for tourists from around the world.",
      image: "https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg",
      price: "35,758"
    },
    {
      id: 8,
      name: "agra",
      info: "Agra is a city in the northern part of India and is located in the state of Uttar Pradesh. It is renowned for its historical and cultural significance, primarily due to the presence of the iconic Taj Mahal, one of the Seven Wonders of the World.Agra's rich history, architectural marvels, and cultural heritage make it a significant destination for tourists from around the world.",
      image: "https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg",
      price: "35,758"
    },
    {
      id: 9,
      name: "agra",
      info: "Agra is a city in the northern part of India and is located in the state of Uttar Pradesh. It is renowned for its historical and cultural significance, primarily due to the presence of the iconic Taj Mahal, one of the Seven Wonders of the World.Agra's rich history, architectural marvels, and cultural heritage make it a significant destination for tourists from around the world.",
      image: "https://tripcompanion.com/wp-content/uploads/2017/12/Taj-Mahal-Agra-India.Square-1.jpg",
      price: "35,758"
    }
  ]


  const [tours, setTours] = useState(data)
  // console.log(tours);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
  }

  if(tours.length === 0) {
    return(
      <div>
        <h1>No tour left</h1>
        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <>
      <h1>Epic Destinations Hub</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  )
}

export default App
