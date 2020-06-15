let app = new Vue({
    el: '#app',
    data: {
        faq: [
            {
                question: `How do I use D.Tube?`,
                answer: `If you want to give likes, write comments or upload your own videos, you need an account. D.Tube uses the [steem platform](https://steem.io) for user authentication. In order to create an account go to [https://steemit.com/pick_account](https://steemit.com/pick_account) and follow the registration steps.

Once your account is activated, you can login to D.Tube by entering the username you chose and your private **private posting key**. You can find this key in the permissions section in your profile page on steemit.com.
![Permissions](img/profile-permissions.png)

<div class="alert alert-info"><b>Attention:</b> The key that is shown before you clicked on <b>SHOW PRIVATE KEY</b> (3) is just a placeholder.</div>

You can also login to multiple accounts and easily switch between them.

<center>![Multi User Login](img/multi-user-login.png)</center>`
            },
            {
                question: `How does D.Tube work?`,
                answer: `<h3>Using the [STEEM](https://steem.io) Blockchain as a database</h3>

<center>![STEEM](img/logos/steem.png)</center>

Because we want D.Tube to be truly decentralized, we cannot have a server running a database and use it to query things. Using a blockchain is a natural solution. STEEM has many advantages over other blockchains. It is fast (3 sec blocks). It is free, anyone can use it without having to deposit some form of currency, and transactions have no fees. Who would want to pay money to upload a video, comment a video, or even upvote? Nobody. As an added bonus, the STEEM blockchain already has a reward-earning mechanism.

ny video uploaded on D.Tube becomes a STEEM content, that can earn rewards for 7 days. D.Tube doesn't use either the title or the body of a content to store information, therefore if you don't want your video upload to appear in your feed, you can edit or delete it, the video would stay intact on D.Tube. While it would be possible to display nothing on other platforms like steemit.com or busy.org, I believe the current behavior to be fine and will help the platform growth and the users rewards.

<h3>Using [IPFS](https://ipfs.io/) as a static file storage</h3>

<center>![IPFS](img/logos/ipfs.png)</center>

IPFS is a protocol that enables decentralized file storage. The principle behind it is called Distributed Hash Tables (DHT). The same principle also powers the BitTorrent network. Just like how cryptocurrency uses asymmetrical cryptography, DHT networks will hash contents in order to be able to identify a file. The hash becomes the identifier of a file, and it's as easy as re-hashing a file and making sure the hashes match to ensure the file that was sent to us is the original.

Why not use Torrent then? Torrent arguably already has more content and is more mainstream. However, Torrent was not built for the web. Some implementations such as WebTorrent are trying to make it work, but it still requires some 'hybrid' clients that would act as bridges in order to transfer files from hard clients such as μTorrent to web clients that run in a browser. Not very convenient, even less efficient. I am sure a lot of you have used PopcornTime to watch some 'pirated' content and have enjoyed it, but building something similar that runs inside a browser without having to run hybrid clients to connect people, is sadly impossible.

IPFS is a younger, open-source, and actively developed protocol. It has a bright future ahead. Using it as the main mean of storage for this project was a no-brainer.`
            },
            {
                question: `Where does the Money come from ?`,
                answer: `The Avalon blockchain keeps printing new DTC everyday. These new printed DTC are given out as rewards.`,
            },
            {
                question: `I don't see the claim button for claiming my Dtube account?`,
                answer: `Clear your web browser cache and log out your Steem account and refresh the page. Sign in again to your Steem account and the pop-up to claim your Dtube Account will appear. If you are still having trouble please contact us in the [#-help-channel](https://discord.gg/dtube) on Discord`
            },
            {
                question: `I have lost my keys?`,
                answer: `DTube Chain uses cryptographic keys as logins. While much more secure than a password, we can’t do anything to retrieve your keys if lost.However this may change in the future patchs
However this might change in the future patches, check on your “download” folder or file directory to see if your keys there or not.`,
            },
            {
                question: `I’ve created my Dtube account and all my videos disappeared.`,
                answer: `You just need to update your profile with your steem username:.`
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
                answer: `There is no maximum file size, however your browser might crash for huge files depending on your browser / os.`
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
                question: `I got $0.001 on my video but didn't receive any payments. What is the problem?`,
                answer: `The minumum possible reward is actually $0.02. If your video have less than that, then no payment will be triggered by the blockchain.`
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
                question: `I posted a video via Dtube but it doesn't show on Steem.`,
                answer: `You are either not logged on Steem or you didn't update your Dtube account with your Steem username , also logging in to accounts after clear your browser cache might work.`
            },
            {
                question: `How do videos get ranked now ?`,
                answer: `Rewards are activated on all chains and videos are now ranked only by upvotes on the DTube Chain.`
            },
            {
                question: `I don’t want to post or vote on both Steem and Dtube Chain at the same time`,
                answer: `You can put Dtube or Steem account unhold by clicking the images .`
            },
            {
                question: `I want to vote with different % on Steem and DTube Chain?`,
                answer: `On the left menu, click on little arrow of the account (Steem or DTube) and choose independently the % of Voting tokens you wish to spend on posts and votes.`
            },
            {
                question: `I don’t have enough "bandwidth`,
                answer: ` Just wait it reloads overtime if you own DTC.`
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
                question: `Will I still earn Steem tokens?`,
                answer: `Of course, you can post, vote and earn Steem tokens as usual with DTube. Just check you are signed up to your Steem account on Steem.`
            },
            {
                question: `Is DTube leaving Steem ?`,
                answer: `Not at all, DTube is just adding new blockchains to Steem on the interface: DTC but also Steem Engine tokens such as PAL or WEED.We have been working pretty hard to ensure both chains (DTube and Steem) interoperability.`
            },
            {
                question: `What is Scot tube?.`,
                answer: ` Scot Tubes are like DTube, however users vote with and earn with token the tube is for. For example, https://video.sportstalksocial.com/ uses the SPORTS token, https://tube.palnet.io/ uses PAL and so forth 
                You can learn more about Scottubes and how to set your own tube up [here](https://steemit.com/dtube/@heimindanger/steem-engine-tokens-dtube-scottube)
 .`
            },
            {
                question: `How can I empower my community with Scot tube ?`,
                answer: `By creating a tube around your interests you can more easily develop and grow a community around the interest and further.`
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
                question: `How can I become a Leader ?`,
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
