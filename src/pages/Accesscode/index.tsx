import React, { useEffect, useState } from "react";
import classes from "./Accesscode.module.scss";
import logo from "assets/carscanlogo.png";
import Button from "components/CustomButton";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { addData, resetState } from "store/companyData";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { sample } from "utils/sample";
import { getConpanyChapters$, getSessionId$ } from "../../api/CompanyDataFetch"


const Accesscode = () => {

	const navigate = useNavigate();
	const [otpValue, setOtpValue] = useState<string>("");
	const [chapters, setChapters] = useState<any>(null);
	const [netError, setNetError] = useState<any>(false);
	const [load, setLoad] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const sessionId = useAppSelector(
		({ companyData }: { companyData: any }) => companyData.data.sessionId
	  );

	const onChange = (otpInput: string) => {
		setOtpValue(otpInput);
	  };
	
	// useEffect(()=>{
	// 	dispatch(resetState());

	// 	const location =  window.location.href
	// 	let env = "accapi."
	// 	if(location.includes("dev") || location.includes("localhost"))
	// 		env = "acc.devinternal."
	// 	else if(location.includes("qaone"))
	// 		env = "accapi.qaone."
	// 	else if(location.includes("staging"))
	// 		env = "accapi.staging."
	// 	const url =  `https://${env}carscan.ai/warest/auth`

	// 	getSessionId$(url).then(async(res:any)=>{
	// 		const response = await res.json()
	// 		// console.log("respon", response)
	// 		dispatch(addData({ "sessionId": response.sessionId }));
	// 	  }).catch(()=>{
	// 		  console.log("Failed to get session Id")
	// 		})

	// },[])

	// useEffect(()=>{
	// 	if(otpValue.length === 4 && sessionId){
	// 		setLoad(true)
	// 		getConpanyChapters$(
	// 			otpValue,
	// 			sessionId
	// 		  )
	// 		  .subscribe(async (response:any) => {
	// 			dispatch(addData({ "chapters": response.data.chapters }));
	// 			dispatch(addData({ "otpValue": otpValue }));
	// 			setChapters(response.data.chapters)
	// 		  }
	// 		  ,
	// 		  err => {
	// 			setLoad(false)
	// 			setNetError(true)
	// 			setTimeout(()=>{
	// 				setNetError(false)
	// 			}, 5000)
	// 		});
	// }
	// },[otpValue, sessionId])  

	useEffect(()=>{
		console.log("chapters", chapters)
		if(chapters){
			setLoad(false)
			navigate(`/${otpValue}/${chapters[0].title.route}/${chapters[0].sub_chapters[0].title.route}`)
		}
	},[chapters])  




	const forgotPasswordHandler = ()=>{
		navigate("/forgot_passowrd")
	}

	const handleNext = ()=>{
		console.log("chapters", chapters)
		// if(!chapters)
		// 	setLoad(true)
		// else
		// 	navigate(`/${otpValue}/${chapters[0].title.route}/${chapters[0].sub_chapters[0].title.route}`)
		navigate(`/${otpValue}/${sample[0].title.route}/${sample[0].sub_chapters[0].title.route}`)
	}

	return (
		<div className={`${classes.mainWrapper}`}>
			{load && 	
				<div style={{backgroundColor:"transparent"}} className={classes.spinnerWrapper} >
					<div className={`${classes.spinner} text-center`}>
					</div> 
				</div>
			}
			<div className={`${classes.contentWrapper} text-center`}>
				<div className={`text-center mt-4 ${classes.logoWrapper}`}>
					<img src={logo} className={classes.logo} alt="image7" />
				</div>
				<div className={classes.welcomMessage} >
					Enter OTP
				</div>
				<p className= {classes.subMessage} > Please use new otp provided via email or existing otp</p>
				<p className={classes.subMessage} style={{marginTop: "3rem"}} > Enter new or existing OTP</p>
				<div className={classes.otpWrapper}>
					<OtpInput
						value={otpValue}
						className="justify-content-center w-100"
						onChange={onChange}
						numInputs={4}
						inputStyle= {classes.OTPinputStyle} 
						containerStyle="OTPContainer"
						isInputNum={true}
					/>
				</div>
				<div className={classes.forgotOtp} role="button" onClick={()=> forgotPasswordHandler()}>
					Forgot OTP?
				</div>

				<div className={classes.customWrapper}>
					<div style={{width: "20rem"}} >
						<Button disabled={otpValue.length !== 4 || load} className={`${classes.nextBtn}`} handleClick={() => handleNext() } title="Next" />
					</div>
				</div>
				{ netError &&
					<p className={classes.netWorkError} >Network Error!!</p>
				}
			</div>
		</div>
	);
};

export default Accesscode;
