/* eslint-disable no-console */
/* eslint-disable consistent-return */
import {
  VEYRON_BASE_URL,
  INVESTOR_PROFILE_NOT_FOUND,
  COMPANY_PROFILE_NOT_FOUND,
} from './constants';

// utils/AuthService.js
export default class AuthService {
  constructor(domain) {
    this.domain = domain || VEYRON_BASE_URL;
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  registerUser(firstName, lastName, username, email, password, phoneNumber) {
    return this.fetch(`${this.domain}register`, {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password,
        phoneNumber,
      }),
    }).then(
      res => Promise.resolve(res),
      // if(res.error){
      //   return Promise.reject(res)
      //   //return res
      // } else {
      //   return Promise.resolve(res)
      //   //window.location.replace("/investor/dashboard");
      // }
    );
  }

  login(email, password) {
    return this.fetch(`${this.domain}login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => {
        if (res.error) {
          return Promise.reject(res);
          // return res
        }
        this.setToken(res.token);
        return this.fetch(`${this.domain}me/`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${res.token}`,
          },
        });
      })
      .then(res => {
        this.setProfile(res);
        location.reload();
        return Promise.resolve(res);
      });
  }

  checkPassword(password) {
    const profile = localStorage.getItem('profile');
    const parsedProfile = JSON.parse(profile);
    const email = parsedProfile.email;
    return this.fetch(`${this.domain}login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
    })
      .then(res => {
        if (res.error) {
          return Promise.reject(res);
        } else {
          return Promise.resolve(res);
        }
      })
  }

  setProfileAfterConfirmEmail(token) {
    if (!this.loggedIn()) {
      this.setToken(token);
      return this.fetch(`${this.domain}me/`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(res => {
        this.setProfile(res);
        location.reload();
        // window.location.replace('/');
        // if (res.isPhoneNumberVerified) {
        //   window.location.replace('/');
        // } else {
        //   window.location.replace('/login/otp');
        // }
        return Promise.resolve(res);
      });
    }
  }

  getOTP() {
    return this.fetch(`${this.domain}user/request_otp_code/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    }).then(res => res);
  }

  getOTP(phoneNumber) {
    return this.fetch(`
      ${this.domain}user/request_otp_code/?phone_number=${phoneNumber}
    `, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    }).then(res => res);
  }

  getVerificationLink(email) {
    return this.fetch(
      `${this.domain}resend_confirmation_link?email=${email}`,
      {
        method: 'GET',
      },
    ).then(res => res);
  }

  checkOTP(otpCode) {
    return this.fetch(`${this.domain}user/verify_otp_code/?code=${otpCode}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    }).then(res => {
      if (res.error) {
        return Promise.reject(res);
      }
      return res;
    });
  }

  checkOTP(otpCode, phoneNumber) {    
    return this.fetch(`
      ${this.domain}user/verify_otp_code/?code=${otpCode}&phone_number=${phoneNumber}
    `, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
      },
    }).then(res => {
      if (res.error) {
        return Promise.reject(res);
      }
      return res;
    });
  }

  getInvestorProfile() {
    this.fetch(`${this.domain}investors/me/`, {
      method: 'GET',
    })
      .then(res => {
        if (res.error) {
          return Promise.resolve(this.setInvestorProfile(false));
        }
        if (res.error === INVESTOR_PROFILE_NOT_FOUND)
          return Promise.resolve(this.setInvestorProfile(false));
        this.setInvestorData(JSON.stringify(res))
        return Promise.resolve(this.setInvestorProfile(true));
      })
      .catch(e => Promise.resolve(this.setInvestorProfile(false)));
  }

  getCompanyProfile() {
    this.fetch(`${this.domain}fundraisers/me/`, {
      method: 'GET',
    })
      .then(res => {
        if (res.error === COMPANY_PROFILE_NOT_FOUND) {
          return Promise.resolve(this.setCompanyProfile(false));
        }
        return Promise.resolve(this.setCompanyProfile(true));
      })
      .catch(e => Promise.resolve(this.setCompanyProfile(false)));
  }

  hasCompanyProfile() {
    const companyProfile = this.getCompanyProfile();
    if (companyProfile) {
      return true;
    }
    const val = localStorage.getItem('companyProfile');
    if (val === 'true') {
      return true;
    }
    return false;
    // return val === 'true';
  }

  hasInvestorProfile() {
    const investorProfile = this.getInvestorProfile();
    const val = localStorage.getItem('investorProfile');
    if (investorProfile) {
      return true;
    }
    if (val === 'true') {
      return true;
    }
    return false;
  }

  getInvestorStatus() {
    const investorProfile = this.getInvestorProfile();
    const val2 = JSON.parse(localStorage.getItem('investorProfileData'));
    return val2 ? val2.statusID : '';
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token; // handwaiving here
  }

  loginAs(role) {
    localStorage.setItem('loginAs', role);
    // this.forceUpdate();
  }

  getLoginAs() {
    const loginAs = localStorage.getItem('loginAs');
    return loginAs || '';
  }

  backToGeneralUser() {
    localStorage.setItem('loginAs', '');
  }

  setProfile(profile) {
    // Saves profile data to localStorage
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  setInvestorProfile(profileStatus) {
    // Saves profile data to localStorage
    localStorage.setItem('investorProfile', profileStatus);
  }

  setInvestorData(investor) {
    // Saves profile data to localStorage
    localStorage.setItem('investorProfileData', investor);
  }

  setCompanyProfile(profileStatus) {
    // Saves profile data to localStorage
    localStorage.setItem('companyProfile', profileStatus);
  }

  getProfile() {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem('profile');
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem('cc_id', idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('cc_id');
  }

  getPhoneNumber() {
    // Retrieves the user token from localStorage
    const profile = this.getProfile();
    return profile.phoneNumber;
  }

  getUserId() {
    // Retrieves the user token from localStorage
    const profile = this.getProfile();
    return profile.id;
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('cc_id');
    localStorage.removeItem('profile');
    localStorage.clear();
  }

  checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    // var errorResponse = {
    //   status: response.status,
    //   statusText:response.statusText,
    //   response: response
    // }
    // var error = new Error(response.statusText)
    // error.response = response
    return response;
    // throw error
  }

  checkLogin(email, password) {
    // Get a token
    return this.fetch(`${this.domain}login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(res => {
      if (res.error) {
        return Promise.resolve(res);
        // return res
      }
      return Promise.resolve(res);
    });
  }

  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (this.loggedIn()) {
      headers.Authorization = `Bearer ${this.getToken()}`;
    }

    return fetch(url, {
      headers,
      ...options,
    })
      .then(this.checkStatus)
      .then(response => response.json());
  }
}
