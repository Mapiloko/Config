import Axios from "./axios";
import { from } from "rxjs";

export const getCompaniesData$ = (
  pageNo,
  pageSize,
  sessionid
) =>
    from(
    Axios.get(
      `/coreservice/companies/?page-no=${pageNo}&page-size=${pageSize}`,
      { headers: { "sessionid": sessionid
      } }
        )
    );


export const getConpanyChapters$ = (
  otp,
  sessionid
) =>
    from(
    Axios.get(
      `/coreservice/config-dashboard/get/${otp}`,
      { headers: { "sessionid": sessionid
    } }
      )
    );

  export const UpdateInputApi$ = (
    url,
    body,
    sessionid
  ) =>
    fetch(
      `${url}`,
      {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          "sessionid": sessionid
        },
        body: JSON.stringify(body),
      }
    )
      .then((res) => {
        if (res.status === 200 || res.status === 204 || res.status === 201)
          return res;
        else throw new Error(res.status);
      })
      .catch((err) => {
        throw new Error(err);
      });

  export const getSessionId$= (
    url
  ) =>
    fetch(
      `${url}`,
      {
        method: "POST", // or 'PUT'
        headers: {
          "access-key": "6a3e7720-c41e-45af-bc05-e8e3937db527",
          "sel-domain": "app.carscan.ai",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: "company1@carscan.co.za", 
          password: "Password@123"
      }),
      }
    )
      .then((res) => {
        if (res.status === 200 || res.status === 204 || res.status === 201)
          return res;
        else throw new Error(res.status);
      })
      .catch((err) => {
        throw new Error(err);
      });