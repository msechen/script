module.exports = {
    apps: [
        {
            name: "jbot",
            version: "0.9.9",
            cwd: "..",
            script: "python3",
            args: "-m jbot",
            autorestart: true,
            watch: [
                "jbot"
            ],
            ignore_watch: [
                "jbot/__pycache__/*",
                "jbot/bot/__pycache__/*",
                "jbot/diy/__pycache__/*",
                "jbot/user/__pycache__/*",
                "jbot/requirements.txt"
            ],
            watch_delay: 1000,
            interpreter: ""
        }
    ]
}