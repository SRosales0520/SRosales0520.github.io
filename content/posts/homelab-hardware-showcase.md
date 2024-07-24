+++
authors = ["Samuel Rosales"]
title = "Homelab Hardware Showcase"
date = "2023-10-02"
description = "An overview of my server hardware"
tags = [
    "server",
    "hardware",
]
categories = [
    "server",
]
+++

It took me forever to find the right server for my homelab. Many local deals were either not the right amount of cores, not the right amount of memory, didn't have the proper drive bays, the list goes on. Eventually I had a friend from Ontario score a good deal through an auction on an "as is" server for $100 and offered it to me after fixing it up. The server ended up working right out of the box with no damage at all! Images will be added in the future.

Hardware Specs:

| Component | Product | Resources |
| :----: | :----: | :----: |
| Chassis | Hyve HS9215 | Dual socket, PCIe gen 3, <br /> 16 RAM slots, BMC |
| CPU | Xeon E5-2695 v4 | Dual 18 cores 32 threads |
| RAM | Samsung DDR4-240mhz | 2x32 GB |
| SSD | Samsung 860 Evo | 1x500 GB |
| SSD | Crucial MX500 | 1x500 GB
| HDD | Ironwolf 5400 RPM CMR | 2x6 TB |
| HDD | WD Green | 1x3 TB |
| NIC | Ethernet | 2.5 gig |
| NIC | SFP | 10 gig |

These hardware specifications allow me to ignore any hardware limitations and use the server for many different services or configurations as outlined in the next blog post. It also allows for future proofing and upgradeability if the need is there.

The one downside is that due to the chassis being old, and the BMC platform outdated, the web interface for the server is extremely limited and only good for sensor readings and power control. Fan control is not controlable even via IMPItool and hex commands, so its defualt on auto. Luckily the server doesnt get hot enough to ramp up the fans (20,000 rpm max)
