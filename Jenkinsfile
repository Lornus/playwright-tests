// def test_image = lornus/playwright-tests

pipeline{
  agent any

stages{
  stage("docker pull"){
    steps{
        sh "echo 'pull docker'"
        script{
        image =  docker.image('lornus/playwright-tests')
        image.pull()
        image.run()
        image.rm()
    }
    }
    // stage("docker run"){
    //   steps{
    //   sh "echo 'pull docker image'"
    //   sh "docker run --rm --env-file .env --name pwt lornus/playwright-tests"
    //   }
    // }
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
}
