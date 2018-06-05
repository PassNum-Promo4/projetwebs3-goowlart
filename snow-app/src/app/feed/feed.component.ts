import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets = [
    {
      user: "laura",
      name: "Laura Faucet",
      body: "Você viu o que está acontecendo em Israel? Você acredita.",
      date: "3 dias atrás",
      avatar: "../assets/images/avatar/laura.jpg",
      images: ['../assets/images/post_photos/image.png',],
      likes: ['Ana', 'Alex', 'Marco']
    },
    {
      user: "Ana",
      name: "Ana Maria",
      body: "Anitta baby.",
      date: "3 dias atrás",
      avatar: "../assets/images/avatar/helen.jpg",
      likes: ['laura', 'stivie']
    },
  ];

  likeTweet = undefined;
  currentUser = 'stivie';

  constructor() { }

  ngOnInit() {
  }

  handleLikedTweetFromChildComponent(tweet) {
    var index = this.tweets.findIndex(currTweet => {
      return currTweet.user == tweet.user;
    })
    this.tweets[index].likes.push(this.currentUser);
    console.log(this.tweets[index].likes);
  }
}
