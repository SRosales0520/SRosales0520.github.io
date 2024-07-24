+++
authors = ["Samuel Rosales"]
title = "Kijiji Bot"
date = "2024-07-23"
description = "A project that served as an invaluable every-day tool"
tags = [
    "projects",
    "software",
    "mining",
]
categories = [
    "projects",
]
+++

## Purpose
In tandem with the [Crypto Mining Journey](crypto-mining.md) project, this bot served to help find new posts of hardware on kijiji in a timely manner. Deals and underpriced items could be picked up quickly before larger crypto mining operations in the city could get to it first.

## How it worked
The python-based bot would scrape a certain URL of Kijiji that had every post in the city, therefore I could catch any post regardless of category or title. The URL could be manipulated to search multiple pages, in case there were so many new posts that they went onto the second or third page. Each page would be iterated through, scanning each post and taking the listing title to match against keywords from a pre-configured dictionary. These words would include models of graphics cards, motherboards, etc. ANything I was looking for.

If a keyword was matched, it would pull the description and listing price of that item. The URL of that post would be stored so that it isn't included again in future rsults.

The title, description, and price are then formatted together into a message to be sent through a Telegram bot. I had a channel with the bot where it would send me messages with the relevant info and a link to the post for quick viewing.

## Challenges
Every once in a while the pages would be filled with lots of ads, replacing typical posts. This was combated by changing the search URL every once in a while. Additionally, the rate at which the pages were searched/scraped was randomized between 3-10 seconds

## Conclusion
In the end, his helped to build out the operation by hunting for deals quickly before others could get to them, and monitoring uncategorized or badly advertised posts. At one point I had picked up 3-4 graphics cards within the span of two days, all at least 20-30% below current market price. 