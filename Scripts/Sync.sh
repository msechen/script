###########################################
# author: Apocalypsor                     #
# params: (combine with _)                #
#   - keep: keep /tmp/dest_repo           #
#   - ts2js: convert ts to js             #
###########################################

source_repo=$1
source_branch=$2
dest_repo=$3
params=$4

commit(){
    git config user.email " 41898282+github-actions[bot]@users.noreply.github.com"
    git config user.name "Auto Update Bot"
    git add .
    git commit -am "Update"
    git push --porcelain > /tmp/git_log
    result=$(grep "up to date" /tmp/git_log)
    rm /tmp/git_log

    if [ "$result" ]
    then
        update=false
    else
        update=true
    fi
}

echo
echo "-----------------------Cloning destination repo-----------------------"
git clone $dest_repo /tmp/dest_repo
cd /tmp/dest_repo
find . -maxdepth 1 -path ./.git -prune -o -exec rm -rf {} \; 2> /dev/null
mkdir /tmp/backup

echo
echo "--------------------------Cloning source repo-------------------------"
git clone --depth 1 -b $source_branch $source_repo /tmp/source_repo
if [ -d "/tmp/source_repo" ]; then
    rm -rf /tmp/source_repo/.git/

    echo
    echo "-----------------------------Syncing repo-----------------------------"
    mv -f /tmp/source_repo/* /tmp/dest_repo
    
    if [[ $params == *"ts2js"* ]]
    then
        ts_exist=$(find ./ -name "*.ts")
        if [ "$ts_exist" ]
        then
            echo "Converting Typescript files ..."
            npm install --no-save typescript
            find ./ -name "*.ts" -exec ./node_modules/.bin/tsc {} >/dev/null 2>&1 \;
            rm -rf node_modules
        fi
    fi
    
    rm -f README.md
    commit

    echo
    if $update
    then
        echo "Repo updated!"
        echo "update" > /tmp/update
    else
        echo "Repo already up-to-date!"
    fi
    
    if [[ $params == *"keep"* ]]
    then
        rm -rf /tmp/source_repo /tmp/backup
    else
        rm -rf /tmp/dest_repo /tmp/source_repo /tmp/backup
    fi

else
    echo
    echo "Error source repo!"
fi

