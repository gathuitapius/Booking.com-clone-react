import "./header.css"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { faBed, faCalendarDays, faCar, faPerson, faPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import { DateRange } from 'react-date-range';
import { format } from "date-fns"
import { useNavigate } from "react-router-dom"


const Header = ({type}) => {
  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const navigate = useNavigate()
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOprtions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })

  const handleOption = (name, operation) => {
    setOprtions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  const handleSearch = () => {
    navigate("/hotels", {state:{destination,date,options}})

  }
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
        <div className="headerListItem active">
        <FontAwesomeIcon icon={faBed} /> 
        <span>Stays</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flight</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car Rentals</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className="headerListItem">
        <FontAwesomeIcon icon={faBed} />
        <span>Airport Taxi</span>
        </div>
      </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Awesome.</h1>
       <p className="headerDesc">
        Get rewarded for your Travel - Unlock instant saving of 20% or more with a free 
        PKbooking account!
       </p>
       <button className="headerButton">SignIn/Register</button>
       <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon"/>
          <input
          type="text"
          placeholder="Where are You going?"
          className="headerSearchInput"
          onChange={e=>setDestination(e.target.value)}
          />
          
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
          <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
        </div>
        {openDate && <DateRange
          editableDateInputs={true}
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className="date"
        />}
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson } className="headerIcon"/>
          <span
          onClick={() => setOpenOptions(!openOptions)} 
          className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
          {openOptions && <div className="options">
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
              <button
              disabled={options.adult <= 1}
              className="optionCounterBtn" 
              onClick={() => handleOption("adult", "d")}
              >-</button>
              <span className="optionCounterNumber">{options.adult}</span>
              <button className="optionCounterBtn" onClick={() => handleOption("adult", "i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
              <button 
              disabled={options.children <= 0}
              className="optionCounterBtn" 
              onClick={() => handleOption("children", "d")}
              >-</button>
              <span className="optionCounterNumber">{options.children}</span>
              <button className="optionCounterBtn" onClick={() => handleOption("children", "i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
              <button 
              disabled={options.room <= 1}
              className="optionCounterBtn" 
              onClick={() => handleOption("room", "d")}
              >-</button>
              <span className="optionCounterNumber">{options.room}</span>
              <button className="optionCounterBtn" onClick={() => handleOption("room", "i")}>+</button>
              </div>
            </div>
          </div>}
        </div>
        <div className="headerSearchItem">
          <button onClick={handleSearch} className="headerButton">Search</button>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Header
