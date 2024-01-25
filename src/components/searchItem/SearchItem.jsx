import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
        />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartment</h1>
            <span className="siDistance">500 from centre</span>
            <span className="siTaxiOption">Free airport Taxi</span>
            <span className="siSubTitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">
                Entire studio . 1 bathroom . 21m:sqrt 1 full bed
            </span>
            <span className="siCancelOp">
                Free Cancellation
            </span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excelent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">KSH 12000</span>
                <span className="siTaxOp">Includes Taxes and Fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>

    </div>
  )
}

export default SearchItem