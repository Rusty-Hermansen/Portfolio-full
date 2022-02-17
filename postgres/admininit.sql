DROP TABLE IF EXISTS wirguard.client;
DROP TABLE IF EXISTS wireguard.user;

DROP SCHEMA IF EXISTS wirguard;
CREATE SCHEMA IF NOT EXISTS wireguard;

CREATE TABLE IF NOT EXISTS wireguard.client(
    client_id SERIAL PRIMARY KEY,
    client_name VARCHAR(80) NOT NULL,
    client_ip_address VARCHAR(80) NOT NULL,
    client_allowed_ip_address_range VARCHAR(80) NOT NULL,
    client_public_key VARCHAR(80) NOT NULL,
    client_private_key VARCHAR(80) NOT NULL,
    client_date_added TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS wireguard.user (
    user_id SERIAL PRIMARY KEY, 
    user_username VARCHAR(80) UNIQUE NOT NULL,
    user_password TEXT NOT NULL,
    user_salt TEXT NOT NULL
);