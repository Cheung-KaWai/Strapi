module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1a2fade3cf9d83f617161a252954ce78'),
  },
});
