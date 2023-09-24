import "./hotelUpload.css";
import { useNavigate } from "react-router-dom";

const EditHotel = () => {
  //     const [credentials, setCredentials] = useState({
  //         name: undefined,
  //         password: undefined,
  //     })

  // const {loading, error, dispatch} = useContext(AuthContext)

  const navigate = useNavigate("/hotels");
  // const handleChange = (e)=>{
  //     setCredentials((prev)=>({...prev, [e.target.id] : e.target.value }));
  // };

  // const handleClick = async e =>{
  //     e.preventDefault()
  //     dispatch({type:"LOGIN_START"})
  //     try {
  //         const res = await axios.post("/auth/login", credentials);
  //         dispatch({type:"LOGIN_SUCCESS", payload:res.data});
  //         navigate("/")
  //     } catch (error) {
  //         dispatch({type:"LOGIN_FAILURE", payload:error.res.data});
  //     }
  // };

  return (
    <div className="update">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          Login
        </button>
      </div>
    </div>
  );
};
export default EditHotel;
