let app = new Vue({
    el: '#app',
    data: {
        faq: [
            {
                question: `How do I use D.Tube?`,
                answer: `If you want to give likes, write comments or upload your own videos, you need a Dtube account.  In order to create an account go to [account creation page](https://signup.d.tube/) and follow the registration steps.

Once your account is open, you can login to D.Tube by entering the username and your **private key** and you can also login to your Hive or Steem account to benefit from interoperability features of Dtube. You can either login with Keychain or private key inorder to find your private key you can follow these steps.


<center>![Permissions](img/profile-permissions.png)</center>

<div class="alert alert-info"><b>Attention:</b> The key that is shown before you clicked on <b>SHOW PRIVATE KEY</b> (3) is just a placeholder.</div>

You can login with Dtube/Hive/Steem accounts and easily navigate between them.

<center>![](https://i.imgur.com/NLct3Ds.png)</center>`
            },
            {
                question: `How does D.Tube work?`,
                answer: `<h3>Using the Avalon Blockchain as a database</h3>



Because we want D.Tube to be truly decentralized, we cannot have a server running a database and use it to query things. Using Avalon blockchain is a natural solution. . It is fast . It is free, anyone can use it without having to deposit some form of currency, and transactions have no fees. Who would want to pay money to upload a video, comment a video, or even upvote? Nobody. 

Any video uploaded on D.Tube becomes an Avalon content, that can earn rewards also you can post your content to Steem and Hive blockchains and benefit from interoperable features of Dtube.

<h3>Using [IPFS](https://ipfs.io/) as a static file storage</h3>

<center>![IPFS](img/logos/ipfs.png)</center>

IPFS is a protocol that enables decentralized file storage. The principle behind it is called Distributed Hash Tables (DHT). The same principle also powers the BitTorrent network. Just like how cryptocurrency uses asymmetrical cryptography, DHT networks will hash contents in order to be able to identify a file. The hash becomes the identifier of a file, and it's as easy as re-hashing a file and making sure the hashes match to ensure the file that was sent to us is the original.

Why not use Torrent then? Torrent arguably already has more content and is more mainstream. However, Torrent was not built for the web. Some implementations such as WebTorrent are trying to make it work, but it still requires some 'hybrid' clients that would act as bridges in order to transfer files from hard clients such as μTorrent to web clients that run in a browser. Not very convenient, even less efficient. I am sure a lot of you have used PopcornTime to watch some 'pirated' content and have enjoyed it, but building something similar that runs inside a browser without having to run hybrid clients to connect people, is sadly impossible.

IPFS is a younger, open-source, and actively developed protocol. It has a bright future ahead. Using it as the main mean of storage for this project was a no-brainer.`
            



            },
            {
                question: `What is Dtube Coin(DTC)?`,
                answer: ` Currency of the blockchain, a utility token for videos.`,
            },
            {
                question: `What is Voting Power(VP)?`,
                answer: `Voting power is a power you generate from your staked up DTC to curate content and VP replenishes based on your DTC at rate of +1 VP / DTC / hour`
            },
            {
                question: `What is a vote?`,
                answer: `A vote is an expression of like (upvote) or dislike (downvote) for a post/comment. The Avalon blockchain uses the votes that a post/comment has received to determine its share of the rewards.`,
            },
            {
                question: `What is a Curator ?`,
                answer: `A Dtube user who upvotes a video by using their VP to assign value to a post that they believe has good quality content and should be seen and the content creator rewarded:.`
            },
            {
                question: `What is a Reward pool?`,
                answer: `Every day, a fixed amount of Dtube tokens are allocated to the network reward fund, commonly called the "reward pool." These get distributed to authors and curators for posting and voting on content.`
            },
            {
                question: `What is an Owner Key?`,
                answer: `The owner key is the master key for the account and is required to change or create lesser authority keys. Please do not lose it.`
            },
            {
                question: `How can I create lesser authority keys?`,
                answer: `You can always create lesser authority keys from Channel/Keys, keys are used to authenticate transactions.`
            },
            {
                question: `Can I change my account name?`,
                answer: `Sadly you can't change your blockchain account name , however in the following patches we may add display name feature.`
            },
            {
                question: `I posted a video on Steem/hive but can't see it on my Dtube Channel?`,
                answer: `In order to see videos in your channel you need to have a Dtube account. You can get a Dtube account by clicking [here](https://signup.d.tube/).`
            },
            {
                question: `I have lost my keys , What should I do?`,
                answer: `DTube Chain uses cryptographic keys as logins. While much more secure than a password, we can’t do anything to retrieve your keys if lost.However this may change in the future patchs However this might change in the future patches, check on your “download” folder or file directory to see if your keys there or not.`
            },
            {
   
                question: `Where does the Money come from?`,
                answer: `The Avalon blockchain keeps printing new DTC everyday. These new printed DTC are given out as rewards.`,
            },
            {
         
                question: `What is the maximum allowed file size for a video on Dtube?`,
                answer: `There is no maximum file size, however your browser might crash for huge files depending on your browser / os.`
            },
            {
                question: `When I try to upload my video, the website crashes and "Oops something gone Wrong" error occurs.`,
                answer: `If your video's size is too big, you may face some problem like this. Lowering the quality or length of your video helps to solve this problem.`
            },
            {
                question: `What is the maximum allowed file size for a video on Dtube?`,
                answer: `There is no maximum file size, however if you are using Dtube uploader for your videos there are some limitations on file size.`
            },
            {
                question: `Can I really use 1 tag on D.tube while posting?`,
                answer: `Yes,However if you can always edit your post from different frontends and add more tags.`
            },
            {
                question: `My video doesn't load at all. What do I need to do?`,
                answer: `There isn't much you can do. The IPFS Network is struggling.`
            },
            {
                question: `A video starts then stops after some seconds. What can I do?`,
                answer: `You are experiencing buffering issues. Either the source video is too large for your connection, or the IPFS network is struggling.`
    
            },
            {
                question: `How many videos can I post?`,
                answer: `There is no more limit to uploading videos.`
            },
            {
                question: `Can I publish NSFW content on D.Tube?`,
                answer: `Yes you can. However you need to make adjustments from your account about NSFW content. You also need to tag your content accordingly (#nsfw) otherwise it will be flagged by the community, reducing your rewards.`
            },
            {
                question: `Does DTube take beneficiary rewards?`,
                answer: `Yes, DTube takes 10% beneficiary rewards on all videos uploaded. These rewards go to the @dtube account and are used for gathering funds prior to the existence of our future token. This model has been changed twice already and might get tuned in the future again.`
         
            },
            {
                question: `I posted a video via Dtube but it doesn't show on Steem/Hive.`,
                answer: `You are either not logged on Steem/Hive or you didn't update your Dtube account with your Steem/Hive username , also logging in to accounts after clear your browser cache might work.`
            },
            {
                question: `How do videos get ranked now?`,
                answer: `Rewards are activated on all chains and videos are now ranked only by upvotes on the DTube Chain.`
            },
            {
                question: `I don’t want to post or vote on both Steem/Hive and Dtube Chain at the same time`,
                answer: `You can put Dtube or Steem/Hive account unhold by using Disable/Enable switch from accounts section .`
            },
            {
                question: `I want to vote with different % on Steem/Hive and DTube Chain?`,
                answer: `On the left menu, click on little arrow of the account (Steem/Hive or DTube) and choose independently the % of Voting tokens you wish to spend on posts and votes.`
            },
            {
               
                question: `What is the difference between Posting a URL and uploading via IPFS?`,
                answer: ` Both ways of publishing a video will activate the token reward mechanism. URL posting is for people who wants to active their AD revenue for the content they created elsewhere and IPFS is for content creators who would like their content from abusive censorship`
            },
            {
                question: `What platforms are supported for the “Post from URL” feature?`,
                answer: `Most current video platforms: Youtube, Twitch, Facebook, Instagram, Vimeo, Dailymotion.`
            },
            {
                question: `Will I still earn tokens?`,
                answer: `Of course, you can post, vote and earn  tokens as usual with DTube. Just check you are signed up to your Steem account on Steem.`
            },
            {
                question: `What will happen to DTC I earned during 0.9 Patch`,
                answer: `When testing is concluded all Tokens will be wiped and users who have acquired their DTube accounts will receive their allocation of airdropped tokens.`
            },
            {
                question: `What is a Leader?`,
                answer: `A Leader is a person who operates leader node ( which produces blocks) , and leader computers in Dtube network have a job that is to make "blocks" and add them to the blockchain and also to store the  complete blockchain data.`
            },
            {
                question: `How can I become a Leader?`,
                answer: ` By running an Avalon node, publishing the nodes connection details & receving enough leader votes to put you into the most highly voted users. You can see your position and the current leaders [here](https://d.tube/#!/election).`
            },
            {
                question: `Can I still earn DTC eventhough I'm not a Leader?`,
                answer: `Of course! Miners are not awarded tokens for their efforts, all tokens are distributed from the reward pool and are earned by users upvoting content.`
            },
            



 ],
        scrolled: false,
        remarkable: null
    },
    created: function () {
        $(window).on('scroll', () => {
            this.scrolled = window.scrollY > 100
        });
        this.remarkable = new Remarkable({html: true});
    },
    methods: {
        renderAnswer: function (answer) {
            return this.remarkable.render(answer);
        }
    }
});

$(function () {
    $(window).scroll();

    $("#nav").find("ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();

        // store hash
        let hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: Math.max($(hash).offset().top - 100, 0)
        }, 300);

    });

    if ($(window.location.hash).length) {
        // animate
        $('html, body').animate({
            scrollTop: Math.max($(window.location.hash).offset().top - 100, 0)
        }, 300);

        let reg = /^#faq[1-9]+$/;
        if (reg.test(window.location.hash)) {
            let index = parseInt(window.location.hash.replace('#faq', ''));
            $('#faqCollapse' + index).collapse('show');
        }
    }
});
