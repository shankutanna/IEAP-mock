# IEAP Mini Repo (DevOps Practice)

This mini repository replicates a simplified version of the Intelligent Enterprise Automation Platform (IEAP)
for practicing DevOps workflows: **Minikube**, **Jenkins**, **Docker Hub**, and **Terraform**.

## Contents
- `frontend/` - lightweight React-based frontend (served via a simple Node server)
- `java/employee-service/` - minimal Spring Boot REST API
- `python/resume-parser/` - FastAPI microservice
- `k8s/` - Kubernetes manifests for Minikube
- `docker-compose.yml` - local development setup
- `Jenkinsfile` - example pipeline for Jenkins
- `infra/terraform/` - example Terraform skeleton (AWS) for practice
- `README.md` - this file

## Quickstart (local Minikube + Docker)
1. Install: Docker, minikube, kubectl, docker-compose, Jenkins (or run Jenkins as a container).
2. Start minikube and enable ingress (optional):
   ```bash
   minikube start --driver=docker
   minikube addons enable ingress
   ```
3. Build images and push to Docker Hub (replace `<YOUR_DOCKERHUB_USER>`):
   ```bash
   # from repo root
   docker build -t <YOUR_DOCKERHUB_USER>/ieap-frontend:latest ./frontend
   docker build -t <YOUR_DOCKERHUB_USER>/ieap-java:latest ./java/employee-service
   docker build -t <YOUR_DOCKERHUB_USER>/ieap-python:latest ./python/resume-parser
   docker push <YOUR_DOCKERHUB_USER>/ieap-frontend:latest
   docker push <YOUR_DOCKERHUB_USER>/ieap-java:latest
   docker push <YOUR_DOCKERHUB_USER>/ieap-python:latest
   ```
4. Update image names in `k8s/deployments.yaml` if needed, then deploy:
   ```bash
   kubectl apply -f k8s/
   kubectl get pods -n ieap
   ```
5. Or use `docker-compose up --build` for local dev.

## Notes
- Terraform files are examples and require AWS credentials if you want to apply them.
- Jenkinsfile is configured to use Docker registry credentials and a kubeconfig file stored in Jenkins credentials.

Happy practicing!  
