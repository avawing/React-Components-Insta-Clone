/* 
Start here and work your way down the nested components.
Not all files in the project need code added.
Look at each file to see what props need to be passed.
*/

// Import the state hook
import React , {useState} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
// Import the Posts (plural!) and SearchBar components, 
//since they are used inside App component
// Import the dummyData
import dummyData from './dummy-data'

const App = () => {
  // Create a state called 'posts' to hold the list of posts, initializing to dummyData.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [posts, setPosts]  = useState(dummyData);
  const [search, setSearch] = useState('');


  //const resetInputField = () => {
    //setSearch('');
  //};
  
    // const searchFunction = (event) => {
    //   event.preventDefault();
    //   resetInputField();
    //   posts.forEach(post => {

      
    //     if(Object.values(post).includes(search)||(!Object.values(post).includes(search))){
    //       console.log(post)
    //       return post;
    //     }
    //   }
    //     )
    // };


  const likePost = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      })
    );
  };

  return (
    <div className="App">
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar setSearch = {setSearch} search = {search}/>
      <Posts 
      likePost = {likePost} 
      
      posts = {posts.filter(post => {
        if(post.username.includes(search)||!(search)){
          return post
        }
        return false;
      })}      
      
      />
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
