import React, { FC } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import classes from './Logo.module.scss';
import cs from "classnames";

interface LogoProps {
  data: any;
}
interface Option {
  name: string,
  message: string,
  id: string,
}

const Logo: FC<LogoProps> = ({ data }) => {
  const { options, label } = data;

  const handleUploadValue = (option: Option) => () => {
   document.getElementById(option.id)?.click()
  };

  return (
    <div className="container">
      <div className="row justify-content-center border-line">
        <div className={classes.name}>{label}</div>
          {options.values.length > 0 &&
            options.values.map((option: Option) => 
          <div key={option.id} className="col-md-2 col-xs-12">
            <div className={cs(classes.uploadCover)} role="button" onClick={handleUploadValue(option)} >
              <div className="text-center">
                <div className="text-center">
                  <CloudUploadIcon className="mt-2"  style={{fontSize: "3rem"}} />
                </div>
              </div>
              <div className="pb-0" >
                <p className="text-center" style={{fontSize: "1rem"}} >Upload</p>
              </div>
              <input type="file" id={option.id} accept="image/*" hidden />
            </div>
            <p className={`text-center ${cs(classes.imageSize)}`}>{option.name}</p>
            <p className={`text-center ${cs(classes.imageSize)}`}><strong>{option.message}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
};

Logo.defaultProps = {
  data: {},
};

export default Logo;
