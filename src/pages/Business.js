import React from "react";
import PackageCard from '../components/PackageCard';
import UnsplashImg from "../components/UnsplashImg";
const Business = (props) => { 
  return (<>
    <div className="container">
      <div className="row">
        {props.rateCards.map((card) => (
          <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column align-items-md-center align-items-center">
            <PackageCard {...card} />
          </div>
        ))}
      </div>
    </div>

    <section class="jumbotron food">
<div class="container">
  <h1 class="display-4 text-center cuisine-heading section-heading">Réunion d'affaires</h1>
  <div class="container baguette-div">
    <UnsplashImg query="business-meeting" />
  </div>
</div>
</section>
    </>
  )
}

export default Business;