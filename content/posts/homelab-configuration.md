+++
authors = ["Samuel Rosales"]
title = "Homelab Configuration"
date = "2023-10-03"
description = "An overview of my server hardware"
tags = [
    "server",
    "software",
    "configuration",
]
categories = [
    "server",
]
+++

In this post I will highlight the configuration of my homelab server. This post will be updated frequently as the configuration changes. 


# Operating System
I am using Proxmox as my hypervisor. I chose Proxmox because I wanted to have the functionality focused on virtual machines and containers compared to a NAS focused OS such as TrueNAS. This allows me to create a virtual machine or container for each service, including my NAS. There was lots of careful thought and planning around how I wanted to set up my storage to provide availability, redundancy, and maximized storage space. I settled on using a combination of [Snapraid](https://www.snapraid.it/[) and [MergerFS](https://github.com/trapexit/mergerfs). This combination gives me the ability to combine multiple disks of varying storage capacity and add more disks as I go (mimicking Unraid) as well as have parity and raid 5 functionality. All data is not striped and disks have readable data, so I do not have to worry about data being unreadable especially if a typical raid 5 configuration were to fail. I have one parity disk that is equal to or greater than the capacity of disks in the mergerfs pool, and then the "data disk" is just the MergerFS pool of multiple disks. Parity calculations and checks are ran on a scheduled basis. The data disk acts as a NAS and I access it through my gaming PC where I use it to store files, back up other devices, and more. One such instance is how I set up a special folder with Time Machine functionality so that I can backup my Macbook to the server using time machine.

<br />

# Services and Machines

### File Server (NAS)
I have OpenMediaVault set up as a virtual machine with my large data disks passed through at the hardware level. This allows me to have the full functionality of a NAS-oriented OS but still within Proxmox. 

### Media Server
I have a home media server container that uses the "arr" suite of services to manage content such as Radarr, Sonarr, and Calibre. This allows me to efficiently manage content on the media server from simple web interfaces. This machine is linked to the NAS where all the media files are kept. 

### VPN Server
I utilize a wireguard server in a container to allow me to remote into my home network and manage my server. I can tunnel in from my laptop or phone, and prefer this method over making things open to the internet because I would have to be extremely thorough with my securing of services. 

### K3s
Two instances of K3s, a lightweight version of K8s that are set up to be connected together and provide a failover for containers to move to a different machine in case of host failure. In this case I have just been practising, so the containers don't serve any purpose

### Windows Server Domain Controllar and Clients
I have set up a practice domain with a domain controller and client PC to practice windows server administration and emulate a business environment. Currently I have only gone so far as to practive active directory management on it, but there is much more windows server functionality I have yet to configure and practice on it. 

### Vulnerable Machines/WebApps
I plan on hosting purposefuly vulnerable windows and linux machines, as well as host web apps from the OWASP Vulnerable Web Applications so that I can practice on them.


### Docker Server
This machine hosts dockerised services such as the arr suite. This also hosts a LanCache that acts as a local DNS server on my lan with cached game installs. I can change the DNS settings on my gaming PC to point to the LanCache, and then instead of installing steam games through the internet, I can install cached games at LAN speeds. These cached games keep themselves updated automatically. The MX500 SSD serves as the storage for these games as you want to maximise the storage performance when installing games over the LAN. I hade a PiHole set up to block ads, but it interfered with DNS configurations of the LanCache

### Backups
Container and VM images have snapshots taken and stored on a separate SSD in case a misconfiguration is made, or recovery is needed. These snapshots happen on a scheduled basis
