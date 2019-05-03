case $1 in
  deploy)
    echo "Deploying"
    [[ -e $PWD/.env ]] | source app.sh create-env
    ;;
  create-env)
    echo "Creating new enviroment"
    conda create --prefix=.env python=3.6
    conda activate $PWD/.env
    pip install -e .
    ;;
esac
