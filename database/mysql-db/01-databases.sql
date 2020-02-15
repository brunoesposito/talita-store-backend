# create databases
CREATE DATABASE IF NOT EXISTS `backend`;

# create root user and grant rights
GRANT ALL ON *.* TO 'root'@'%';
