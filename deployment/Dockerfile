# stage 1
FROM  016353724114.dkr.ecr.us-west-1.amazonaws.com/company-website:node12.16.4-ssl-com-cn-curl-sharp
WORKDIR /opt/open-bytes

COPY . .

RUN yarn config set network-timeout 300000
RUN npm config set registry https://nexus.graviti.cn/repository/npmgroup/
RUN yarn config set registry https://nexus.graviti.cn/repository/npmgroup/
RUN yarn install
RUN yarn run build
ENV NODE_ENV=production
ENV DOMAIN=ZH
ENV HOST=0.0.0.0

ENTRYPOINT [ "yarn","run","start","-p","4443" ]
