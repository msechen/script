import subprocess
import pkg_resources


def main():
    dists = [_ for _ in pkg_resources.working_set]
    for dist in dists:
        subprocess.call("pip install --upgrade " + dist.project_name, shell=True)


if __name__ == '__main__':
    main()
