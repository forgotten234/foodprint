FROM node:15.1.0
WORKDIR /home/node
COPY package*.json ./
RUN npm install
RUN npm install -g firebase-tools
RUN npm rebuild
# Set the Chrome repo.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - 
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get -y install google-chrome-stable
# Install xvfb.
RUN apt-get install -y xvfb
RUN Xvfb :1 -screen 0 '1280x1024x16' -ac &> /dev/null &
RUN export DISPLAY=:1
ENV CHROME_BIN /usr/bin/google-chrome-stable
COPY . .
