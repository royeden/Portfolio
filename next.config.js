/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports = {
  experimental: {
    redirects() {
      return [
        {
          source: '/',
          permanent: true,
          destination: '/en'
        }
      ];
    }
  }
};
