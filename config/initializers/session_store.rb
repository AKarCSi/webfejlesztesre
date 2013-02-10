# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_webfejlesztesre_session',
  :secret      => 'c5a0699b631106a3de4cd9ce99d465fb872a4317773c9ad48dfba9913de44c27247dc3bc040a87e3e430eef878146d4a552ce56fdf080395e125e7bcdf8566ba'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
