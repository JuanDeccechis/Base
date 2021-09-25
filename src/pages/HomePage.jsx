import React, { Component } from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      serverEnabled: localStorage.getItem("serverEnabled"),
    }
  }

  componentDidMount() {
    const { posts, serverEnabled } = this.state; //this will be uploaded by reducer / sagas / api, when the user was authenticated
    if (!posts && serverEnabled)
      this.getDataFromApi("posts");
  
}

/*getDataFromApi(path) {
    fetch(`${localStorage.getItem('APIURL')}/${path}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    //  mode: 'no-cors' // 'cors' by default
    })
      .then( res => {
          return res.json();
      })
          .then( data => {
              this.setState({ [path]: data });
              
          })
}*/

async getDataFromApi(path) {
  let res = await fetch(`${localStorage.getItem('APIURL')}/${path}`, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  //  mode: 'no-cors' // 'cors' by default
  })
  let jsonData = await res.json()
  this.setState({ [path]: jsonData })
}

  render() {
    const { posts, serverEnabled } = this.state;
    if (!posts && serverEnabled) {
      return <Loader
              type="TailSpin"
              color="#2020bf"
              height={100}
              width={100}
              className="loader"
            />
  } else {
    return <article className="container">
        <p className="example-text">
          {posts && serverEnabled ? posts[0].name : 'Datos sin servicios'}
        </p>
        <p className="example-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed provident cupiditate vitae commodi quae, earum autem quaerat! Praesentium quis distinctio incidunt fugit, facilis odio illo quam error culpa nemo!
        </p>
    </article>;
  }
}
}

export default HomePage;
