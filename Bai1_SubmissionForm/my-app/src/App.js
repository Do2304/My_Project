import "./App.css";
import { React, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
    // Add your form submission logic here
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleReset = () => {
    // Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label for="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label for="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <label for="email">Enter Email* </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <label for="tel">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />
          <label for="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <label for="lang">Your best Subject</label>
          <input
            type="checkbox"
            name="lang"
            id="english"
            checked={subjects.english === true}
            onChange={(e) => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            name="lang"
            id="maths"
            checked={subjects.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="lang"
            id="physics"
            checked={subjects.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          />
          Physics
          <label for="file">Upload Resume*</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Enter Upload File"
            required
          />
          <label for="url">Enter URL*</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter url"
            required
          />
          <label>Select your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled selected={selectedOption === ""}>
              Select your Ans
            </option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MongoDB</option>
            </optgroup>
          </select>
          <label for="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About your self"
            required
          ></textarea>
          <button type="reset" value="reset" onClick={() => handleReset()}>
            Reset
          </button>
          <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;

//---------------------------------------------lan 1------------------------
// import {useState} from 'react'
// import "./App.css";

// export default function App(){
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [gender, setGender] = useState("male");
//   const [subjects, setSubjects] = useState({
//     english: true,
//     maths: false,
//     physics: false,
//   });
//   const [resume, setResume] = useState("");
//   const [url, setUrl] = useState();
//   const [selectedOption, setSelectedOption] = useState("");
//   const [about, setAbout] = useState("");

//   function handleSubjectChange(sub){
//     setSubjects((prev)=>({
//       ...prev, [sub]:!prev[sub]
//     }))
//   }
//   function handleReset(){
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setContact("");
//     setGender("male");
//     setSubjects({
//         english: true,
//         maths: false,
//         physics: false,
//     });
//     setResume("");
//     setUrl("");
//     setSelectedOption("");
//     setAbout("");
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(
//         firstName,
//         lastName,
//         email,
//         contact,
//         gender,
//         selectedOption,
//         subjects,
//         resume,
//         url,
//         about
//     );
//     // Add your form submission logic here
// };

//   return (
//     <div className='App'>
//       <h1>Form In React</h1>
//       <fieldset>
//         <form>
//             <label>first Name*</label>
//             <input placeholder='Enter First Name'
//               type='text'
//               id='firstname'
//               name='firstname'
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//             />

//             <label>Last Name*</label>
//             <input placeholder='Enter Last Name'
//               type='text'
//               id='lastname'
//               name='lastname'
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//               required
//             />

//             <label>Enter Email*</label>
//             <input placeholder='Enter First Name'
//                   type='email'
//                   name='email'
//                   id='email'
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   required
//             />

//             <label>Contact*</label>
//             <input placeholder='Enter Mobile Number'
//                   type="tel"
//                   name="contact"
//                   id="contact"
//                   value={contact}
//                   onChange={(e) =>setContact(e.target.value)}
//                   required
//             />

//             <label for='gender'>Gender*</label>
//             <input
//               name='gender'
//               type='radio'
//               value="male"
//               id='male'
//               checked={gender === 'male'}
//               onChange={(e)=> setGender(e.target.value)}
//             />Male
//             <input
//               type='radio'
//               id='female'
//               name='gender'
//               value="female"
//               checked={gender ==='female'}
//               onChange={(e)=>setGender(e.target.value)}
//             />Female
//             <input
//               name='gender'
//               type='radio'
//               value="other"
//               id='other'
//               checked={gender === 'other'}
//               onChange={(e)=> setGender(e.target.value)}
//             />Other

//             <label>Your best Subject</label>
//             <input
//               type='checkbox'
//               id='english'
//               checked={subjects.english === true}
//               onChange={(e) => handleSubjectChange("english")}
//             />English
//             <input
//               type='checkbox'
//               id='maths'
//               checked={subjects.maths === true}
//               onChange={(e) => handleSubjectChange("maths")}
//             />Maths
//             <input
//               type='checkbox'
//               id='physics'
//               checked={subjects.physics === true}
//               onChange={(e) => handleSubjectChange("physics")}
//             />Physics

//             <label>Upload Resume*</label>
//             <input placeholder='Enter upload file'
//               type='file'
//               id='file'
//               name='file'
//               onChange={(e)=> setResume(e.target.files[0])}
//               required
//             />

//             <label>Enter URL*</label>
//             <input placeholder='Enter your Ans'
//               type='url'
//               name='url'
//               id='url'
//               onChange={(e)=> setUrl(e.target.value)}
//               required
//             />

//             <label>Select your choice*</label>
//             <select
//               name='select'
//               id='select'
//               value={selectedOption}
//               onChange={(e)=>setSelectedOption(e.target.value)}
//             >
//               <option
//                   value=""
//                   disabled
//               >Select your Ans</option>
//               <optgroup label='Beginer'>
//                 <option  value="1">HTML</option>
//                 <option  value="2">CSS</option>
//                 <option  value="3">JavaScript</option>
//               </optgroup>
//               <optgroup label='Advance'>
//                 <option  value="4">React</option>
//                 <option  value="5">Node</option>
//                 <option  value="6">Express</option>
//                 <option  value="7">MongoDB</option>
//               </optgroup>
//             </select>

//             <label>About</label>
//             <textarea placeholder='About yourself'
//               name='about'
//               id='about'
//               onChange={e => setAbout(e.target.value)}
//               required
//             ></textarea>

//             <button
//               type='reset'
//               onClick={()=>handleReset()}
//             >Reset</button>

//             <button
//               type='submit'
//               onClick={(e) => handleSubmit(e)}
//             >Submit</button>
//         </form>
//       </fieldset>
//     </div>
//   );
// }

//---------------------------------------lan 2-------------------------------------
// import {useState} from 'react'
// import "./App.css"

// export default function App(){
//   const [firstName,setFirstName] = useState('')
//   const [lastName,setLastName] = useState('')
//   const [email,setEmail] = useState('')
//   const [contact,setContact] = useState('')
//   const [gender,setGender] = useState('male')
//   const [subjects,setSubjects] = useState({
//     english: true,
//     maths: false,
//     physics: false
//   })
//   const [resume,setResume] = useState("")
//   const [url,setUrl] = useState()
//   const [selectedOption,setSelectedOption] = useState('')
//   const [about,setAbout] = useState('')

//   function handleSubjectChange(sub){
//     setSubjects(pre => ({
//       ...pre, [sub] : !pre[sub]
//     }))
//   }

//   function handleSubmit(e){
//     e.preventDefault()
//     console.log(
//       firstName,
//       lastName,
//       email,
//       contact,
//       gender,
//       subjects,
//       resume,
//       url,
//       selectedOption,
//       about,
//     );
//   }
//   function handleReset(){
//     setFirstName('')
//     setLastName('')
//     setEmail('')
//     setContact('')
//     setGender('male')
//     setSubjects({
//       english: true,
//       maths: false,
//       physics: false,
//     })
//     setResume('')
//     setUrl('')
//     setSelectedOption('')
//     setAbout('')
//   }
//   return(
//     <div className='App'>
//       <h1>Form in React</h1>
//       <fieldset>
//         <form>
//           <label>First Name*</label>
//           <input placeholder='Enter First Name'
//             type='text'
//             value={firstName}
//             onChange={e=> setFirstName(e.target.value)}
//             required
//           />

//           <label>Last Name*</label>
//           <input placeholder='Enter Last Name'
//             type='text'
//             value={lastName}
//             onChange={e=> setLastName(e.target.value)}
//             required
//           />

//           <label>Enter Email*</label>
//           <input placeholder='Enter email'
//             type='email'
//             value={email}
//             onChange={e=> setEmail(e.target.value)}
//             required
//           />

//           <label>Contact*</label>
//           <input placeholder='Enter mobile number'
//             type='tel'
//             value={contact}
//             onChange={e=> setContact(e.target.value)}
//             required
//           />

//           <label>Gender*</label>
//           <input
//             type='radio'
//             name='gender'
//             value='male'
//             checked={gender === 'male'}
//             onChange={e => setGender(e.target.value)}
//           />Male
//           <input
//             type='radio'
//             name='gender'
//             value='female'
//             checked={gender === 'female'}
//             onChange={e => setGender(e.target.value)}
//           />Female
//           <input
//             type='radio'
//             name='gender'
//             value='other'
//             checked={gender === 'other'}
//             onChange={e => setGender(e.target.value)}
//           />Other

//           <label>Your best Subject</label>
//           <input
//             type='checkbox'
//             value='english'
//             checked={subjects.english ===true}
//             onChange={(e) => handleSubjectChange('english')}

//           />English
//           <input
//              type='checkbox'
//              value='maths'
//             checked={subjects.maths ===true}
//             onChange={(e) => handleSubjectChange('maths')}
//           />maths
//           <input
//              type='checkbox'
//              value='physics'
//             checked={subjects.physics ===true}
//             onChange={(e) => handleSubjectChange('physics')}
//           />Physics

//           <label>Upload Resume*</label>
//           <input
//             type='file'
//             onChange={e => setResume(e.target.files[0]) }
//             required
//           />

//           <label>Enter Url*</label>
//           <input
//             type='url'
//             placeholder='Enter Url'
//             onChange={e =>setUrl(e.target.value)}
//             required
//           />

//           <label>Select your choice</label>
//           <select
//               value={selectedOption}
//               onChange={e => setSelectedOption(e.target.value)}
//           >
//             <option
//               value=''
//               disabled
//             >Select your Ans</option>
//             <optgroup   label='Beginer'>
//               <option value='1'>HTML</option>
//               <option value='2'>CSS</option>
//               <option value='3'>JavaScript</option>
//             </optgroup>
//             <optgroup   label='Senior'>
//               <option value='4'>React</option>
//               <option value='5'>Node</option>
//               <option value='6'>Angular</option>
//             </optgroup>
//           </select>

//           <label>About</label>
//           <textarea placeholder='About yourself'
//             value={about}
//             onChange={e => setAbout(e.target.value)}
//           ></textarea>

//           <button onClick={()=>handleReset()}>Reset</button>
//           <button onClick={e=>handleSubmit(e)}>Submit</button>
//         </form>
//       </fieldset>
//     </div>
//   );
// }
