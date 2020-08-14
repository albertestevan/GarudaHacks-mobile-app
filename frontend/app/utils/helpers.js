import React from 'react';
import IconFormError from '../images/icon-form-error@3x.png';
import IconAddDocument from '../images/icon-add-image.svg';
import { money, normalizeMoney } from './money';

const required = value =>
  value || typeof value === 'number' ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength30 = maxLength(30);
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
const minLength2 = minLength(2);
const minLength8 = minLength(8);
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue13 = minValue(13);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const password = value =>
  value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/i.test(value)
    ? 'Password minimum 8 characters with at least 1 uppercase and 1 special character.'
    : undefined

const tooYoung = value =>
  value && value < 13
    ? 'You do not meet the minimum age requirement!'
    : undefined;
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

const renderField = ({
  input,
  label,
  type,
  placeholder,
  initialValue,
  meta: { touched, error, warning },
}) => (
    <div>
      <div className="row">
         <div className="col-6"> <label className="label-form">{label}</label></div>
         <div className="col-6 text-right"> <label className="label-form text-danger">
         {touched &&
          ((error && <span>{error} <img src={IconFormError} width="12px" height="12px"/></span>) ||
            (warning && <span>{warning} <img src={IconFormError} width="12px" height="12px"/></span>))}
          </label>

         </div>
      </div>
      <div>
        <input className="form-control" {...input} placeholder={placeholder} value={input.value} type={type} />
      </div>
    </div>
  );

const renderCheckboxField = ({
  input,
  label,
  type,
  placeholder,
  initialValue,
  meta: { touched, error, warning },
}) => (
    <div>
      <div className="row">
         <div className="col-5"> <label className="label-form">{label}</label></div>
         <div className="col-2">
           <input className="form-control" {...input} placeholder={placeholder} checked={input.value} type={type} />

         </div>
         <div className="col-5 text-right"> <label className="label-form text-danger">
         {touched &&
          ((error && <span>{error} <img src={IconFormError} width="12px" height="12px"/></span>) ||
            (warning && <span>{warning} <img src={IconFormError} width="12px" height="12px"/></span>))}
          </label>
         </div>
      </div>
    </div>
  );
const renderFileInputField = ({
  input,
  label,
  type,
  handler,
  meta: { touched, error, warning },
}) => (
  <div>
    <div className="row">
      <div className="col-6"> <label className="label-form">{label}</label></div>
      <div className="col-6 text-right"> <label className="label-form text-danger">
           {touched &&
            ((error && (
              <span>
                {error} <img src={IconFormError} width="12px" height="12px" />
              </span>
            )) ||
              (warning && (
                <span>
                  {warning}{' '}
                  <img src={IconFormError} width="12px" height="12px" />
                </span>
              )))}
      </label>
      </div>
    </div>
    <div className="upload-document">
      <img src={IconAddDocument} className="icon-add"  />
      <input
        type="file"
        className="inputfile"
        placeholder={label}
        accept="image/jpeg,image/png,image/jpg"
      />
    </div>
  </div>
);

const renderSelectField = ({
  input,
  label,
  placeholder,
  object,
  func,
  meta: { touched, error, warning },
}) => {
  return (
    <div>
      <div className="row">
        <div className="col-6"> <label className="label-form">{label}</label></div>
        <div className="col-6 text-right"> <label className="label-form text-danger">
           {touched &&
              ((error && (
                <span>
                  {error} <img src={IconFormError} width="12px" height="12px" />
                </span>
              )) ||
                (warning && (
                  <span>
                    {warning}{' '}
                    <img src={IconFormError} width="12px" height="12px" />
                  </span>
                )))}
          </label>
        </div>
      </div>
      <div>
        <select className="form-control" placeholder={placeholder} {...input}>
          <option>{placeholder}</option>
          {object && object.map(obj => <option value={obj.id} key={obj.id.toString()}>{obj.name}</option>)}
          ))}
        </select>
      </div>
    </div>
  )
};

const phoneNumberField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <div className="row">
      <div className="col-4"> <label className="label-form">{label}</label></div>
      <div className="col-8 text-right"> <label className="label-form text-danger">
          {touched &&
            ((error && (
              <span>
                {error} <img src={IconFormError} width="12px" height="12px" />
              </span>
            )) ||
              (warning && (
                <span>
                  {warning}{' '}
                  <img src={IconFormError} width="12px" height="12px" />
                </span>
              )))}
      </label>
      </div>
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          +62
        </span>
      </div>
      <input
        className="form-control"
        aria-label="Username"
        aria-describedby="basic-addon1"
        {...input}
        placeholder={label}
        type={type}
      />
    </div>
  </div>
);

const formatMoney = value => {
  const onlyNumber = value.replace(/[^\d]/g, '');
  if (!value || !onlyNumber) return '';
  return money(normalizeMoney(onlyNumber));
};

const formatIDR = (value) => {
  const reverse = value.toString().split('').reverse().join('');
	let ribuan 	= reverse.match(/\d{1,3}/g);
  ribuan	= ribuan.join('.').split('').reverse().join('');
  return 'IDR ' + ribuan;
}

export {
  required,
  maxLength30,
  minLength2,
  minLength8,
  number,
  email,
  password,
  tooYoung,
  phoneNumber,
  renderField,
  phoneNumberField,
  formatMoney,
  formatIDR,
  renderSelectField,
  renderCheckboxField,
  renderFileInputField,
};
