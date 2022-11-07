import React from 'react';
import {Collection} from "./Collection";
import './index.scss';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
    const [collections, setCollections] = React.useState([]);

    React.useEffect(() => {
        fetch('https://6365b9d5046eddf1baf1db58.mockapi.io/inspired/v1/Photos')
            .then((res) => res.json())
            .then((json) => {
                setCollections(json);
            })
            .catch(err => {
                console.warn(err);
                alert(`Error while getting data`);
            });
    }, []);


  return (
    <div className="App">
      <h1>My photo collection</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">All</li>
          <li>Architecture</li>
          <li>Nature</li>
          <li>Portraits</li>
          <li>Animals</li>
        </ul>
        <input className="search-input" placeholder="Search by name" />
      </div>
      <div className="content">
            {collections.map((obj) => (
                <Collection
                name={obj.name}
                images={obj.photos}
                />
                ))}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
