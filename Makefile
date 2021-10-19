up-app:
	docker-compose up -d --force-recreate app

logs:
	docker-compose logs -f

install-app:
	docker-compose run --rm app "npm install"

into-app:
	docker-compose exec app bash

unrootify:
	sudo chown -R $$(id -u):$$(id -g) . 