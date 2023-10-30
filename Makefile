
# Create a docker run command
$(eval APP_NAME := $(shell basename $(shell pwd)))
APP_NAME = neamon

docker-run:
	@echo "Running $(APP_NAME)..."
	@docker run -p 8080:8080 \
	--name $(APP_NAME) \
		$(APP_NAME)
	@echo "Container: " $(shell docker ps | grep $(APP_NAME) | awk '{print $$1}')
	@echo "URL: http://localhost:8080"

docker-stop:
		@echo "Stopping $(APP_NAME)..."
		@echo "Container: " $(shell docker ps | grep $(APP_NAME) | awk '{print $$1}')
		@docker stop $$(docker ps | grep $(APP_NAME) | awk '{print $$1}')
		@echo "Stopped $(APP_NAME)"

