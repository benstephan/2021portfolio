import React, {useState, useEffect} from "react";
import './ThemeColorToggle.scss';

export default function ThemeColorToggle() {
    //False = Light, True = Dark
    const [themeColor, setThemeColor] = useState(false);

    const toggleThemeColor = () => {     
        if(themeColor === false){
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            setThemeColor(true);
        }else if(themeColor === true){
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            setThemeColor(false);
        }else{}
    }

   return (
    <label id="dark-switch" className="toggle-label">
      <input type="checkbox" />
      <span className="back" onClick={() => toggleThemeColor()}>
        <span className="toggle"></span>
        <span className="tech-label label on">
          <svg
            width="18"
            height="18"
            viewBox="0 0 26 26"
            xmlns="http://www.w3.org/2000/svg"
            class="block text-white60"
          >
            <path
              d="M13 18c-2.7614 0-5-2.2386-5-5s2.2386-5 5-5 5 2.2386 5 5-2.2386 5-5 5zm0-13.8947a.6842.6842 0 01-.6842-.6842V.6842a.6842.6842 0 011.3684 0v2.7369A.6842.6842 0 0113 4.1053zm6.3189 2.5758a.7257.7257 0 010-1.0263l2.0526-2.0526a.7257.7257 0 111.0263 1.0263L20.3452 6.681a.7257.7257 0 01-1.0263 0zM21.8947 13a.6842.6842 0 01.6842-.6842h2.7369a.6842.6842 0 010 1.3684h-2.7369A.6842.6842 0 0121.8947 13zm-2.5758 6.3189a.7257.7257 0 011.0263 0l2.0526 2.0526a.7257.7257 0 11-1.0263 1.0263l-2.0526-2.0526a.7257.7257 0 010-1.0263zM13 21.8947a.6842.6842 0 01.6842.6842v2.7369a.6842.6842 0 01-1.3684 0v-2.7369A.6842.6842 0 0113 21.8947zM6.6811 19.319a.7257.7257 0 010 1.0263l-2.0526 2.0526a.7257.7257 0 11-1.0263-1.0263l2.0526-2.0526a.7257.7257 0 011.0263 0zM4.1053 13a.6842.6842 0 01-.6842.6842H.6842a.6842.6842 0 010-1.3684h2.7369A.6842.6842 0 014.1053 13zM6.681 6.6811a.7257.7257 0 01-1.0263 0L3.6022 4.6285a.7257.7257 0 111.0263-1.0263L6.681 5.6548a.7257.7257 0 010 1.0263z"
              fill="currentColor"
              fill-rule="nonzero"
            ></path>
          </svg>
        </span>
        <span className="design-label label off">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-800"
          >
            <path
              d="M4.2716 10.4288C1.6043 9.7141.0214 6.9724.7361 4.3051 1.2858 2.2538 3.0342.8438 5.0258.627a4.1544 4.1544 0 00-.4905 1.129l-.1905.711c-.5916 2.208.7187 4.4774 2.9266 5.069 1.0629.2848 2.14.1288 3.0374-.3559-.8276 2.4926-3.467 3.9373-6.0372 3.2486z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </span>
      </span>
    </label>
  );
}
