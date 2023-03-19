node {
    // v1
	checkout scm

	stage('Build Base  application') {
		echo "*** Build Base  application ***"
        sh '''
            pwd
        '''
	}

	stage('Deploy Base  application'){
		echo "*** Deploy Base  application ***"
        sh '''
            ls
        '''
        sh '''
            docker-compose up -d
        '''

	}
}