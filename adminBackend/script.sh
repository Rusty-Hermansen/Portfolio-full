#!/bin/bash/

mkdir -p /home/rusty/_work/Portfolio-full/Portfolio-full/adminBackend/clients/$1
cd /home/rusty/wireguardadmin/clients/$1
wg genkey | tee privatekey | wg pubkey > publickey