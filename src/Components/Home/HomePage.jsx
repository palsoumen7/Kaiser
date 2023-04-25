import React, { useState } from 'react'
import "./HomePage.css";

const Homepage = () => {

  const [regex, setRegex] = useState('');
  const [inputText, setInputText] = useState("");
  const [matchText, setMatchText] = useState("");

  const handleRegexChange = (e) => {
    setRegex(e.target.value);
  };

  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCompare = () => {
    const regexObj = new RegExp(regex, "g");
    const matches = inputText.match(regexObj);
    if (matches && matches.length) {
      setMatchText(matches.join(", "));
    } else {
      setMatchText("No match found.");
    }
  };


  return (
    <>
      <div className='px-6'>
        <div>
          <h1 className='md:text-[24px] text-[16px] font-bold text-center py-10 '>
            Data Maintenance App
          </h1>

          <div className="flex gap-4 overflow-x-auto">
            <h6>Home</h6>
            <h6>Home</h6>
            <h6>Resource Management</h6>
            <h6>Home</h6>
            <h6>Home</h6>
            <h6>Home</h6>
            <h6>Home</h6>
          </div>

          <div className='mt-3 md:h-[40px] h-[30px] bg-black  flex items-center justify-end '>
            <p className='text-white  px-6'>Lorem</p>
          </div>

          <div className='py-6'>

            <div class="mb-6">
              <input
                type="text"
                placeholder='Regex'
                // id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="regex-input"
                value={regex}
                onChange={handleRegexChange}
              />
            </div>
            <div className='mb-6'>
              <input
                type="text"
                placeholder='Text Area'
                // id="small-input"
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="input-text"
                name="input-text"
                value={inputText}
                onChange={handleInputTextChange}
              />
            </div>

            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCompare}>
              Apply Regex
            </button>

          </div>


          <div className='w-full h-[100px]  border-black border-[1px] mb-10 '>
            <p>{matchText}</p>
          </div>


          <footer>
            <div className="footer-container">
              <div>2012 - 2021 Kaiser Permanente HelthConnect All rights reserved</div>
            </div>
          </footer>

        </div>
      </div>
    </>
  )
}

export default Homepage