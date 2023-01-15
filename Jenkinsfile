pipeline{
   agent{
        docker{
            image 'lornus/playwright-tests'
        }
    }

stages{
  stage("Run tests"){
    steps{
        sh "echo 'run tests'"
        script{
           sh "docker run --rm --name pwt lornus/playwright-tests"

    }
    }
  }

  }
  post{
    cleanup{
      script{
        sh label: 'Cleanup working directoty', script: """
        echo "Cleaning work directory..."
        docker stop pwt
	    docker container prune
	    docker image prune
        ls -a
        """
      }
    }
  }
    
}
