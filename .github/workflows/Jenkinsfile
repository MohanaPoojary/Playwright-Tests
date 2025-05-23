pipeline {
  agent any

  tools {
    nodejs 'NodeJS 20'  // Make sure this is configured in Jenkins > Global Tool Config
  }

  stages {
    stage('Checkout') {
      steps {
        git 'https://github.com/MohanaPoojary/Playwright-Tests.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Install Browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npx playwright test'
      }
    }

    stage('Archive Report') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
      }
    }
  }
}
