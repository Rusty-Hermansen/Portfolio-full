CREATE ROLE wg_admin LOGIN PASSWORD 'sleepyjackthefiredrill' NOINHERIT;
GRANT USAGE ON SCHEMA wireguard TO wg_admin;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA wireguard TO wg_admin;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA wireguard TO wg_admin;

CREATE ROLE pf_user LOGIN PASSWORD 'iliveinspaceomicron' NOINHERIT;
GRANT USAGE ON SCHEMA wireguard TO pf_user;
GRANT SELECT ON wireguard.user TO pf_user;