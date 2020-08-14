export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const { VEYRON_BASE_URL } = process.env;
export const { GHOST_BASE_URL } = process.env;
export const { MUSTANG_BASE_URL } = process.env;
export const { AVENTADOR_BASE_URL } = process.env;

export const { ALIYUN_ACCESS_KEY } = process.env;
export const { ALIYUN_SECRET_ACCESS_KEY } = process.env;
export const { ALIYUN_ENDPOINT_KEY } = process.env;
export const { ALIYUN_API_VERSION } = process.env;
export const { ALIYUN_REGION } = process.env;

export const { ALIYUN_BUCKET_USER } = process.env;
export const { ALIYUN_BUCKET_CAMPAIGN } = process.env;
export const { ALIYUN_BUCKET_COMPANY } = process.env;
export const { ALIYUN_BUCKET_INVESTOR } = process.env;

export const { PRIVYID_MERCHANT_KEY } = process.env;
export const { PRIVYID_REGISTER_API_URL } = process.env;

// export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const INVESTOR_PROFILE_NOT_FOUND = 'User has not investor profile';
export const COMPANY_PROFILE_NOT_FOUND = 'User has not company profile';
export const ERROR_NO_ROW_SQL = 'sql: no rows in result set';
export const ERROR_WRONG_PASSWORD =
  'crypto/bcrypt: hashedPassword is not the hash of the given password';

export const ERROR_MESSAGE_NO_ROW = 'Sorry! your email has not been registered';
export const ERROR_MESSAGE_NORMAL =
  'Sorry, there are some problem with your data! Please try again';
export const ERROR_MESSAGE_WRONG_PASSWORD = 'Wrong Password! Please try again';
export const ERROR_MESSAGE_DUPLICATE_EMAIL = 'Sorry! your email already exist, please login.';
export const ERROR_DUPLICATE_EMAIL = `pq: duplicate key value violates unique constraint "user_account_email_address_email_key"`;
