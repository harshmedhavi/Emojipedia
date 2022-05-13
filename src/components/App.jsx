import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

// function Entry(props) {
//   return (
//     <div className="term">
//       <dt>
//         <span className="emoji" role="img" aria-label="Tense Biceps">
//           {props.emoji}
//         </span>
//         <span>{props.name}</span>
//       </dt>
//       <dd>
//         “You can do that!” or “I feel strong!” Arm with tense biceps. Also used
//         in connection with doing sports, e.g. at the gym.
//       </dd>
//     </div>
//   );
// }

function createEntry(ent) {
  return (
    <Entry
      key={ent.id}
      emoji={ent.emoji}
      name={ent.name}
      message={ent.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
