pipeline {
    agent any

        stages {
            stage('Checkout') {
                steps {
                    checkout scm
                }
            }

        stage('Clean') {
            steps {
                bat 'docker container stop taptreck'
                bat 'docker rm taptreck'
                bat 'docker rmi images beer-front-app -f'
            }
        }

        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker build -t beer-front-app .'
                bat 'docker run -d -p 80:80 --name taptreck beer-front-app'
            }
        }
    }
}