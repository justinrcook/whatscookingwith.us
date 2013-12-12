# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'https://rubygems.org'

gem "middleman", "~>3.2.0"

# Live-reloading plugin
gem "middleman-livereload", "~> 3.1.0"

gem 'middleman-google-analytics'
gem 'haml'
gem 'bootstrap-sass', '~> 3', require: false

group :development do
  gem 'capistrano'
  gem 'capistrano-bundler', github: 'capistrano/bundler'
  gem 'capistrano-rbenv', github: 'capistrano/rbenv'
end

group :production do
  gem 'execjs'
  gem 'therubyracer'
end