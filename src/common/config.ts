const be_http_root = 'https' + '://' + process.env.NEXT_PUBLIC_BE_DOMAIN
const be_ws_root = 'wss' + '://' + process.env.NEXT_PUBLIC_BE_DOMAIN

export const name = 'Iris'

export const randomUserAPI = 'https://randomuser.me/api?nat=au,gb,in,us'

export const be = {
  http_root: be_http_root,
  ws_root: be_ws_root
}
