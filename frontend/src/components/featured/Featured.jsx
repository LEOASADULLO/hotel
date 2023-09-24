import useFetch from "../../hooks/useFetch.js";
import "./featured.css";

const Featured = () => {
  const { data ,loading,error} = useFetch("/hotels/countByCity?cities=ITALY,SPAIN,CANADA");
  console.log(data);
  return (
    <div className="featured">
      {loading ? (
         "Loading plase wait"
      ) : (
      <>
        <div className="featuredItem">
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipO_6Dn4FI0E3JElk2jB4MNS2y9ne0AymvMJCqVO=w548-h318-n-k-no"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>ITALY</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/1059076792/photo/madrid-city-skyline-gran-via-street-twilight-spain.webp?b=1&s=170667a&w=0&k=20&c=XbY2EH57W-_js99mpKRG3BLpeUyzLDb-BSDgNuwoAFw="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>SPAIN</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/1368242984/photo/canada-flag-waving-in-ottawa.jpg?s=612x612&w=0&k=20&c=6xztoco_fpx0MD6kntgO5KaN5PLhOqtW4pI1MbG9kXw="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>CANADA</h1>
          <h2>{data[2]}properties</h2>
        </div>
      </div></>)}
    </div>
  );
};

export default Featured;


