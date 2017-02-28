FROM webdevops/apache:latest
CMD cd /app && git clone git@github.com:crumdev/fewd_project.git .

