set :application, "pulina"
set :repo_url,  "git@bitbucket.org:ronilaukkarinen/pulina.git"
set :branch, :master
set :log_level, :debug
set :linked_files, %w{.env content/db.php content/advanced-cache.php content/object-cache.php content/plugins/w3tc-wp-loader.php}
set :linked_dirs, %w{content/uploads content/cache content/w3tc-config}
set :composer_install_flags, '--no-dev --prefer-dist --no-scripts --optimize-autoloader'
set :composer_roles, :all

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # This task is required by Capistrano but can be a no-op
      # Your restart mechanism here, for example:
      # execute :service, :nginx, :reload
    end
  end

end
