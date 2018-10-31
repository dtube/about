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

Any video uploaded on D.Tube becomes a STEEM content, that can earn rewards for 7 days. D.Tube doesn't use either the title or the body of a content to store information, therefore if you don't want your video upload to appear in your feed, you can edit or delete it, the video would stay intact on D.Tube. While it would be possible to display nothing on other platforms like steemit.com or busy.org, I believe the current behavior to be fine and will help the platform growth and the users rewards.

<h3>Using [IPFS](https://ipfs.io/) as a static file storage</h3>

<center>![IPFS](img/logos/ipfs.png)</center>

IPFS is a protocol that enables decentralized file storage. The principle behind it is called Distributed Hash Tables (DHT). The same principle also powers the BitTorrent network. Just like how cryptocurrency uses asymmetrical cryptography, DHT networks will hash contents in order to be able to identify a file. The hash becomes the identifier of a file, and it's as easy as re-hashing a file and making sure the hashes match to ensure the file that was sent to us is the original.

Why not use Torrent then? Torrent arguably already has more content and is more mainstream. However, Torrent was not built for the web. Some implementations such as WebTorrent are trying to make it work, but it still requires some 'hybrid' clients that would act as bridges in order to transfer files from hard clients such as μTorrent to web clients that run in a browser. Not very convenient, even less efficient. I am sure a lot of you have used PopcornTime to watch some 'pirated' content and have enjoyed it, but building something similar that runs inside a browser without having to run hybrid clients to connect people, is sadly impossible.

IPFS is a younger, open-source, and actively developed protocol. It has a bright future ahead. Using it as the main mean of storage for this project was a no-brainer.`
            },
            {
                question: `Where does the money come from?`,
                answer: `The STEEM blockchain keeps printing new STEEM everyday. These new printed STEEM are given out as rewards.`
            },
            {
                question: `My private posting key is not working. What can I do?`,
                answer: `This shouldn't happen any more. However, if you are still facing this issue, try changing you browser to the latest version of Opera, Chrome, Firefox or Internet Explorer/Edge. If this doesn't help please contact us in the [#dtube channel](https://steemit.chat/channel/dtube) on [steemit.chat](https://steemit.chat)`
            },
            {
                question: `I keep getting "Failed to Fetch File" error. What can I do?`,
                answer: `"Failed to Fetch File" error is most likely a problem on our side. Changing the API in the settings to fix that error can help. If you are getting this problem please contact us in the [#dtube channel](https://steemit.chat/channel/dtube) on [steemit.chat](https://steemit.chat) or try again later.`
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
                question: `Why when I edit my video on SteemIt.com it doesn't change the text on D.Tube?`,
                answer: `You need to edit through D.Tube to edit your videos.`
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
            }
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
