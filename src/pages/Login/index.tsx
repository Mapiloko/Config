import React, { useState } from "react";
import classes from "./Login.module.scss";
import logo from "assets/carscanlogo.png";
import Button from "components/CustomButton";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";


const Login = () => {
	const [passType, setType] = useState(true)
	const navigate = useNavigate();
	
	const handleChange = ()=> { console.log("empty") }

	const handleClick = ()=>{
		navigate("/otp")
	}

	return (
		<div className={classes.mainWrapper}>
			<div className={`${classes.contentWrapper} text-center`}>
				<div className={`text-center mt-4 ${classes.logoWrapper}`}>
					<img src={logo} className={classes.logo} alt="image3" />
				</div>
				<div className={classes.welcomMessage} >
					Welcome back
				</div>
				<p className= {classes.subMessage} > Sign in with your credentials below</p>
				<div>
					<input className= {classes.userName} placeholder="Enter your user name" onChange={handleChange}/>
				</div> 
				<div className={`row ${classes.passWordWrapper}`}>
					<div className="col-10 text-start p-0">
						<input className= {classes.passWord} placeholder="Enter your password" type={passType ? "password" : "text"} onChange={handleChange}/>		
					</div>
					<div className={`col-2 ${classes.iconWrap}`} role="button" onClick={()=> setType(!passType) } >
						{passType ?
							<VisibilityOffIcon style={{fontSize: "20px"}} /> :
							<VisibilityIcon style={{fontSize: "20px"}} /> 
						 }
					</div>
				</div>
				<div style={{width: "100%", display: "grid", justifyContent: "center"}}>
					<div style={{width: "20rem"}} >
						<p role="button" className={`${classes.forgotPassword} text-start`} >Forgot Password?</p>
						<Button className={`${classes.nextBtn}`} handleClick={()=>handleClick()} title="Next" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
