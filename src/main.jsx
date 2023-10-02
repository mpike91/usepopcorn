import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import StarRating from "./StarRating";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

{
  /* <StarRating
  maxRating={5}
  messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
/>
<StarRating size={24} color="red" className="test" defaultRating={3} />

<Test /> */
}

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>
//         {movieRating
//           ? `This movie was rated ${movieRating} stars`
//           : `This movie has not been rated yet.`}
//       </p>
//     </div>
//   );
// }
