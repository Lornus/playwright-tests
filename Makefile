run:
	docker run --rm --name pwt lornus/playwright-tests:v1.4
stop:
	docker stop pwt
deleteContainers:
	docker container prune
deleteImages:
	docker image prune
