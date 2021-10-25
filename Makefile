run:
	docker run --rm --env-file .env --name pwt lornus/playwright-tests
stop:
	docker stop pwt
deleteContainers:
	docker container prune
deleteImages:
	docker image prune
