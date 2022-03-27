# Creating a docker image for a Node app

# - Summary:

- Create a Dockerfile for this microservice and publish the image to Docker Hub. Your application must be configured to run as a non-root user in the container.

- Create a Kubernetes manifest in YAML format, containing a Deployment and a Service, to deploy your microservice on Kubernetes. Your Deployment must use your public Docker image.

- Publish your code, Dockerfile, and Kubernetes manifests to a public Git repository in a platform of your choice (e.g. GitHub, GitLab, Bitbucket, etc.), so that it can be cloned and tested by the team.

# - Prerequisites and tools:

1. Docker. You will have to have Docker Installed. This can be done using the guide herehttps://docs.docker.com/engine/install/ubuntu/
2. Node and Npm. You can install Npm usig the guide here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
3. Kubernetes for testing
4. Git
5. Kubectl


# - Installation Steps:

- You will need to install Kubernetes locally for testing via Minikube. I used AKS and this can be created on an Azure Portal using the guide here: https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-cluster?tabs=azure-cli
- The Kubectl tools will b needed for running the kubernetes tools on AKS. See: https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/
-

# - Code

- Application built on node backend with it running on Port 3000. 
- JSON was built using Stringify https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify with the inputs used as variables
- Once server.js is completed, then we start with docker file building.
- Simple dockerfile which runs the application as a user node in non-roohttps://docs.docker.com/engine/reference/builder/t on the container. For specific reference on the docker steps https://docs.docker.com/engine/reference/builder/
- After building the Dockerfile I proceeded to run a build using: docker build . -t <your username>/node-web-app
- Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container. Run the image you previously built: docker run -p 49160:8080 -d <your username>/node-web-app
- Now you can call your app using curl (install if needed via: sudo apt-get install curl):
- you can push image using docker push to dockerhub
- proceed to create deployment file
- In a terminal, navigate to where you created deployment.yaml and deploy your application to Kubernetes:
 kubectl apply -f deployment.yaml
you should see output that looks like the following, indicating your Kubernetes objects were created successfully:

deployment.apps/bb-demo created
service/bb-entrypoint created


# - Summary

-  Code has necessary comments in portions where some explanation may be needed on code use
-  Code can be deployed to any cloud provider.
-  You can run a kubernetes describe to ceck state of container in cluster


# Tip: test as much as possible locally using npm


- Thanks for taking out time to read! if you have anything to add please send a response or add a note!


# -  Author email:  abiola.kayode@gmail.com






