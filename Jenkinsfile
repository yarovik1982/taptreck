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
                sh 'docker container stop taptrack || true'
                sh 'docker rm taptrack || true'
                sh 'docker rmi images beer-front-app -f || true'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker build -t beer-front-app .'
                sh 'docker run -d -p 3000:3000 --name taptrack beer-front-app'
            }
        }
    }
}