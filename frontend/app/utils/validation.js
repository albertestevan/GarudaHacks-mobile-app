/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
import React from 'react';
import IconFormError from '../images/icon-form-error@3x.png';
import { FormattedMessage } from 'react-intl';

export const required = value =>
  value || typeof value === 'number' ? undefined : 'Wajib diisi';
export const maxLength = max => value =>
  value && value.length > max ? `Harus ${max} karakter atau kurang` : undefined;
export const maxValue = max => value =>
  value && parseFloat(value) >= max ? `Harus kurang dari ${max}` : undefined;
export const maxLength30 = maxLength(30);
export const maxLength50 = maxLength(50);
export const minLength = min => value =>
  value && value.length < min ? `Harus ${min} karakter atau lebih` : undefined;
export const minLength2 = minLength(2);
export const minLength8 = minLength(8);
export const minLength15 = minLength(15);
export const mustLength15 = value => value && value.length != 15 ? `Harus 15 angka` : undefined;
export const minLength16 = minLength(16);
export const mustLength16 = value => value && value.length != 16 ? `Harus 16 angka` : undefined;
export const number = value =>
  value && isNaN(Number(value)) ? 'Harus angka' : undefined;
export const minValue = min => value =>
  value && value < min ? `Harus paling tidak ${min}` : undefined;
export const equalValue = num => value =>
  value && value === num ? `Harus ${num}` : undefined;
export const minValue13 = minValue(13);
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Alamat email tidak valid'
    : undefined;

export const password = value =>
  value &&
  // eslint-disable-next-line no-useless-escape
  // !/^(?=.*?[A-Z])(?=.*?[a-z])(?!.*?[=?<>()'"\/\&]).{8,20}$/i.test(value)
  !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*()`~,<.>\/?;:'"[{}\]\-_=+])(?=.{8,20})/.test(value)
    ? 'Kata sandi minimal 8 karakter dengan setidaknya 1 huruf besar, 1 huruf kecil dan 1 karakter khusus.'
    : undefined;

export const tooYoung = value =>
  value && value < 13
    ? 'Anda tidak memenuhi persyaratan usia minimum!'
    : undefined;
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Hanya karakter alfanumerik'
    : undefined;
export const numberOnly = value =>
    value && /[^0-9 ]/i.test(value)
      ? 'Hanya angka'
      : undefined;
export const phoneNumber = value =>
  value && !/^(^0)(\d{3,4}-?){2}\d{3,4}$/i.test(value)
    ? 'Nomor telepon salah'
    : undefined;
export const phoneNumber2 = value =>
    value && !/^\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/i.test(value)
      ? 'Nomor telepon salah'
      : undefined;
   // \+?([ -]?\d+)+|\(\d+\)([ -]\d+)
export const phoneNumberMobile = value =>
    value && !/^(^[1-9])(\d{3,4}-?){2}\d{2,3}$/i.test(value)
      ? 'Nomor telepon salah'
      : undefined;
export const url = value =>
  value &&
  !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i.test(
    value,
  )
    ? 'Url tidak valid'
    : undefined;

export const minAmount = min => value =>
value && value < min ? `Harus minimal Rp ${min.toLocaleString('de-DE')}` : undefined;
export const minAmountWithdrawal = min => value =>
value && value < min ? `Minimum penarikan Rp ${min.toLocaleString('de-DE')}` : undefined;
export const minAmount35 = minAmount(3500000);
export const multiplyX = x => value =>
value && value%x !=0 ? `Harus kelipatan ${x.toLocaleString('de-DE')}` : undefined;
export const multiply100 = multiplyX(100000);

export const renderField = ({
  input,
  label,
  type,
  labelID,
  meta: { touched, error, warning },
}) => (
  <div>
    <div className="row">
      <div className="col-md-5 col-sm-12">
        {' '}
        <label className="formLabel">
          <FormattedMessage id={`${labelID}`} />
        </label>
      </div>
      <div className="col-md-7 col-sm-12 text-right">
        {' '}
        <label className="label-form text-danger">
          {touched &&
            ((error && (
              <span>
                {error}
                <img alt="" src={IconFormError} width="12px" height="12px" />
              </span>
            )) ||
              (warning && (
                <span>
                  {warning}{' '}
                  <img alt="" src={IconFormError} width="12px" height="12px" />
                </span>
              )))}
        </label>
      </div>
    </div>
    <div>
      <input className="form-control inputStyle padding-left-right-16 " {...input} type={type} />
    </div>
  </div>
);
export const renderField2 = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div className="row">
      <div className="col-12 text-left">
        {' '}
        <label className="note black text-danger">
          {touched &&
            ((error && (
              <span>
                {error}{' '}
                <img alt="" src={IconFormError} width="12px" height="12px" />
              </span>
            )) ||
              (warning && (
                <span>
                  {warning}{' '}
                  <img alt="" src={IconFormError} width="12px" height="12px" />
                </span>
              )))}
        </label>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <input
          className="form-control"
          {...input}
          placeholder={label}
          type={type}
        />
      </div>
    </div>
  </div>
);
