/* eslint-disable no-plusplus */
export function toBlob(urlData, fileType) {
  const bytes = window.atob(urlData);
  let n = bytes.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bytes.charCodeAt(n);
  }
  return new Blob([u8arr], { type: fileType });
}
