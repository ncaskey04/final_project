Rails.application.config.middleware.use OmniAuth::Builder do
   provider :spotify, '7b4f5fe0104b4972a690600dedfbe0ae', 'a7a90c97fccf49c8bb5fdad5ebde99af', scope: 'playlist-read-private user-read-private user-read-email'
end