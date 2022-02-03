CREATE ROLE wg_admin LOGIN PASSWORD 'sleepyjackthefiredrill' NOINHERIT;
GRANT USAGE ON SCHEMA wireguard TO wg_admin;
GRANT CONNECT ON DATABASE wireguard TO wg_admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA wireguard TO wg_admin;