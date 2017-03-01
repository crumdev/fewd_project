FROM webdevops/apache:latest

RUN apt-get update
RUN apt-get install -y git
RUN cd /app && git clone https://github.com/crumdev/fewd_project.git .

