/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import Dropzone from 'react-dropzone-uploader';
import { FormattedMessage } from 'react-intl';
import Button from '../components/Button';

import { uploadToOSS } from './aliyun';
import IconDeleteImage from '../images/delete-image.svg';
import IconAddDocument from '../images/icon-add-image.svg';

import IconFormError from '../images/icon-form-error@3x.png';
import IconInfo from '../images/ic-info.svg';

import { ALIYUN_BUCKET_USER, ALIYUN_BUCKET_INVESTOR } from './constants';
import AuthService from './AuthService';
const auth = new AuthService();
const userID = auth.getProfile().id;
const scope = "aventador.components.transaction";

import imageCompression from 'browser-image-compression';

export const renderField2 = ({
  input,
  label,
  type,
  classWidth,
  info,
  detailInfo,
  status,
  infolink,
  linktitle,
  disabled,
  currency,
  labelID,
  value,
  meta: { touched, error, warning },
}) => (
  <div className={classWidth}>
    {' '}
    <div className="row">
      <label className="note black col-md-11 col-11 padding-right-0">
        {labelID?
        (
          <FormattedMessage id={`${labelID}`} />):label? label:""
      }{' '}
        {status === 'optional' ? (
          <span className="note black-40">(optional)</span>
        ) : (
          ''
        )}
      </label>
      {info ? (
        <div className="col-1 col-sm-1 text-right padding-left-0 note">
          <a data-tip data-for="info-data">
            <img src={IconInfo} width="12px" height="12px" alt="" />
          </a>
          <ReactTooltip
            id="info-data"
            type="dark"
            effect="solid"
            delayHide={1000}
            clickable
          >
            <div>{info} </div>
            {infolink ? <a href={infolink} target="_blank">{linktitle}</a> : ''}
          </ReactTooltip>
        </div>
      ) : (
        ''
      )}
    </div>
    <div className="row">
      <label className="col-md-12 com-sm-12 note black-40">{detailInfo || ''}</label>
    </div>
    {currency ? (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text body-text" id="basic-addon1">
            {currency}
          </span>
        </div>
        <input
          className="form-control input-text-test body-text black padding-left-right-16"
          disabled={disabled}
          {...input}
          type={type}
        />
      </div>
    ) : (
      <input
        className="form-control input-text-test body-text black padding-left-right-16"
        disabled={disabled}
        {...input}
        type={type}
      />
    )}
    <span className="text-danger note">
      {touched &&
        ((error && (
          <div>
            {error}{' '}
            <img src={IconFormError} width="12px" height="12px" alt="" />
          </div>
        )) ||
          (warning && (
            <div>
              {warning}{' '}
              <img src={IconFormError} width="12px" height="12px" alt="" />
            </div>
          )))}
    </span>
  </div>
);

export const renderDropDownField = ({
  input,
  label,
  labelID,
  values,
  classWidth,
  selectedData,
  info,
  infolink,
  linktitle,
  isDisabled,
}) => (
  <div className="row">
      <div className={classWidth || `col-md-11 col-sm-11`}>
        <label className="note black">{labelID?
        (
          <FormattedMessage id={`${labelID}`} />):label? label:""
      }{' '}</label>
      </div>
      {info ? (
        <div className="col-md-1 com-sm-1 text-right">
          <a data-tip data-for={'info-data-'.info}>
            <img src={IconInfo} width="12px" height="12px" alt="" />
          </a>
          <ReactTooltip
            id={'info-data-'.info}
            type="dark"
            effect="solid"
            delayHide={1000}
            clickable
          >
            <div>{info}</div>
            {infolink ? <a target="_blank" href={infolink}>{linktitle}</a> : ''}
          </ReactTooltip>
        </div>
      ) : (
        ''
      )}
      <div className="col-md-12 col-sm-12">
        <select className="dropdown-list input-text-test body-text black" {...input} disabled={isDisabled}>
          <option value="default" selected hidden>
            Choose here
          </option>
          {values
            ? values.map(value => (
                <option
                  className="padding-left-right-16"
                  key={value.id || value.code}
                  value={value.id || value.code}
                  selected={value.id === selectedData ? 'selected' : ''}
              >
                  {value.name}
                </option>
            ))
            : ''}
        </select>
      </div>
    </div>
);

export const renderDropDownBankField = ({
  input,
  label,
  values,
  classWidth,
  selectedData,
  info,
  infolink,
  linktitle,
  isDisabled,
  labelID,
}) => (
  <div className="row">
      <div className={classWidth || `col-md-11 col-sm-11`}>
        <label className="note black">
          <FormattedMessage id={`${labelID}`} />
        </label>
      </div>
      {info ? (
        <div className="col-md-1 com-sm-1 text-right">
          <a data-tip data-for={'info-data-'.info}>
            <img src={IconInfo} width="12px" height="12px" alt="" />
          </a>
          <ReactTooltip
            id={'info-data-'.info}
            type="dark"
            effect="solid"
            delayHide={1000}
            clickable
          >
            <div>{info}</div>
            {infolink ? <a href={infolink}>{linktitle}</a> : ''}
          </ReactTooltip>
        </div>
      ) : (
        ''
      )}
      {selectedData?selectedData:""}
      <div className="col-md-12 col-sm-12">
        <select className="dropdown-list body-text inputStyle" {...input} disabled={isDisabled} onChange={value => input.onChange(value)} onBlur={() => input.onBlur(input.value)}>
          <option value="default" selected hidden>
            Pilih Bank
          </option>
          {values
            ? values.map(value => (
                <option
                  key={value.code}
                  value={value.code}
                  selected={value.code === selectedData ? 'selected' : ''}
              >
                  {value.name}
                </option>
            ))
            : ''}
        </select>
      </div>
    </div>
);

export const renderField = ({
  input,
  label,
  type,
  classWidth,
  disabled,
  meta: { touched, error, warning },
}) => (
  <div className={classWidth}>
    {' '}
    <label className="formLabel">{label}</label>
    <input
      className="form-control inputStyle padding-left-right-16"
      {...input}
      type={type}
      disabled={disabled}
    />
    <span className="formLabel text-danger">
      {touched &&
        ((error && (
          <div>
            {error}{' '}
            <img src={IconFormError} width="12px" height="12px" alt="" />
          </div>
        )) ||
          (warning && (
            <div>
              {warning}{' '}
              <img src={IconFormError} width="12px" height="12px" alt="" />
            </div>
          )))}
    </span>
  </div>
);

export const Preview = ({ meta, canRemove, fileWithMeta }) => {
  const { percent, url, status } = meta;
  const { cancel, remove, restart } = fileWithMeta;
  return (
    <div className="preview-circle">
      {url ? (
        <div className="">
          <img alt="" src={url} className="preview-img-circle" />
          {status !== 'preparing' &&
            status !== 'getting_upload_params' &&
            status !== 'uploading' &&
            canRemove && (
            <img
                alt=""
                src={IconDeleteImage}
                className="icon-delete-circle"
                onClick={remove}
              />
          )}
        </div>
      ) : (
        <div className="progress-section">
          <div className="progress-upload">
            <div
              className="progress-bar-upload progress-bar-success"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${Math.round(percent)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export const Preview2 = ({ meta, canRemove, fileWithMeta }) => {
  const { percent, url, status } = meta;
  const { cancel, remove, restart } = fileWithMeta;

  return (
    <div className="">
      {url ? (
        <div>
          <img alt="" src={url} className="preview-img-rectangle" />
          {status !== 'preparing' &&
            status !== 'getting_upload_params' &&
            status !== 'uploading' &&
            canRemove && (
            <img
                alt=""
                src={IconDeleteImage}
                className="icon-delete-circle"
                onClick={remove}
              />
          )}
        </div>
      ) : (
        <div className="progress-section">
          <div className="progress-upload">
            <div
              className="progress-bar-upload progress-bar-success"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${Math.round(percent)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export const Layout2 = ({
  input,
  previews,
  dropzoneProps,
  files,
  status,
  extra: { maxFiles },
}) => (
  <div className="row">
    <div className="margin-auto">
      <div {...dropzoneProps} className="upload-profile-picture">
        {files.length > 0 ? (
          previews
        ) : (
          <img
            alt=""
            src={IconAddDocument}
            className="profile-pic-status-new"
          />
        )}
        {files.length < maxFiles && input}
      </div>
    </div>
  </div>
);

export const Layout3 = ({
  input,
  previews,
  dropzoneProps,
  files,
  status,
  extra: { maxFiles },
}) => (
  <div className="row">
    <div className="upload-document-area">
      <div {...dropzoneProps} className="upload-document">
        { files.length > 0 ? (
          previews
        ) : (
          <img alt="" src={IconAddDocument} className="icon-add" />
        )}
        {files.length < maxFiles && input}
      </div>
    </div>
  </div>
);

export const ButtonLayout = ({
  input,
  previews,
  dropzoneProps,
  files,
  status,
  extra: { maxFiles },
}) => (
  <div {...dropzoneProps} className="">
    {files.length < maxFiles && input}
    <div style={{marginTop: '-55px'}}>
      <Button text={`aventador.components.ProfilePage.Upload.New.Picture`} outline></Button>
    </div>
  </div>
);

export const CustomInput2 = (props) => {
  const handleSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove());
  };
  // const handleChangeStatus = ({ meta, file, extra }, status, allFiles) => {
  //   if(status === 'error_file_size') {
  //     alert("your file is more than 2MB");
  //     allFiles.forEach(f => f.remove());
  //   }
  // }

  const getUploadParams = async ({ file }) => {
    const options = {
      maxSizeMB: 2,
    }

    let compressedFile = file;
    try {
      compressedFile = await imageCompression(file, options);
    } catch (error) {
      console.log(error);
      compressedFile = file;
    }

    const { res, url } = await uploadToOSS(
      compressedFile,
      ALIYUN_BUCKET_USER,
      userID,
      'idCard',
    );
    const { fileUrl } = res;
    localStorage.setItem('idCard', url);
    return { body: compressedFile, meta: { fileUrl, url }, url };
  };
  return (
    <Dropzone
      accept="image/*"
      minSizeBytes={0}
      maxSizeBytes={8388608}
      getUploadParams={getUploadParams} // {() => ({ url: 'https://httpbin.org/post' })}
      inputContent={null}
      onSubmit={handleSubmit}
      LayoutComponent={Layout3}
      PreviewComponent={Preview2}
      // onChangeStatus={handleChangeStatus}
      onChangeStatus={props.statusChange}
      canRemove
      maxFiles="1"
      styles={{
        dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
        inputLabel: { width: '260px', height: '183px', "margin": "0px", },
      }}
    />
  );
};
export const CustomInput3 = (props) => {
  const handleSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove());
  };
  // const handleChangeStatus = ({ meta, file, extra }, status, allFiles) => {
  //   if(status === 'error_file_size') {
  //     alert("your file is more than 2MB");
  //     allFiles.forEach(f => f.remove());
  //   }
  // }

  const getUploadParams = async ({ file }) => {
    const options = {
      maxSizeMB: 2,
    }

    let compressedFile = file;
    try {
      compressedFile = await imageCompression(file, options);
    } catch (error) {
      console.log(error);
      compressedFile = file;
    }

    // const lala = await uploadToOSS(file, ALIYUN_BUCKET_USER, userID, 'selfie');
    const { res, url } = await uploadToOSS(
      compressedFile,
      ALIYUN_BUCKET_USER,
      userID,
      'selfie',
    );
    const { fileUrl } = res;
    localStorage.setItem('selfie', url);
    return { body: compressedFile, meta: { fileUrl, url }, url };
  };
  return (
    <Dropzone
      accept="image/*"
      minSizeBytes={0}
      maxSizeBytes={8388608}
      getUploadParams={getUploadParams} // {() => ({ url: 'https://httpbin.org/post' })}
      inputContent={null}
      onSubmit={handleSubmit}
      LayoutComponent={Layout3}
      PreviewComponent={Preview2}
      // onChangeStatus={handleChangeStatus}
      onChangeStatus={props.statusChange}
      canRemove
      maxFiles="1"
      styles={{
        dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
        inputLabel: { width: '260px', height: '183px', "margin": "0px", },
      }}
    />
  );
};

export const CustomInput = () => {
  const handleSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.cancel());
  };

  const handleChangeStatus = ({ meta, file, extra }, status, allFiles) => {
    if(status === 'error_file_size') {
      alert("your file is more than 2MB");
      allFiles.forEach(f => f.remove());
    }
  }

  const getUploadParams = async ({ file }) => {
    const options = {
      maxSizeMB: 2,
    }

    let compressedFile = file;
    try {
      compressedFile = await imageCompression(file, options);
    } catch (error) {
      console.log(error);
      compressedFile = file;
    }

    const { res, url } = await uploadToOSS(
      compressedFile,
      ALIYUN_BUCKET_USER,
      userID,
      'profilePicture',
    );
    const { fileUrl } = res;
    localStorage.setItem('profilePictureUrl', url);
    return { body: compressedFile, meta: { fileUrl, url }, url };
  };
  return (
    <Dropzone
      accept="image/*"
      minSizeBytes={0}
      maxSizeBytes={8388608}
      getUploadParams={getUploadParams} // {() => ({ url: 'https://httpbin.org/post' })}
      inputContent={null}
      onSubmit={handleSubmit}
      LayoutComponent={Layout2}
      PreviewComponent={Preview}
      canRemove
      onChangeStatus={handleChangeStatus}
      maxFiles="1"
      styles={{
        dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
        inputLabel: { width: '183px', height: '183px', position: 'relative' },
      }}
    />
  );
};

export const ButtonDropzone = (props) => {
  const handleSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove());
  };

  // const handleChangeStatus = ({ meta, file, extra }, status, allFiles) => {
  //   if(status === 'error_file_size') {
  //     alert("your file is more than 2MB");
  //     allFiles.forEach(f => f.remove());
  //   }
  // }

  const getUploadParams = async ({ file }) => {
    const options = {
      maxSizeMB: 2,
    }

    let compressedFile = file;
    try {
      compressedFile = await imageCompression(file, options);
    } catch (error) {
      console.log(error);
      compressedFile = file;
    }

    // const lala = await uploadToOSS(file, ALIYUN_BUCKET_USER, userID, 'selfie');
    const { res, url } = await uploadToOSS(
      compressedFile,
      ALIYUN_BUCKET_USER,
      userID,
      'profilePictureUrl',
    );
    const { fileUrl } = res;
    localStorage.setItem('profilePictureUrl', url);
    return { body: compressedFile, meta: { fileUrl, url }, url };
  };

  return (
    <Dropzone
      accept="image/*"
      minSizeBytes={0}
      maxSizeBytes={8388608}
      getUploadParams={getUploadParams} // {() => ({ url: 'https://httpbin.org/post' })}
      inputContent={null}
      onSubmit={handleSubmit}
      LayoutComponent={ButtonLayout}
      PreviewComponent={Preview2}
      // onChangeStatus={handleChangeStatus}
      onChangeStatus={props.statusChange}
      canRemove
      maxFiles="1"
      styles={{
        dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
        inputLabel: {
          position: 'relative',
          height: '51px',
          width: '183px',
        },
      }}
    />
  );
};