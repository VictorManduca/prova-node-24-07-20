.PHONY: help

RUN = docker exec

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

pull-mariadb: ## pull mariadb image from dockerhub
	docker pull mariadb

run-db: pull-mariadb ## build db container with mariadb image
	docker run --name helpper -p 3306:3306 -e MYSQL_ROOT_PASSWORD=helpper -d mariadb

mysql-commands: ## startup db structure
	# $(RUN) -it helpper bash
	docker exec helpper -p helpper mysql -p helpper
	create database helpper
	create table user (id int primary key auto_increment, name varchar(255), username varchar(255), email varchar(255))