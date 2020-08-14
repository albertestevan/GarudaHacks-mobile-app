/* eslint-disable no-buffer-constructor */
/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import { toBlob } from './commonFunction';
import {
  ALIYUN_REGION,
  ALIYUN_ACCESS_KEY,
  ALIYUN_SECRET_ACCESS_KEY,
} from './constants';
const oss = require('ali-oss');
const fs = require('browserify-fs');

export function uploadToOSS(files, bucketName, userID, thetype) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(files);
    const store = oss({
      region: ALIYUN_REGION,
      accessKeyId: ALIYUN_ACCESS_KEY,
      accessKeySecret: ALIYUN_SECRET_ACCESS_KEY,
      bucket: bucketName,
    });

    reader.onload = e => {
      const dataUrl = e.target.result;
      const base64 = dataUrl.split(',')[1];
      const fileType = dataUrl.split(';')[0].split(':')[1];
      const blob = toBlob(base64, fileType);

      const readerArrayBuffer = new FileReader();
      readerArrayBuffer.readAsArrayBuffer(blob);
      readerArrayBuffer.onload = function() {
        const storeAs = `${userID}/${thetype}.${blob.type.split('/')[1]}`;
        const buff = new Buffer(
          e.target.result.replace(/^data:image\/(png|gif|jpeg);base64,/, ''),
          'base64',
        );
        fs.writeFile('/file/path/', buff, () => {});
        store
          .put(storeAs, buff)
          .then(result => {
            resolve(result);
          })
          .catch(err => err);
      };
    };
  });
}

export function uploadPDFToOSS(files, bucketName, userID, thetype) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(files);
    const store = oss({
      region: ALIYUN_REGION,
      accessKeyId: ALIYUN_ACCESS_KEY,
      accessKeySecret: ALIYUN_SECRET_ACCESS_KEY,
      bucket: bucketName,
    });

    reader.onload = e => {
      const dataUrl = e.target.result;
      const base64 = dataUrl.split(',')[1];
      const fileType = dataUrl.split(';')[0].split(':')[1];
      const blob = toBlob(base64, fileType);

      const readerArrayBuffer = new FileReader();
      readerArrayBuffer.readAsArrayBuffer(blob);
      readerArrayBuffer.onload = function() {
        const storeAs = `${userID}/${thetype}.${blob.type.split('/')[1]}`;
        const buff = new Buffer(
          e.target.result.replace(/^data:application\/(pdf);base64,/, ''),
          'base64',
        );
        fs.writeFile('/file/path/', buff, () => {});
        store
          .put(storeAs, buff)
          .then(result => {
            resolve(result);
          })
          .catch(err => err);
      };
    };
  });
}
