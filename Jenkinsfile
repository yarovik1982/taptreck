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
                bat 'docker container stop taptrack'
                bat 'docker rm taptrack'
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
                bat 'docker run -d -p 443:443 --name taptrack beer-front-app'
            }
        }
    }
}