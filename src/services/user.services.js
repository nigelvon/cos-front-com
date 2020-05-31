import { request } from './request';

/**
 * @description 登录, 后端会把token 写入浏览器cookis中
 *
 * @export
 * @param params
 * @returns
 */
export async function login(params) {
  try {
    const data = await request('post', '/account/login/', params);
    return data;
  } catch (e) {
    return e;
  }
}

/**
 * @description 获取nonce
 * @export
 * @param publicKey 钱包地址
 * @returns nonce
 */
export async function getNonce(publicKey) {
  try {
    const { error, data } = await request('post', '/account/nonce/', { publicKey: publicKey });
    return error ? [] : data;
  } catch (error) {
    console.error(error);
  }
}
