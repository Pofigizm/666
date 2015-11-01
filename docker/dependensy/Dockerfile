FROM pfgzm/mongodb

# Install NodeJS.
RUN apt-get update
RUN apt-get install -y curl wget git git-core
RUN apt-get install -y python build-essential
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN npm install -g npm
RUN rm -rf /var/lib/apt/lists/*

ADD ./data /data
WORKDIR /data

RUN npm install

