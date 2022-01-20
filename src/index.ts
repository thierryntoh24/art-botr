// import TwitterApi from 'twitter-api-v2'
// import Keys from './config'
// import https from 'https'
// import fs from 'fs'

// const bot = new TwitterApi({
//     appKey: Keys.appKey,
//     appSecret: Keys.appSecret,
//     accessToken: Keys.accessToken,
//     accessSecret: Keys.accessSecret,
// })

// let since_id: string[] = []
// since_id.push('1483890454395506696')

// //main functions
// let runBot = async () => {

//     try {

//         //getting mentioned tweets
//         let mentions = await bot.v2.userMentionTimeline('1468507349065564167', {
//             // pagination_token: '200',
//             since_id: since_id[0],
//             max_results: 12, //over two min period
//             expansions: ["attachments.media_keys", 'author_id', "entities.mentions.username", "referenced_tweets.id", 'referenced_tweets.id.author_id'],
//             "tweet.fields": ['id', 'attachments', 'referenced_tweets', 'text', 'entities', 'in_reply_to_user_id',],
//             'media.fields': ['media_key', 'type', 'url'],
//             'user.fields': ['name', 'id'],
//         })

//         console.log('Returned ' + mentions.data.meta.result_count + ' mentions \n')
        
//         since_id.unshift(mentions.data.meta.newest_id)
//         console.log(`Latest = ${since_id[0]} \n`)
//         console.log(since_id)


//         //parsing results to JSON
//         fs.writeFile('data.json', JSON.stringify(mentions), 'utf-8', function (err) {
//             if (err) {
//                 console.log("An error occured while writing JSON Object to File.");
//                 return console.log(err);
//             }
//             console.log("JSON file has been saved.");
//         })

//         fs.writeFile('since_id.json', JSON.stringify(mentions.data.meta.newest_id), 'utf-8', function (err) {
//             if (err) {
//                 console.log("An error occured while writing JSON Object to File.");
//                 return console.log(err);
//             }
//             console.log("Since_ID file has been saved.");
//         })

//         try {
//             // let media_keys = mentions.data.data.map(datum => datum.attachments?.media_keys?.map(key => key))
//             let tweets = mentions.data.data,
//                 media = mentions.includes.media

//             //check if media exist on og tweet //checking whether or not user referencing their tweet or the parent
//             tweets.forEach(tweet => {
//                 if (!tweet.attachments?.media_keys) {

//                     //whether or not tweet is a (reply or quote) or a standalone tweet
//                     if (tweet.referenced_tweets && tweet.referenced_tweets.length == 1)

//                         bot.v2.reply(`Fetching Parent tweet`, tweet.id)
//                     //!!!fetch referenced tweet and subsequent validation
//                     // fetchParent(tweet.referenced_tweets[0].id, `Couldn't find any images on the referenced tweet.`)
//                     else if (!tweet.referenced_tweets)
//                         bot.v2.reply(`I need an image to work on. Can't find any on this tweet`, tweet.id)
//                     else
//                         bot.v2.reply(`You've referenced multiple tweets. I'm unable to handle that`, tweet.id)

//                 } else {
//                     //check if tweet media key matched includes.media media key, then get that corresponding url
//                     tweet.attachments?.media_keys?.forEach(key => {
//                         let reply: string[] = [],
//                             msg = ''
//                         media.forEach(medium => {

//                             if (key === medium.media_key) { //matching a media key with the apropriate media
//                                 if (medium.url && medium.type === 'photo') { // is it actually a photo

//                                     reply.push(`Downloading ${medium.type} to review`)
//                                     imageDownloader(medium.url, ('data/real/' + medium.media_key + '.jpg'))
//                                     //!!!Get image, review it and store response in an array corrsponding number of photos included in tweet
//                                 } else
//                                     reply.push(`This seems to be a ${medium.type}, not a photo`)
//                             }

//                         })
//                         reply.forEach(repl => { msg += '-: ' + repl + '. \n' })
//                         bot.v2.reply(msg, tweet.id)
//                     })
//                 }
//             })
//         } catch (error) {
//             console.log('error:', error)
//         }

//     } catch (error) {
//         console.log('error:', error?.data?.detail)
//     }

// }

// // let fetchParent = (reference_id: string, err: string) => {
// //     try {
// //         let parent = bot.v2.singleTweet(reference_id, {
// //             expansions: ["attachments.media_keys", 'author_id', "entities.mentions.username"],
// //             "tweet.fields": ['id', 'attachments', 'text', 'entities'],
// //             'media.fields': ['media_key', 'type', 'url'],
// //             'user.fields': ['name', 'id'],
// //         })

// //         console.log(parent, err)
// //     } catch (error) {
// //         console.log('error:', error?.data?.detail)
// //     }
// // }

// let imageDownloader = (url: string, filepath: string) => {

//     return new Promise((resolve, reject) => {
//         https.get(url, (res) => {
//             if (res.statusCode === 200) {
//                 res.pipe(fs.createWriteStream(filepath))
//                     .on('error', reject)
//                     .once('close', () => resolve(filepath))
//             } else {
//                 res.resume()
//                 reject(new Error(`Request failed with status code: ${res.statusCode}`))
//             }
//         })
//     })
// }

// //execute this shit
// runBot()

// //Get mentions
// //Extract attachment url
// //download attachement --
// //parse it through engine.ai --
// //reply to tweet
