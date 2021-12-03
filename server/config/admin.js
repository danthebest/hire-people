module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5cd8e6c89fd634fa99ad856f30f0179b'),
  },
});
