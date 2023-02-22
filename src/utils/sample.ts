
// export const sample = [
//     {
//       "title": {
//         "name": "WebApp",
//         "route": "web_app"
//       },
//       "is_parent_cat": true,
//       "sub_chapters": [
//         {
//           "title": { "name": "Color Theme & logo", "route": "color_theme_logo", "label": "Color Theme" },
//           "data": [
//             {
//               "label": "Multi check box",
//               "answer": [],
//               "inputType": "MULTI_CHECK_BOX",
//               "keyName": "multitest",
//               "options": {
//                 "values": [
//                   {
//                     "name": "India/INR",
//                     "message":"",
//                     "id": "1",
//                   },
//                   {
//                     "name": "USA",
//                     "message": "",
//                     "id": "2",
//                   },
//                   {
//                     "name": "SA",
//                     "message": "",
//                     "id": "3",
//                   },
//                 ],
//               },
//             },
//             {
//               "label": "Select Color",
//               "answer": [],
//               "inputType": "COLOR",
//               "keyName": "colortests",
//               "options": {
//                 "values": [
//                   {
//                     "name": "#FF0000",
//                     "message": "",
//                     "id": "1",
//                   },
//                   {
//                     "name": "#00FF00",
//                     "message": "",
//                     "id": "2",
//                   },
//                   {
//                     "name": "#0000FF",
//                     "message": "",
//                     "id": "3",
//                   },
//                   {
//                     "name": "#04f6f7",
//                     "message": "",
//                     "id": "4",
//                   },
//                   {
//                     "name": "#A020F0",
//                     "message": "",
//                     "id": "5",
//                   },
//                   {
//                     "name": "#FFFF00",
//                     "message": "",
//                     "id": "6",
//                   },
//                 ],
//               },
//             },
//             {
//               "label": "Change Logo",
//               "answer": [], 
//               "inputType": "LOGO",
//               "keyName": "colotest",
//               "options": {
//                 "values": [
//                   {
//                     "name": "Logo should be not more than",
//                     "message": "111 x 50px",
//                     "id": "1",
//                   },
//                   {
//                     "name": "Thumbnail should be not more than",
//                     "message": "52 x 23px",
//                     "id": "2",
//                   }
//                 ],
//               },
//             },
//           ],
//         },
//         {
//           "title": {
//             "name": "Details Selection",
//             "route": "details_selection",
//             "label": "Details Selection"
//           },
//           "data": [
//             {
//               "name": "Company Name",
//               "label": "Company Name",
//               "inputType": "TEXT_BOX",
//               "answer": [
//                 "Carscan"
//               ],
//               "placeholder": "Company Name",
//               "validators": {
//                 "required": true
//               },
//               "keyName": "companyName",
//               "tableTypes": [
//                 {
//                   "keyName": "companyName",
//                   "tableType": "COMPANY_SETTINGS"
//                 },
//                 {
//                   "keyName": "name",
//                   "tableType": "COMPANY"
//                 }
//               ],
//               "subChapterId": 1,
//               "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
//               "links": [
//                 {
//                   "rel": "update-company.companyName",
//                   "href": "http://localhost:8086/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
//                 },
//                 {
//                   "rel": "update-company.name",
//                   "href": "http://localhost:8086/coreservice/companies/update-company"
//                 }
//               ]
//             },
//             {
//               "name": "Country Code",
//               "label": "Country Code",
//               "inputType": "TEXT_BOX",
//               "answer": [
//                 "South Africa"
//               ],
//               "placeholder": "Country Code",
//               "validators": {
//                 "required": true
//               },
//               "keyName": "countryCode",
//               "tableTypes": [
//                 {
//                   "keyName": "countryCode",
//                   "tableType": "COMPANY_SETTINGS"
//                 }
//               ],
//               "subChapterId": 1,
//               "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
//               "links": [
//                 {
//                   "rel": "update-company.countryCode",
//                   "href": "http://localhost:8086/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
//                 }
//               ]
//             },
//             {
//               "name": "Timezone",
//               "label": "Time Zone",
//               "inputType": "TEXT_BOX",
//               "answer": [
//                 "Africa/johannesburg"
//               ],
//               "placeholder": "Time Zone",
//               "validators": {
//                 "required": false
//               },
//               "keyName": "timeZone",
//               "tableTypes": [
//                 {
//                   "keyName": "timeZone",
//                   "tableType": "COMPANY_SETTINGS"
//                 }
//               ],
//               "subChapterId": 1,
//               "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
//               "links": [
//                 {
//                   "rel": "update-company.timeZone",
//                   "href": "http://localhost:8086/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
//                 }
//               ]
//             },
//             {
//               "name": "Whatsapp Number",
//               "label": "Whatsapp Number",
//               "inputType": "TEXT_BOX",
//               "answer": [
//                 "111111111"
//               ],
//               "placeholder": "Whatsapp Number",
//               "validators": {
//                 "required": false,
//                 "minLength": 8,
//                 "maxLength": 15,
//                 "pattern": "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?){2}\\d{3}$|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?)(\\d{2}[ ]?){2}\\d{2}$"
//               },
//               "keyName": "whatsappNumber",
//               "tableTypes": [
//                 {
//                   "keyName": "whatsappNumber",
//                   "tableType": "COMPANY_SETTINGS"
//                 }
//               ],
//               "subChapterId": 1,
//               "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
//               "links": [
//                 {
//                   "rel": "update-company.whatsappNumber",
//                   "href": "http://localhost:8086/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
//                 }
//               ]
//             },
//             {
//               "name": "Company Name",
//               "label": "Company Name",
//               "inputType": "TEXT_BOX",
//               "answer": [
//                 "Carscan"
//               ],
//               "placeholder": "Company Name",
//               "validators": {
//                 "required": true
//               },
//               "keyName": "companyName",
//               "tableTypes": [
//                 {
//                   "keyName": "companyName",
//                   "tableType": "COMPANY_SETTINGS"
//                 },
//                 {
//                   "keyName": "name",
//                   "tableType": "COMPANY"
//                 }
//               ],
//               "subChapterId": 1,
//               "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
//               "links": [
//                 {
//                   "rel": "update-company.companyName",
//                   "href": "http://localhost:8086/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
//                 },
//                 {
//                   "rel": "update-company.name",
//                   "href": "http://localhost:8086/coreservice/companies/update-company"
//                 }
//               ]
//             },
//             {
//               "name": "Country Code",
//               "label": "Country Code",
//               "inputType": "TEXT_BOX",
//               "answer": [
//                 "South Africa"
//               ],
//               "placeholder": "Country Code",
//               "validators": {
//                 "required": true
//               },
//               "keyName": "countryCode",
//               "tableTypes": [
//                 {
//                   "keyName": "countryCode",
//                   "tableType": "COMPANY_SETTINGS"
//                 }
//               ],
//               "subChapterId": 1,
//               "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
//               "links": [
//                 {
//                   "rel": "update-company.countryCode",
//                   "href": "http://localhost:8086/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
//                 }
//               ]
//             },
//             {
//               "name": "Timezone",
//               "label": "Time Zone",
//               "inputType": "TEXT_BOX",
//               "answer": [
//                 "Africa/johannesburg"
//               ],
//               "placeholder": "Time Zone",
//               "validators": {
//                 "required": false
//               },
//               "keyName": "timeZone",
//               "tableTypes": [
//                 {
//                   "keyName": "timeZone",
//                   "tableType": "COMPANY_SETTINGS"
//                 }
//               ],
//               "subChapterId": 1,
//               "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
//               "links": [
//                 {
//                   "rel": "update-company.timeZone",
//                   "href": "http://localhost:8086/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
//                 }
//               ]
//             },
//             {
//               "name": "Whatsapp Number",
//               "label": "Whatsapp Number",
//               "inputType": "TEXT_BOX",
//               "answer": [
//                 "111111111"
//               ],
//               "placeholder": "Whatsapp Number",
//               "validators": {
//                 "required": false,
//                 "minLength": 8,
//                 "maxLength": 15,
//                 "pattern": "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?){2}\\d{3}$|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?)(\\d{2}[ ]?){2}\\d{2}$"
//               },
//               "keyName": "whatsappNumber",
//               "tableTypes": [
//                 {
//                   "keyName": "whatsappNumber",
//                   "tableType": "COMPANY_SETTINGS"
//                 }
//               ],
//               "subChapterId": 1,
//               "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
//               "links": [
//                 {
//                   "rel": "update-company.whatsappNumber",
//                   "href": "http://localhost:8086/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           "title": { "name":  "Assessment & Vehicle", "route": "assessment_details","label": "Assessments" },
//           "data": [
//             {
//               "label": "Single select",
//               "answer": [],
//               "inputType": "DROPDOWN_SINGLE_SELECT",
//               "keyName": "singleSelet",
//               "options": {
//                 "values": [
//                   {
//                     "name": "India/INR",
//                     "message": "",
//                     "id": "1",
//                   },
//                   {
//                     "name": "USA",
//                     "message": "",
//                     "id": "2",
//                   },
//                   {
//                     "name": "SA",
//                     "message": "",
//                     "id": "3",
//                   },
//                 ]
//               },
//             },
//             {
//               "label": "Single Check box",
//               "answer": [],
//               "inputType": "SINGLE_CHECK_BOX",
//               "keyName": "singlecheck",
//               "options": {
//                 "values": [
//                   {
//                     "name": "India/INR",
//                     "message": "",
//                     "id": "1",
//                   },
//                   {
//                     "name": "USA",
//                     "message": "",
//                     "id": "2",
//                   },
//                   {
//                     "name": "SA",
//                     "message": "",
//                     "id": "3",
//                   },
//                 ],
//               },
//             },
//             {
//               "label": "Multi Check Vertical",
//               "answer": [], 
//               "inputType": "MULTI_CHECK_BOX_VERTICAL",
//               "keyName": "multcheck",
//               "options": {
//                 "values": [
//                   {
//                     "name": "Dynamic Link",
//                     "message": "For a specific OTP and journey starts from the start",
//                     "id": "1",
//                   },
//                   {
//                     "name": "Deep link",
//                     "message": "Redirects to a certain page in the journey",
//                     "id": "2",
//                   }
//                 ],
//               },
//             },
//           ],
//         },
//       ]
//     },
//     {
//       "title": { "name": "Dashboard", "route":"Dashboard" },
//       "is_parent_cat": true,
//       "sub_chapters": [
//         {
//           "title": { "name":  "Dashboard test", "route": "Dashboard_test", "label": "Dashboard test" },
//           "data": [
//             {
//               "label": "Single Check Vertical",
//               "answer": [], 
//               "inputType": "SINGLE_CHECK_BOX_VERTICAL",
//               "keyName": "SingleVertical",
//               "options": {
//                 "values": [
//                   {
//                     "name": "Dynamic Link",
//                     "message": "For a specific OTP and journey starts from the start",
//                     "id": "1",
//                   },
//                   {
//                     "name": "Deep link",
//                     "message": "Redirects to a certain page in the journey",
//                     "id": "2",
//                   }
//                 ],
//               },
//             },
//             {
//               "label": "Country/Region",
//               "answer": [], //Text Answer
//               "inputType": "TEXT_BOX",
//               "limit": 100, // number of characters allowed.
//               "keyName": "countryRegion",
//               "options": {
//                 "values": [],
//               }
//             },
//             {
//               "label": "Select Color",
//               "answer": [], 
//               "inputType": "COLOR",
//               "keyName": "selectColor",
//               "options": {
//                 "values": [
//                   {
//                     "name": "#FF0000",
//                     "message": "",
//                     "id": "1",
//                   },
//                   {
//                     "name": "#00FF00",
//                     "message": "",
//                     "id": "2",
//                   },
//                   {
//                     "name": "#0000FF",
//                     "message": "",
//                     "id": "3",
//                   },
//                   {
//                     "name": "#04f6f7",
//                     "message": "",
//                     "id": "4",
//                   },
//                   {
//                     "name": "#A020F0",
//                     "message": "",
//                     "id": "5",
//                   },
//                   {
//                     "name": "#FFFF00",
//                     "message": "",
//                     "id": "6",
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       ]
//      }
//   ]



export const sample = [
  {
      "title": {
          "name": "WebApp",
          "route": "web_app"
      },
      "is_parent_cat": true,
      "sub_chapters": [
        {
          "title": { "name":  "Dashboard test", "route": "Dashboard_test", "label": "Dashboard test" },
          "data": [
              {
                  "name": "Single Check vertical",
                  "label": "Single Check vertical",
                  "inputType": "SINGLE_CHECK_BOX_VERTICAL",
                  "answer": [],
                  "options": {
                    "values": [
                      {
                        "name": "Dynamic Link",
                        "message": "For a specific OTP and journey starts from the start",
                        "id": "1",
                      },
                      {
                        "name": "Deep link",
                        "message": "Redirects to a certain page in the journey",
                        "id": "2",
                      }
                    ],
                  },
                  "placeholder": "Single Check vertical",
                  "validators": {
                      "required": true
                  },
                  "keyName": "SingleCheckvertical",
                  "tableTypes": [
                      {
                          "keyName": "company_name",
                          "tableType": "COMPANY_SETTINGS",
                          "tableKeyName": "companyName"
                      },
                      {
                          "keyName": "name",
                          "tableType": "COMPANY",
                          "tableKeyName": "companyName"
                      }
                  ],
                  "subChapterId": 1,
                  "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                  "links": [
                      {
                          "rel": "update.COMPANY_SETTINGS",
                          "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                      },
                      {
                          "rel": "update.COMPANY",
                          "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632update-company"
                      }
                  ]
              },
              {
                  "name": "Single Check Box",
                  "label": "Single Check Box",
                  "inputType": "SINGLE_CHECK_BOX",
                  "answer": [],
                  "placeholder": "Single Check Box",
                  "options": {
                    "values": [
                      {
                        "name": "India/INR",
                        "message": "",
                        "id": "1",
                      },
                      {
                        "name": "USA",
                        "message": "",
                        "id": "2",
                      },
                      {
                        "name": "SA",
                        "message": "",
                        "id": "3",
                      },
                    ],
                  },
                  "validators": {
                      "required": true
                  },
                  "keyName": "SingleCheckBox",
                  "tableTypes": [
                      {
                          "keyName": "countryCode",
                          "tableType": "COMPANY_SETTINGS"
                      }
                  ],
                  "subChapterId": 1,
                  "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                  "links": [
                      {
                          "rel": "update.COMPANY_SETTINGS",
                          "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                      }
                  ]
              },
              {
                  "name": "Multi Check box Vertical",
                  "label": "Time Zone",
                  "inputType": "MULTI_CHECK_BOX_VERTICAL",
                  "answer": [],
                  "placeholder": "Time Zone",
                  "validators": {
                      "required": false
                  },
                  "options": {
                    "values": [
                      {
                        "name": "Dynamic Link",
                        "message": "For a specific OTP and journey starts from the start",
                        "id": "1",
                      },
                      {
                        "name": "Deep link",
                        "message": "Redirects to a certain page in the journey",
                        "id": "2",
                      }
                    ],
                  },
                  "keyName": "MultiCheckboxVertical",
                  "tableTypes": [
                      {
                          "keyName": "timeZone",
                          "tableType": "COMPANY_SETTINGS"
                      }
                  ],
                  "subChapterId": 1,
                  "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                  "links": [
                      {
                          "rel": "update.COMPANY_SETTINGS",
                          "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                      }
                  ]
              },
              {
                  "name": "Whatsapp Number",
                  "label": "Whatsapp Number",
                  "inputType": "TEXT_BOX",
                  "answer": [],
                  "placeholder": "Whatsapp Number",
                  "validators": {
                      "required": false,
                      "minLength": 8,
                      "maxLength": 15,
                      "pattern": "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?){2}\\d{3}$|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?)(\\d{2}[ ]?){2}\\d{2}$"
                  },
                  "keyName": "whatsappNumber",
                  "tableTypes": [
                      {
                          "keyName": "whatsappNumber",
                          "tableType": "COMPANY_SETTINGS"
                      }
                  ],
                  "subChapterId": 1,
                  "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                  "links": [
                      {
                          "rel": "update.COMPANY_SETTINGS",
                          "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                      }
                  ]
              }
          ]
      },
          {
              "title": {
                  "name": "Details Selection",
                  "route": "details_selection",
                  "label": "Details Selection"
              },
              "data": [
                  {
                      "name": "Company Name",
                      "label": "Company Name",
                      "inputType": "TEXT_BOX",
                      "answer": [
                          "carscanv"
                      ],
                      "placeholder": "Company Name",
                      "validators": {
                          "required": true
                      },
                      "keyName": "companyName",
                      "tableTypes": [
                          {
                              "keyName": "company_name",
                              "tableType": "COMPANY_SETTINGS",
                              "tableKeyName": "companyName"
                          },
                          {
                              "keyName": "name",
                              "tableType": "COMPANY",
                              "tableKeyName": "companyName"
                          }
                      ],
                      "subChapterId": 2,
                      "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                      "links": [
                          {
                              "rel": "update.COMPANY_SETTINGS",
                              "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                          },
                          {
                              "rel": "update.COMPANY",
                              "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632update-company"
                          }
                      ]
                  },
                  {
                      "name": "Country Code",
                      "label": "Country Code",
                      "inputType": "TEXT_BOX",
                      "answer": [],
                      "placeholder": "Country Code",
                      "validators": {
                          "required": true
                      },
                      "keyName": "countryCode",
                      "tableTypes": [
                          {
                              "keyName": "countryCode",
                              "tableType": "COMPANY_SETTINGS"
                          }
                      ],
                      "subChapterId": 2,
                      "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                      "links": [
                          {
                              "rel": "update.COMPANY_SETTINGS",
                              "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                          }
                      ]
                  },
                  {
                      "name": "Timezone",
                      "label": "Time Zone",
                      "inputType": "TEXT_BOX",
                      "answer": [],
                      "placeholder": "Time Zone",
                      "validators": {
                          "required": false
                      },
                      "keyName": "timeZone",
                      "tableTypes": [
                          {
                              "keyName": "timeZone",
                              "tableType": "COMPANY_SETTINGS"
                          }
                      ],
                      "subChapterId": 2,
                      "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                      "links": [
                          {
                              "rel": "update.COMPANY_SETTINGS",
                              "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                          }
                      ]
                  },
                  {
                      "name": "Whatsapp Number",
                      "label": "Whatsapp Number",
                      "inputType": "TEXT_BOX",
                      "answer": [],
                      "placeholder": "Whatsapp Number",
                      "validators": {
                          "required": false,
                          "minLength": 8,
                          "maxLength": 15,
                          "pattern": "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?){2}\\d{3}$|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?)(\\d{2}[ ]?){2}\\d{2}$"
                      },
                      "keyName": "whatsappNumber",
                      "tableTypes": [
                          {
                              "keyName": "whatsappNumber",
                              "tableType": "COMPANY_SETTINGS"
                          }
                      ],
                      "subChapterId": 2,
                      "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                      "links": [
                          {
                              "rel": "update.COMPANY_SETTINGS",
                              "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                          }
                      ]
                  }
              ]
          },
          {
            "title": { "name": "Color Theme & logo", "route": "color_theme_logo", "label": "Color Theme" },
            "data": [
                {
                    "name": "Multi check box",
                    "label": "Multi check box",
                    "inputType": "MULTI_CHECK_BOX",
                    "answer": [],
                    "placeholder": "Company Name",
                    "validators": {
                        "required": true
                    },
                    "options": {
                      "values": [
                        {
                          "name": "India/INR",
                          "message":"",
                          "id": "1",
                        },
                        {
                          "name": "USA",
                          "message": "",
                          "id": "2",
                        },
                        {
                          "name": "SA",
                          "message": "",
                          "id": "3",
                        },
                      ],
                    },
                    "keyName": "Multicheckbox",
                    "tableTypes": [
                        {
                            "keyName": "company_name",
                            "tableType": "COMPANY_SETTINGS",
                            "tableKeyName": "companyName"
                        },
                        {
                            "keyName": "name",
                            "tableType": "COMPANY",
                            "tableKeyName": "companyName"
                        }
                    ],
                    "subChapterId": 3,
                    "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                    "links": [
                        {
                            "rel": "update.COMPANY_SETTINGS",
                            "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                        },
                        {
                            "rel": "update.COMPANY",
                            "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632update-company"
                        }
                    ]
                },
                {
                    "name": "Selct  Color",
                    "label": "Color Code",
                    "inputType": "COLOR",
                    "answer": [],
                    "placeholder": "Country Code",
                    "validators": {
                        "required": true
                    },
                    "options": {
                      "values": [
                        {
                          "name": "#FF0000",
                          "message": "",
                          "id": "1",
                        },
                        {
                          "name": "#00FF00",
                          "message": "",
                          "id": "2",
                        },
                        {
                          "name": "#0000FF",
                          "message": "",
                          "id": "3",
                        },
                        {
                          "name": "#04f6f7",
                          "message": "",
                          "id": "4",
                        },
                        {
                          "name": "#A020F0",
                          "message": "",
                          "id": "5",
                        },
                        {
                          "name": "#FFFF00",
                          "message": "",
                          "id": "6",
                        },
                      ],
                    },
                    "keyName": "ColorCode",
                    "tableTypes": [
                        {
                            "keyName": "countryCode",
                            "tableType": "COMPANY_SETTINGS"
                        }
                    ],
                    "subChapterId": 3,
                    "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                    "links": [
                        {
                            "rel": "update.COMPANY_SETTINGS",
                            "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                        }
                    ]
                },
                {
                    "name": "Upload Type",
                    "label": "Upload Type",
                    "inputType": "LOGO",
                    "answer": [],
                    "options": {
                      "values": [
                        {
                          "name": "Logo should be not more than",
                          "message": "111 x 50px",
                          "id": "1",
                        },
                        {
                          "name": "Thumbnail should be not more than",
                          "message": "52 x 23px",
                          "id": "2",
                        }
                      ],
                    },
                    "placeholder": "Upload Type",
                    "validators": {
                        "required": false
                    },
                    "keyName": "UploadType",
                    "tableTypes": [
                        {
                            "keyName": "timeZone",
                            "tableType": "COMPANY_SETTINGS"
                        }
                    ],
                    "subChapterId": 3,
                    "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                    "links": [
                        {
                            "rel": "update.COMPANY_SETTINGS",
                            "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                        }
                    ]
                },
                {
                    "name": "Dropdown Single Select",
                    "label": "Dropdown Single Select",
                    "inputType": "DROPDOWN_SINGLE_SELECT",
                    "answer": [],
                    "placeholder": "Dropdown Single Select",
                    "options": {
                      "values": [
                        {
                          "name": "India/INR",
                          "message": "",
                          "id": "1",
                        },
                        {
                          "name": "USA",
                          "message": "",
                          "id": "2",
                        },
                        {
                          "name": "SA",
                          "message": "",
                          "id": "3",
                        },
                      ]
                    },
                    "validators": {
                        "required": false,
                        "minLength": 8,
                        "maxLength": 15,
                        "pattern": "^(\\+\\d{1,3}( )?)?((\\(\\d{3}\\))|\\d{3})[- .]?\\d{3}[- .]?\\d{4}$|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?){2}\\d{3}$|^(\\+\\d{1,3}( )?)?(\\d{3}[ ]?)(\\d{2}[ ]?){2}\\d{2}$"
                    },
                    "keyName": "DropdownSingleSelect",
                    "tableTypes": [
                        {
                            "keyName": "whatsappNumber",
                            "tableType": "COMPANY_SETTINGS"
                        }
                    ],
                    "subChapterId": 3,
                    "companyId": "5661f7d1-2506-4a7b-82eb-dc7619a6f632",
                    "links": [
                        {
                            "rel": "update.COMPANY_SETTINGS",
                            "href": "http://e614-2405-201-8006-90-997e-a66b-94cb-fe86.in.ngrok.io/coreservice/companies/5661f7d1-2506-4a7b-82eb-dc7619a6f632/settings"
                        }
                    ]
                }
            ]
        }
      ]
  }
]