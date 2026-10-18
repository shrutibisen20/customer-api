
pipeline {
    agent any

    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['dev', 'qa', 'prod'],
            description: 'Select environment'
        )
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/shrutibisen20/customer-api.git'
            }
        }

        stage('Build') {
            steps {
                sh 'node --check app.js'
                echo 'Build completed successfully'
            }
        }

        stage('Test') {
            steps {
                sh 'node --test'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def appName = 'customer-api'
                    def appVersion = '1.0.0'
                    def environment = params.ENVIRONMENT

                    echo "Application: ${appName}"
                    echo "Version: ${appVersion}"

                    if (environment == 'dev') {
                        echo 'Development deployment started'
                    } else if (environment == 'qa') {
                        echo 'QA deployment started'
                    } else if (environment == 'prod') {
                        echo 'Production deployment requires approval'
                    } else {
                        error("Invalid environment: ${environment}")
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed. Check console output.'
        }
    }
}
