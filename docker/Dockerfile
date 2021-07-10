    FROM node:15.9.0-alpine3.12
#    ARG REPO=github.com
#    ARG REPO_URL=$REPO.com
    ARG JD_SHELL=https://github.com/drew0531/tsnode.git
    ARG JD_SHELL_BRANCH=master
#    ARG JD_SHELL_HOST=$REPO
#    ARG JD_SHELL_KEY="NEED_REPLACE"
#    ARG JD_SCRIPTS=jd_scripts
#    ARG JD_SCRIPTS_BRANCH=master
#    ARG JD_SCRIPTS_HOST=jd_scripts_$REPO
#    ARG JD_SCRIPTS_KEY="NEED_REPLACE"
    ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
        LANG=zh_CN.UTF-8 \
        SHELL=/bin/bash \
        PS1="\u@\h:\w \$ " \
        JD_DIR=/jd \
        ENABLE_TTYD=false \
        ENABLE_WEB_PANEL=true \
        ENABLE_HANGUP=true \
        ENABLE_RESET_REPO_URL=true \
        JD_SHELL_URL=https://github.com/dewe0531/tsnode.git \
        JD_SCRIPTS_URL=https://github.com/chinnkarahoi/jd_scripts.git
    WORKDIR ${JD_DIR}
    RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
        && apk update -f \
        && apk upgrade \
        && apk --no-cache add -f bash \
                                 coreutils \
                                 git \
                                 wget \
                                 curl \
                                 nano \
                                 tzdata \
                                 perl \
                                 openssh-client \
				 python3 \
		                 py3-pip \
        && rm -rf /var/cache/apk/* \
        && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
        && echo "Asia/Shanghai" > /etc/timezone \
#        && mkdir -p /root/.ssh \
#        && echo -e $JD_SHELL_KEY > /root/.ssh/$JD_SHELL \
#        && echo -e $JD_SCRIPTS_KEY > /root/.ssh/$JD_SCRIPTS \
#        && chmod 600 /root/.ssh/$JD_SHELL /root/.ssh/$JD_SCRIPTS \
#        && echo -e "Host $JD_SHELL_HOST\n\tHostname $REPO_URL\n\tIdentityFile=/root/.ssh/$JD_SHELL\n\nHost $JD_SCRIPTS_HOST\n\tHostname $REPO_URL\n\tIdentityFile=/root/.ssh/$JD_SCRIPTS" > /root/.ssh/config \
#        && echo -e "\n\nHost *\n  StrictHostKeyChecking no\n" >> /etc/ssh/ssh_config \
#        && chmod 644 /root/.ssh/config \
#        && ssh-keyscan $REPO_URL > /root/.ssh/known_hosts \
        && git clone -b $JD_SHELL_BRANCH $JD_SHELL_URL $JD_DIR \
        && git clone -b $JD_SCRIPTS_BRANCH $JD_SCRIPTS_URL $JD_DIR/scripts \
        && cd $JD_DIR/scripts \
        && npm install \
        && npm install -g pm2 \
        && ln -sf $JD_DIR/jtask.sh /usr/local/bin/jd \
        && ln -sf $JD_DIR/jtask.sh /usr/local/bin/jtask \
        && ln -sf $JD_DIR/jtask.sh /usr/local/bin/otask \
        && ln -sf $JD_DIR/jtask.sh /usr/local/bin/mtask \
        && ln -sf $JD_DIR/jup.sh /usr/local/bin/git_pull \
        && ln -sf $JD_DIR/jup.sh /usr/local/bin/jup \
        && ln -sf $JD_DIR/jlog.sh /usr/local/bin/rm_log \
        && ln -sf $JD_DIR/jlog.sh /usr/local/bin/jlog \
        && ln -sf $JD_DIR/jcode.sh /usr/local/bin/export_sharecodes \
        && ln -sf $JD_DIR/jcode.sh /usr/local/bin/jcode \
        && ln -sf $JD_DIR/jcsv.sh /usr/local/bin/jcsv \
        && cp -f $JD_DIR/docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh \
        && chmod 777 /usr/local/bin/docker-entrypoint.sh \
        && chmod 777 $JD_DIR/*.sh \
        && rm -rf /root/.npm \
	&& npm i -S png-js \
        && npm i -g cnpm \
        && cnpm i \
        && cnpm i -g typescript  \
        && cnpm i -g ts-node \   
        && pip3 install requests 
    ENTRYPOINT ["docker-entrypoint.sh"]
