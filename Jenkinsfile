pipeline {
    agent any

    environment {
        APP_DIR = "/home/xelpmoc/Desktop/AWS-SERVER-CONNECTION/jenkins/nodejs-jenkins-pm2"
    }

    stages {

        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/JaganmohanTulipiri/nodejs-jenkins-pm2.git'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                rsync -av --delete ./ $APP_DIR/
                cd $APP_DIR
                npm install
                pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js
                pm2 save
                '''
            }
        }
    }
}
