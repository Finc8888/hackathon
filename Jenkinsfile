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
      steps {
        // Install Docker Compose
        sh "ls /usr/local/bin/"

        // Deploy the web app using Docker Compose
        sh '/usr/local/bin/docker-compose up --build'
      }
    }
  }
}