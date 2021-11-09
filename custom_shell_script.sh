customListFile="/scripts/logs/other_scripts/Annyoo2021/docker/crontab_list.sh"
mergedListFile="/scripts/docker/merged_list_file.sh"

if [ -f "$customListFile" ]; then
  git -C /scripts/logs/other_scripts/Annyoo2021 reset --hard
  git -C /scripts/logs/other_scripts/Annyoo2021 pull --rebase
else
  git clone https://github.com/Annyoo2021/scripts.git /scripts/logs/other_scripts/Annyoo2021
fi

sed -i 's/\/scripts\// \/scripts\/logs\/other_scripts\/Annyoo2021\//g' ${customListFile}
echo -e "" >>$mergedListFile
cat $customListFile >>$mergedListFile



