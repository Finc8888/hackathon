pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        // Build the web app
        echo 'test build'
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