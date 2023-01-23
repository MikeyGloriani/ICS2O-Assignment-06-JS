// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-06-JS/sw.js", {
    scope: "/ICS2O-Assignment-06-JS/",
  })
}

const getJoke = async (URLAddress) => {
  try {
    // API fetch
    const result = await fetch(URLAddress);
    const jsonData = await result.json();
    console.log(jsonData);

    //Expression for the jokes
    if (jsonData != "none") {

      // variable for said jokes
      const joke = jsonData.joke

      // display joke
      document.getElementById("hello-world").innerHTML = joke
    }
    else {
      console.log(Error)
    }
  } catch (err) {
    console.log(err);
  }
};

getJoke("https://v2.jokeapi.dev/joke/Any?safe-mode&type=single");
