import React, { useState } from 'react' // Importing React and useState hook for state management
import './Home.css' // Importing the Home component's CSS for styling
import Sidebar from '../../Components/sidebar/Sidebar' // Importing the Sidebar component
import Feed from '../../Components/feed/Feed' // Importing the Feed component

// The Home component takes a prop 'sidebar' to determine if the sidebar should be shown
const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0) // Defining a state variable 'category' with an initial value of 0, and a function 'setCategory' to update it

  return (
    <>
      {/* Conditionally rendering the Sidebar component if 'sidebar' prop is true.
      Passing 'sidebar' and 'setCategory' as props to the Sidebar component */}
      {sidebar && <Sidebar sidebar={sidebar} setCategory={setCategory} />}
      
      {/* Applying a dynamic class to the container div based on the 'sidebar' prop.
      If 'sidebar' is true, the default 'container' class is applied; otherwise, the 'large-container' class is added */}
      <div className={`container ${sidebar ? "" : 'large-container'}`}>
        {/* Rendering the Feed component and passing the 'category' state as a prop */}
        <Feed category={category} />
      </div>
    </>
  )
}

export default Home // Exporting the Home component to be used in other parts of the application
