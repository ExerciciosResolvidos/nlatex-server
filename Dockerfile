FROM node:12

RUN apt update
RUN apt install -y imagemagick libmagickcore-dev

RUN apt install -y texlive texlive-latex-extra

RUN apt install -y texinfo

RUN sed -i 's/<policy domain="coder" rights="none" pattern="PS" \/>/<policy domain="coder" rights="read|write" pattern="PS" \/>/g' /etc/ImageMagick-6/policy.xml


ADD . app

WORKDIR app


RUN rm -r node_modules && npm install


ENTRYPOINT ["npm", "start"]
