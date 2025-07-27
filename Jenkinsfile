pipeline {
    agent any
    triggers {
        pollSCM('* * * * *')
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            when {
                branch 'main'
            }
            steps {
                sh 'npm install'
            }
        }
        stage('Release') {
            when {
                branch 'main'
            }
            steps {
                sh 'npx ts-node src/scripts/build-tokens.ts'
                // Add your release logic here (e.g., npm version, publish, etc.)
            }
        }
    }
}
