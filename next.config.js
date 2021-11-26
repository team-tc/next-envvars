/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    buildVar: process.env.BUILDTIME_VAR,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    serverRuntimeVar: process.env.SERVER_RUNTIME_VAR,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    publicRuntimeVar: process.env.PUBLIC_RUNTIME_VAR,
  },
}
