/* eslint-disable import/no-unresolved */
import { VEYRON_BASE_URL } from './constants';
import AuthService from './AuthService';
const axios = require('./axios').default;
const auth = new AuthService();

/** @return {Array}
 * {string} code
 * {string} description
 * {integer} id
 * {string} name
 */
export function getCountriesData() {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}countries/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function getUnitConverterAPI() {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}unit_price/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}


export function getDataTransaction(campaignId, campaignFundId) {
  // https://veyron-staging.liku.id/campaigns/1/funds/34/
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}campaigns/${campaignId}/funds/${campaignFundId}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function getProvinceData(country) {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}countries/${country}/provinces/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}
export function getCitiesData(countryCode, provinceCode) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(
      `${VEYRON_BASE_URL}countries/${countryCode}/provinces/${provinceCode}/cities/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    resolve(res);
  });
}
export function getIndustriesData() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}fundraiser/industry/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function getBankNameAPI() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}banks/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function getAnnualIncomeAPI() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}annual_incomes/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

/**@return {Array}
 * {integer} id
 * {string} name
 * {string} description
 */
export function getInvestmentRangeAPI() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}investment_range/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function setWaitingListAPI(investmentRangeID, campaignID) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.post(
      `${VEYRON_BASE_URL}campaigns/waitlist/`,
      {
        investmentRangeID,
        campaignID,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    resolve(res);
  });
}

export function getWaitingListAPI(campaignId) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(
      `${VEYRON_BASE_URL}campaign/waitlist/${campaignId}/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    resolve(res);
  });
}
export function getNationalitiesData() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}nationalities/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

/**@return {Array}
 * {integer} id
 * {string} name
 * {string} code
 * {string} descriptionS
*/
export function getMaritalStatusData() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}marital_statuses/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

/**@return {Array}
 * {integer} id
 * {string} name
 * {string} description
*/
export function getEducationsData() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}educations/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

/**@return {Array}
 * {intger} id
 * {string} name
 * {string} code
 * {string} description
*/
export function getOccupationData() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}occupations/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function getStageData() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}fundraiser/stage/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

/**@return {Array}
 * {integer} id
 * {string} name
 * {string} code
 * {string} description
*/
export function getGenderData() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}genders/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function getIncomeSourcesData() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}income_sources/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function getFundTypeData() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}campaign/fund_type/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function getCampaignData() {
  return new Promise(resolve => {
    const res = axios.get(`${VEYRON_BASE_URL}campaigns/`);
    resolve(res);
  });
}

export function getCheckLinkValid(token) {
  return new Promise(resolve => {
    const res = axios.post(
      `${VEYRON_BASE_URL}user/check_forgot_password_has_reset/`,
      {
        token,
      },
    );
    resolve(res);
  });
}

/**
   * @return {Object}
   * {string} HomePhoneNumber,
   * {integer} ID,
   * {string} KTPAddress,
   * {integer} KTPCityID,
   * {integer} KTPCountryID,
   * {string} KTPImageURL,
   * {string} KTPNumber,
   * {string} KTPPostal,
   * {integer} KTPProvinceID,
   * {string} NPWPNumber,
   * {integer} annualIncomeID,
   * {string} bankAccountNumber,
   * {string} bankName,
   * {integer} bankNameID,
   * {string} companyAddress,
   * {string} companyName,
   * {string} createdAt,
   * {string} dateOfBirth,
   * {string} domicileAddress,
   * {integer} domicileCityID,
   * {integer} domicileCountryID,
   * {string} domicilePostal,
   * {integer} domicileProvinceID,
   * {integer} educationID,
   * {integer} genderID,
   * {Array} investmentObjectives,
   * {boolean} isAddressSame,
   * {integer} maritalStatusID,
   * {integer} nationalityID,
   * {integer} occupationID,
   * {string} officePhoneNumber,
   * {string} placeOfBirth,
   * {string} profileImageURL,
   * {string} selfieKTPImageURL,
   * {string} signature,
   * {Array} sourceOfFunds,
   * {string} statusID,
   * {string} updatedAt,
   * {integer} userAccountID,
   */
export function getInvestorProfileRequest() {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}investors/me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  }).catch(err => err);
}

export function getFundraisingProfileRequest() {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}fundraisers/me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  }).catch(err => err);
}

export function getCampaignProfileRequest() {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}campaigns/me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function getCompanyProfileRequest() {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}fundraisers/me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function getCompanyProfileByIDRequest(companyId) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}fundraisers/${companyId}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

/**
   * @return {Object}
   * {integer} balance,
   * {string} email,
   * {string} firstName,
   * {integer} id,
   * {boolean} isPhoneNumberVerified,
   * {string} lastName,
   * {string} phoneNumber,
   * {string} profilePicture
   * {string} referralCode
   * {string} username
   */
export function getGeneralUserRequest() {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  }).catch(err => err);
}

/**
   * @return {Object}
   * {string} HomePhoneNumber,
   * {integer} ID,
   * {string} KTPAddress,
   * {integer} KTPCityID,
   * {integer} KTPCountryID,
   * {string} KTPImageURL,
   * {string} KTPNumber,
   * {string} KTPPostal,
   * {integer} KTPProvinceID,
   * {string} NPWPNumber,
   * {integer} annualIncomeID,
   * {string} bankAccountNumber,
   * {string} bankName,
   * {integer} bankNameID,
   * {string} companyAddress,
   * {string} companyName,
   * {string} createdAt,
   * {string} dateOfBirth,
   * {string} domicileAddress,
   * {integer} domicileCityID,
   * {integer} domicileCountryID,
   * {string} domicilePostal,
   * {integer} domicileProvinceID,
   * {integer} educationID,
   * {integer} genderID,
   * {Array} investmentObjectives,
   * {boolean} isAddressSame,
   * {integer} maritalStatusID,
   * {integer} nationalityID,
   * {integer} occupationID,
   * {string} officePhoneNumber,
   * {string} placeOfBirth,
   * {string} profileImageURL,
   * {string} selfieKTPImageURL,
   * {string} signature,
   * {Array} sourceOfFunds,
   * {string} statusID,
   * {string} updatedAt,
   * {integer} userAccountID,
   */
export function getUserProfileRequest() {
  return new Promise(resolve => {
    const token = auth.getToken();

    const res = axios.get(`${VEYRON_BASE_URL}investors/me/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  }).catch(err => err);
}

export function getCampaignDataById(campaignId) {
  return new Promise(resolve => {
    // const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}campaigns/${campaignId}/`);
    // const res = axios.get(`${VEYRON_BASE_URL}campaigns/${campaignId}/`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    resolve(res);
  });
}

export function getCampaignDataByName(campaignName) {
  return new Promise(resolve => {
    const res = axios.get(`${VEYRON_BASE_URL}campaigns/name/?name=${campaignName}`);
    resolve(res);
  })
}

export function getPortofolioData() {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}investors/portofolios/`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }});
    // const res = axios.get(`${VEYRON_BASE_URL}campaigns/${campaignId}/`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    resolve(res);
  });
}


export function getTransactionData() {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}investors/transactions/`,{
        headers: {
          Authorization: `Bearer ${token}`,
        }});
    // const res = axios.get(`${VEYRON_BASE_URL}campaigns/${campaignId}/`, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    resolve(res);
  });
}

export function getTransactionDetails(transactionId) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}investors/portofolios/${transactionId}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    resolve(res)
  })
}

export function getOTP() {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}user/request_otp_code`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function requestForgotPassword(email) {
  return new Promise(resolve => {
    const res = axios.post(`${VEYRON_BASE_URL}user/request_forgot_password`, {
      email,
    });
    resolve(res);
  });
}

export function changeNewPassword(email, token, newPassword, confirmPassword) {
  return new Promise(resolve => {
    const res = axios.post(`${VEYRON_BASE_URL}user/confirm_forgot_password/`, {
      email,
      password: newPassword,
      confirmPassword,
      token,
    });
    resolve(res);
  });
}

export function registerGeneralUser(
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
) {
  return new Promise(resolve => {
    const res = axios.post(`${VEYRON_BASE_URL}register`, {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
    });
    if (res.status === 200) {
      resolve(res);
    } else {
      resolve(res);
    }
  })
    .then(res => res)
    .catch(error => error.response);
}

export function setInvestorGeneralData(
  profilePicture,
  genderID,
  maritalStatusID,
  dateofBirth,
  placeofBirth,
  educationID,
  investmentObjectives,
) {
  const profileImageURL = profilePicture;
  const token = auth.getToken();
  return new Promise(resolve => {
    const res = axios.post(
      `${VEYRON_BASE_URL}investors/`,
      {
        profileImageURL,
        genderID,
        maritalStatusID,
        dateofBirth,
        placeofBirth,
        educationID,
        investmentObjectives,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (res.status === 200) {
      resolve(res);
    } else {
      resolve(res);
    }
  })
    .then(res => res)
    .catch(error => error.response);
}

export function setInvestorAdministrationData(
  profileImageURL,
  genderID,
  maritalStatusID,
  dateofBirth,
  placeofBirth,
  educationID,
  investmentObjectives,
  idCardImg,
  selfieImg,
  nationalityID,
  KTPNo,
  KTPAddress,
  domicileAddress,
  isAddressSame,
) {
  const token = auth.getToken();
  return new Promise(resolve => {
    const res = axios.post(
      `${VEYRON_BASE_URL}investors/`,
      {
        profileImageURL,
        genderID,
        maritalStatusID,
        dateofBirth,
        placeofBirth,
        educationID,
        investmentObjectives,
        nationalityID,
        KTPImageURL: idCardImg,
        selfieKTPImageURL: selfieImg,
        KTPNumber: KTPNo,
        KTPAddress,
        domicileAddress,
        isAddressSame,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (res.status === 200) {
      resolve(res);
    } else {
      resolve(res);
    }
  })
    .then(res => res)
    .catch(error => error.response);
}

export function setInvestorOccupationData(
  profileImageURL,
  genderID,
  maritalStatusID,
  dateOfBirth,
  placeOfBirth,
  educationID,
  investmentObjectives,
  nationalityID,
  KTPImageURL,
  selfieKTPImageURL,
  KTPNumber,
  NPWPNumber,
  KTPAddress,
  KTPCityID,
  KTPProvinceID,
  KTPCountryID,
  KTPpostalCode,
  domicileAddress,
  domicileCityID,
  domicileProvinceID,
  domicileCountryID,
  domicilePostalCode,
  homePhoneNumber,
  occupationID,
  companyName,
  companyAddress,
  companyPhoneNumber,
) {
  const token = auth.getToken();
  return new Promise(resolve => {
    const res = axios.post(
      `${VEYRON_BASE_URL}investors/`,
      {
        profileImageURL,
        genderID,
        maritalStatusID,
        dateOfBirth,
        placeOfBirth,
        educationID,
        investmentObjectives,
        nationalityID,
        KTPImageURL,
        selfieKTPImageURL,
        KTPNumber,
        NPWPNumber,
        KTPAddress,
        KTPCityID,
        KTPProvinceID,
        KTPCountryID,
        KTPPostal: KTPpostalCode,
        domicileAddress,
        domicileCityID,
        domicileProvinceID,
        domicileCountryID,
        domicilePostal: domicilePostalCode,
        HomePhoneNumber: homePhoneNumber,
        occupationID,
        companyName,
        companyAddress,
        officePhoneNumber: companyPhoneNumber,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (res.status === 200) {
      resolve(res);
    } else {
      resolve(res);
    }
  })
    .then(res => res)
    .catch(error => error.response);
}

export function setInvestorSignatureData(
  profileImageURL,
  genderID,
  maritalStatusID,
  dateOfBirth,
  placeOfBirth,
  educationID,
  investmentObjectives,
  nationalityID,
  KTPImageURL,
  selfieKTPImageURL,
  KTPNumber,
  KTPAddress,
  domicileAddress,
  occupationID,
  annualIncomeID,
  selectedSourceOfFunds,
  bankNameID,
  bankAccountNumber,
  bankAccountName,
  signature,
) {
  const token = auth.getToken();
  return new Promise(resolve => {
    const res = axios.post(
      `${VEYRON_BASE_URL}investors/`,
      {
        profileImageURL,
        genderID,
        maritalStatusID,
        dateOfBirth,
        placeOfBirth,
        educationID,
        investmentObjectives,
        nationalityID,
        KTPImageURL,
        selfieKTPImageURL,
        KTPNumber,
        KTPAddress,
        domicileAddress,
        occupationID,
        annualIncomeID,
        sourceOfFunds: selectedSourceOfFunds,
        bankNameID,
        bankAccountNumber,
        bankAccountName,
        signature,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (res.status === 200) {
      resolve(res);
    } else {
      resolve(res);
    }
  })
    .then(res => res)
    .catch(error => error.response);
}
export function setInvestorFinancialData(
  profileImageURL,
  genderID,
  maritalStatusID,
  dateOfBirth,
  placeOfBirth,
  educationID,
  investmentObjectives,
  KTPImageURL,
  selfieKTPImageURL,
  nationalityID,
  KTPNumber,
  KTPAddress,
  domicileAddress,
  occupationID,
  annualIncomeID,
  selectedSourceOfFunds,
  bankNameID,
  bankAccountNumber,
  bankAccountHolder,
) {
  const token = auth.getToken();
  return new Promise(resolve => {
    const res = axios.post(
      `${VEYRON_BASE_URL}investors/`,
      {
        profileImageURL,
        genderID,
        maritalStatusID,
        dateOfBirth,
        placeOfBirth,
        educationID,
        investmentObjectives,
        KTPImageURL,
        selfieKTPImageURL,
        nationalityID,
        KTPNumber,
        KTPAddress,
        domicileAddress,
        occupationID,
        annualIncomeID,
        selectedSourceOfFunds,
        bankNameID,
        bankAccountNumber,
        bankAccountHolder,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (res.status === 200) {
      resolve(res);
    } else {
      resolve(res);
    }
  })
    .then(res => res)
    .catch(error => error.response);
}
export function cancelPayment(data) {
  const token = auth.getToken();
  return new Promise(resolve => {
    const res = axios.post(
      `${VEYRON_BASE_URL}cancel_payment/`,
      {
        account_number: data.accountNumber,
        activity_transaction_id: data.activityTransactionID,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    resolve(res);
  });
}


export function verifiedInvestorSubmit() {
  const token = auth.getToken();
  return new Promise(resolve => {
    const res = axios({
      method: "POST",
      url: `${VEYRON_BASE_URL}investors/submit/`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    resolve(res);
  });
}

export function setPaymentRequest(campaignId, isPublic, unit, type) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.post(
      `${VEYRON_BASE_URL}campaigns/${campaignId}/funds/`,
      {
        isVisbleToFundRaiser: true,
        amount: parseFloat(unit),
        paymentType: type,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    resolve(res);
  });
}

// instamoney payment
export function sendToInstamoneyRequest(campaignId, campaignFundId, bankCode) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.post(
      `${VEYRON_BASE_URL}campaigns/${campaignId}/funds/${campaignFundId}/payments/instamoney/va/`,
      {
        bankCode,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    resolve(res);
  });
}

export function updateMobilePhoneNumber(phoneNumber) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.post(
      `${VEYRON_BASE_URL}user/update/phone_number/`,
      {
        phone_number: phoneNumber,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    resolve(res);
  });
}

export function userRegister(
  firstName,
  lastName,
  username,
  email,
  password,
  phoneNumber,
) {
  return new Promise(() => {
    const res = axios.post(`${VEYRON_BASE_URL}register`, {
      firstName,
      lastName,
      username,
      email,
      password,
      phoneNumber,
    });
    if (res.error) {
      Promise.reject(res);
    }
    Promise.resolve(res);
  });
}

export function getAvaliableVABank() {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.get(`${VEYRON_BASE_URL}available_va_bank/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    resolve(res);
  });
}

export function getKTPDataFromOCR(URL) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.post(
      `${VEYRON_BASE_URL}investors/ocr/`,
      {
        ktpURL: URL,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    resolve(res);
  })
}

export function checkPhoneNumberExist(phoneNumber) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.post(
      `${VEYRON_BASE_URL}user/check/phone_number/`,
      {
        phone_number: phoneNumber,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      },
    );
    resolve(res);
  })
}

export function changePassword(
  email,
  password,
  confirmPassword,
  oldPassword,
) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.post(
      `${VEYRON_BASE_URL}user/change_password/`,
      {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        oldPassword: oldPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      },
    );
    resolve(res);
  })
}

export function getFaqTitles(
  ) {
    return new Promise((resolve, reject) => {
      axios.get(
        `${VEYRON_BASE_URL}faqs/get_faq_titles`
      ).then(res => {
        resolve(res.data);
      }).catch(err => {
        console.log("err:" ,err)
        reject(err);
      });
    })
  }
  
  export function getFaq(
    id
    ) {
      return new Promise((resolve, reject) => {
        const res = axios.get(
          `${VEYRON_BASE_URL}faqs/${id}/get_faqs`
        ).then(res => {
          resolve(res.data);
        }).catch(err => {
          console.log("err:" ,err)
          reject(err);
        });
      })
    }
export function joinMailingList(
  email
) {
  return axios.post(
      `${VEYRON_BASE_URL}join_mailing_list/`,
      {
        email: email,
      },
    );
}

/** @return {Object}
 * {boolean} success
 */
export function withdraw(amount) {
  return new Promise(resolve => {
    const token = auth.getToken();
    const res = axios.post(
      `${VEYRON_BASE_URL}investors/withdrawal/`,
      {
        amount: amount,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );
    resolve(res);
  });
}
