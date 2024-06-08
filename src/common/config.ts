const be_http_root = 'http' + '://' + process.env.NEXT_PUBLIC_BE_DOMAIN
const be_ws_root = 'ws' + '://' + process.env.NEXT_PUBLIC_BE_DOMAIN

export const name = 'Iris'

export const be = {
  http_root: be_http_root,
  ws_root: be_ws_root
}
