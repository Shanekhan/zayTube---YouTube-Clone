import React, { useState, useEffect } from 'react' // Importing React, useState for state management, and useEffect for side effects
import axios from 'axios' // Importing axios for making HTTP requests
import { useParams } from 'react-router-dom' // Importing useParams to access route parameters
import './Playlist.css' // Optional, importing custom CSS for styling the Playlist component

// API key for accessing YouTube Data API
const API_KEY = 'AIzaSyCBUBM-ZXtvEa7DTX7prpSLd0FYl9g5Odo'

const Playlist = () => {
  const { playlistId } = useParams() // Extracting playlistId from the URL parameters
  const [videos, setVideos] = useState([]) // State to store the list of videos
  const [loading, setLoading] = useState(true) // State to manage loading status

  // useEffect to fetch videos whenever the playlistId changes
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Making a GET request to the YouTube Data API to fetch videos in the playlist
        const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
          params: {
            part: 'snippet', // Fetching video details like title, thumbnails, etc.
            playlistId: playlistId, // Passing the playlist ID from URL parameters
            key: API_KEY, // Your API key for authentication
            maxResults: 10, // Limiting the number of results (can be adjusted)
          },
        })
        setVideos(response.data.items) // Storing the fetched videos in the state
        setLoading(false) // Setting loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching videos:', error) // Logging any errors
        setLoading(false) // Stop loading even if there's an error
      }
    }

    fetchVideos() // Calling the function to fetch videos
  }, [playlistId]) // useEffect dependency array, re-runs if playlistId changes

  return (
    <div className="playlist-container">
      {loading ? (
        <div>Loading videos...</div> // Displaying a loading message while fetching data
      ) : (
        <div className="list">
          {/* Iterating over the videos array and rendering each video as a clickable card */}
          {videos.map(video => (
            <a
              key={video.snippet.resourceId.videoId} // Unique key for each video card
              href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`} // Link to the YouTube video
              className="card"
            >
              {/* Displaying the video thumbnail */}
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="card-img"
              />
              {/* Displaying the video title */}
              <h2>{video.snippet.title}</h2>
              {/* Displaying the channel name */}
              <h3>{video.snippet.channelTitle}</h3>
              {/* Displaying the publication date of the video */}
              <p>{new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default Playlist // Exporting the Playlist component to be used in other parts of the application
