# Deploy to Minikube quick steps

1. Start minikube:
   minikube start --driver=docker

2. Build images and load into minikube (avoid pushing to Docker Hub if you want local only):
   minikube image build -t ieap-frontend:latest frontend
   minikube image build -t ieap-java:latest java/employee-service
   minikube image build -t ieap-python:latest python/resume-parser

3. Replace images in k8s/deployments.yaml or use the same tags (__FRONTEND_IMAGE__ etc).
   kubectl apply -f k8s/

4. Check pods:
   kubectl get pods -n ieap
