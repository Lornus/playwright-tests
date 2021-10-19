run:
	docker run --name pwt --rm lornus/playwright-tests:v1.3
stop:
	docker stop pwt
deleteContainers:
				docker container prune