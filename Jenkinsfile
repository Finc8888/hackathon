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
        sh "docker info"
      }
    }
  }
}