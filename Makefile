run:
	docker run -it -p 8080:80 --rm --name vuejs-app-1 vuejs-app

build:
	docker build -t vuejs-app .

dev:
	npm run dev

preview:
	npm run preview

check:
	npm run type-check && npm run lint && npm run format
