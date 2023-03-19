pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        // Build the web app
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      environment {
        DOCKER_COMPOSE_VERSION = '1.29.2'
      }
      steps {
        // Install Docker Compose
        sh "curl -L https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose"
        sh 'chmod +x /usr/local/bin/docker-compose'

        // Deploy the web app using Docker Compose
        sh 'docker-compose up -d'
      }
    }
  }
}