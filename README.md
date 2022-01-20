# Art Review Bot

Art Review Bot is a Twitter bot that uses AI to determine whether or not a given image or 'artwwork' is actually 'art'. Just a fun project to expresses what I consider to be art, and explore image classification ai.

AI trained using [TensorFlow](https://tensorflow.org) machine learning engine from [Google Brain Team](research.google/teams/brain).

## How to use

Just mention the bot ([@artbotr](twitter.com/artbotr)) in or under the tweet you want reviewed, and it'll reply with either 'Art' or 'Not art'. Tweet should contain an image (that's preferably art related, like a painting). 
Works with quoted retweets too.

[Screenshot]()

## Local Development

### Prerequisites

* Get a Twitter ([developer account here](developer.twitter.com/en/apply-for-access))
* Set up a project and create an app in the [developer dashboard](developer.twitter.com/en/portal/dashboard)
* Retrive your API access keys & tokens

### Enviroment

1. Clone the repository

   ```shell
   git clone https://github.com/thierryntoh24/art-review-bot.git
   cd art-review-bot
   ```

2. Install the dependencies

   ```shell
   npm install
   ```

3. Build the plugin

   ```shell
   npm run build
   ```
4. Have fun!

## Support

For general questions related to the bot, please [DM me on Twitter](twitter.com/thierryntoh24) or [leave me an email](mailto:thierryntoh24@gmail.com)