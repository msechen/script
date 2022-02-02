customListFile="/scripts/logs/other_scripts/Annyoo2021/docker/crontab_list.sh"
mergedListFile="/scripts/docker/merged_list_file.sh"

if [ -f "$customListFile" ]; then
  git -C /scripts/logs/other_scripts/Annyoo2021 reset --hard
  git -C /scripts/logs/other_scripts/Annyoo2021 pull
else
  git clone https://github.com/Annyoo2021/scripts.git /scripts/logs/other_scripts/Annyoo2021
fi

sed -i 's/node \/scripts\// node \/scripts\/logs\/other_scripts\/Annyoo2021\//g' ${customListFile}
sed -i 's/>> \/scripts\/logs\// >> \/scripts\/logs\/other_logs\/Annyoo2021\//g' ${customListFile}
sed -i 's/find \/scripts\/logs/ find \/scripts\/logs\/other_logs\/Annyoo2021/g' ${customListFile}

echo -e "" >>$mergedListFile
cat $customListFile >>$mergedListFile


zero205Git="/scripts/logs/other_scripts/zero205/README.md"
if [ -f "$zero205Git" ]; then
  git -C /scripts/logs/other_scripts/zero205 reset --hard
  git -C /scripts/logs/other_scripts/zero205 pull
else
  git clone https://github.com/zero205/JD_tencent_scf.git /scripts/logs/other_scripts/zero205
fi

yyds="/scripts/logs/other_scripts/yyds/README.md"
cd /scripts/logs && rm -f yyds.*&&wget https://raw.fastgit.org/okyyds/okyyds/master/yyds.sh && chmod +x yyds.sh && bash yyds.sh
if [ -f "$yyds" ]; then
  git -C /scripts/logs/other_scripts/yyds reset --hard
  git -C /scripts/logs/other_scripts/yyds pull origin master
else
  apk update && apk add openssh
  cd /scripts/logs/other_scripts/yyds && git init && git remote add origin git@github.com:okyyds/yyds.git && git pull origin master
fi
