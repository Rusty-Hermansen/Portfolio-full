#!/bin/bash/

mkdir -p /home/rusty/clients/$1
cd /home/rusty/clients/$1
wg genkey | tee privatekey | wg pubkey > publickey