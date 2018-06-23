let API_URL

if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:3002/'
} else if (process.env.NODE_ENV === 'production') {
  API_URL = 'http://54.252.149.34:3002/'
}

export { API_URL }
