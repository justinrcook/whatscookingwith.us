###
# Helpers
###

###
# Markdown
###
set :markdown, :fenced_code_blocks => true, :smartypants => true

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'
set :relative_links, true

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets

  # Compress images
  activate :imageoptim, svgo: false, manifest: false
end

activate :deploy do |deploy|
  deploy.method = :git
  deploy.build_before = true
end
