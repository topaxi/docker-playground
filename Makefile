install: cache-clean install-frontend install-backend
	npm install

install-frontend:
	cd frontend && npm install
	cd frontend && bower install

install-backend:
	cd backend && npm install

cache-clean:
	npm cache clean
	bower cache clean
