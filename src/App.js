import React from 'react';
import {Collection} from "./Collection";
import './index.scss';

const cats = [
{ "name": "All" },
{ "name": "Nature" },
{ "name": "Portraits" },
{ "name": "Architecture" },
{ "name": "Zoo" }
]

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5NbJn0HyhAqcQPSfuN3kKcJQ0YaKrlTE",
    authDomain: "my-photo-collection-1db46.firebaseapp.com",
    projectId: "my-photo-collection-1db46",
    storageBucket: "my-photo-collection-1db46.appspot.com",
    messagingSenderId: "269985181744",
    appId: "1:269985181744:web:cfb69ca64179ea4295fdf5",
    measurementId: "G-Y5XV72VD6K"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


function App() {
    const [categoryId, setCategoryId] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(true);
    const [searchValue, setSearchValue] = React.useState('');
    const [collections, setCollections] = React.useState([]);

    React.useEffect(() => {
        setIsLoading(true);

        const category = categoryId ? `category=${categoryId}` : '';

        fetch(
            `https://6365b9d5046eddf1baf1db58.mockapi.io/inspired/v1/Photos?page=${page}&limit=3&${category}`)
            .then((res) => res.json())
            .then((json) => {
                setCollections(json);
            })
            .catch((err) => {
                console.warn(err);
                alert(`Error while getting data`);
            })
            .finally(() => setIsLoading(false));
    }, [categoryId, page]);



  return (
    <div className="App">
      <h1>My photo collection</h1>
      <div className="top">
        <ul className="tags">
            {cats.map((obj, i) => (
                    <li
                        onClick={() => setCategoryId(i)}
                        className={categoryId === i ? 'active': ''} key={obj.name}>
                        {obj.name}
                    </li>
                ))}
        </ul>
        <input value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}
               className="search-input"
               placeholder="Search by name" />
      </div>
      <div className="content">
          {isLoading ? (
              <h2>Loading...</h2>
              ) : (
              collections
                .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map((obj, index) => <Collection key={index} name={obj.name} images={obj.photos}/>
                ))}
      </div>
      <ul className="pagination">
          {
            [...Array(5)].map((_, i) => (
                <li onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''}>
                    {i + 1}</li>
            ))}
      </ul>
    </div>
  );
}

export default App;
