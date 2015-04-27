FROM iojs

RUN npm config set spin false
RUN npm install -g npm@^2

RUN npm install -g phantomjs
RUN npm install -g bower
RUN npm install -g ember-cli

EXPOSE 4200 35729

#WORKDIR /usr/src/app

#RUN npm install
#RUN bower install

ENTRYPOINT ["/usr/local/bin/ember"]
CMD ["help"]
