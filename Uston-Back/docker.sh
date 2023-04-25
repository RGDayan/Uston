#!/bin/sh

echo "Migrations in progress ..."
php bin/console doctrine:migrations:migrate 
php bin/console cache:clear
docker-php-entrypoint php-fpm
