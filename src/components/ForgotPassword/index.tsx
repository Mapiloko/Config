import React, { useEffect, useState } from "react";
import classes from "./ForgotPassword.module.scss";
import logo from "assets/carscanlogo.png";
import Button from "components/CustomButton";
import { useNavigate } from "react-router-dom";
// import OtpInput from "react-otp-input";
import cs from "classnames";
import { getCompaniesData$ } from "../../api/CompanyDataFetch"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { sample } from "../../utils/sample"
import  $  from "jquery";
import { addData } from "store/companyData";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { getConpanyChapters$ } from "../../api/CompanyDataFetch"



const ForgotPassword = () => {

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [otpValue, setOtpValue] = useState<string>("");
	const [searchValue, setSearch] = useState<string>("");
	const [retry, setRetry] = useState<boolean>(false);
	const [load, setLoad] = useState<boolean>(false);
	const [page, setPage] = useState<number>(0);
	const [allowedPages, setAllowedPages] = useState<number>(0);
	const [displayData, setDisplayData] = useState<any[]>([]);
	const [pages, setPages] = useState<number[]>([1]);
	const [originalData, setOriginaldata] = useState<any[]>([]);

	const sessionId = useAppSelector(
		({ companyData }: { companyData: any }) => companyData.data.sessionId
	  );

	const pageSize = 20;

	const getData = (page_ = 1)=>{
		setLoad(true)
		getCompaniesData$(
			page_,
			pageSize,
			sessionId
		  ).subscribe(async (response:any) => {
			  setAllowedPages(Math.ceil(parseInt(response.data.pagination.total_no_records)/pageSize))
			  setDisplayData([...displayData,...response.data.data])
			  setOriginaldata([...originalData,...response.data.data])
			  setLoad(false)
		  },
		  err => {
			console.log('Got some error from Server', err)
		  	setTimeout(()=>{
			setRetry(true)
			setLoad(false)
		  }, 16000)
		});
		
	}

	useEffect(()=>{
		if(sessionId)
			if((allowedPages > page) || allowedPages === 0 )
			{
				setPage(page+1)
				getData(page+1)
			}
	},[pages, sessionId])

	const handleSearch = (sample:any)=>{
		setOtpValue(sample.otp)
		setSearch(`${sample.email}, ${sample.company_name}, ${sample.otp}`)
	}

	const handleChange = (e:any) => {
		const value = e.target.value.toLowerCase()
		setSearch(value)
		
		const seachContent = originalData.filter((c)=>{
			return c.email?.toLowerCase().includes(value) || c.company_name?.toLowerCase().includes(value) 
			|| c.otp?.toString().includes(value)
		})
		setDisplayData(seachContent)
		setOtpValue("")
	}
	
	const reloadData = ()=>{
		setRetry(false)
		getData()
	}

	const handleNext = ()=> {
			setLoad(true)
			getConpanyChapters$(
				otpValue,
				"sessionid"
			  )
			  .subscribe(async (response:any) => {
				dispatch(addData({ "chapters": response.data.chapters }));
				navigate(`/${otpValue}/${response.data.chapters[0].title.route}/${response.data.chapters[0].sub_chapters[0].title.route}`)
				setLoad(false)
			  }
			  ,
			  err => {
				console.log('Got some error from Server', err)
				setTimeout(()=>{
					setLoad(false)
				}, 20000)
			});

	}

	const handleScroll = () =>{
            $('.scroll-div').on('scroll', function() {
                if ($(this).scrollTop() +
                    $(this).innerHeight() >= 
                    $(this)[0].scrollHeight) {
					if(!pages.includes(page+1) )
					{
						setPages([...pages, page+1])
					}
                }
            });
	}

	return (
		<div className={`${classes.mainWrapper}`}>
			{load && 	
				<div style={{backgroundColor:"transparent"}} className={classes.spinnerWrapper} >
					<div className={`${classes.spinner} text-center`}>
					</div> 
				</div>
			}
			<div className={`${ cs(classes.contentWrapper, classes.listOptions)} text-center`}>
				<div className={`text-center mt-4 ${classes.logoWrapper}`}>
					<img src={logo} className={classes.logo} alt="image2" />
				</div>
				<div className={classes.welcomMessage} >
					Enter OTP
				</div>
				<p className= {classes.subMessage} > Please use new otp provided via email or existing otp</p>

				<div className={classes.customWrapper}>
					<div className={`${cs(classes.componies, {[classes.spinnerWrap]: originalData.length === 0 })} container`} >
						{originalData.length === 0 && !retry ? 
							<div style={{backgroundColor:"transparent"}} className={classes.spinnerWrapper} >
								<div className={`${classes.spinner} text-center`}>
								</div> 
							</div>
							: 
						retry && originalData.length === 0? 
							<div style={{height:"100%", width:"100%", margin: "auto"}}>
								<p style={{color:"resd"}}>Failed To Load Response...</p>
								<button className={`${classes.tryBtn}`} onClick={() => reloadData() } >Try again</button>
							</div> 
							:
							<>
								<div className={`row ${classes.searchBar}`}>
									<div className="col-11 text-start">
										<input className= {classes.searchContent} value={searchValue} placeholder="Search" onChange={(e)=>handleChange(e)}/>		
									</div>
									<div className={`col-1 ${classes.iconWrap}`} role="button" >
										<ArrowDropDownIcon className={classes.arrowIcon}/> 
									</div>
								</div>
								<div className="scroll-div" style={{overflowY: "auto", margin:"0", padding:"0", height:"18.5rem" }} onScroll={()=>handleScroll()} >
									<div className="container">
										{displayData.map((sample: any, index)=>{
											return (
												<div className={`${classes.rowContent} row py-2`} onClick={()=>handleSearch(sample)} role="button" key={index}>
													<div className="col-md-6 text-start ps-0">{sample.email}</div>
													<div className="col-md-3 text-start" >{sample.company_name}</div>
													<div className="col-md-3 text-start" >{sample.otp}</div>
												</div>
											)
										})}
									</div>
								</div>
							</>
						}
						
					</div>
				</div>
				<div className={classes.customWrapper}>
					<div style={{width: "20rem"}} >
						<Button disabled={otpValue.length === 0 || load} className={`${classes.nextBtn}`} handleClick={() => handleNext() } title="Next" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForgotPassword;
