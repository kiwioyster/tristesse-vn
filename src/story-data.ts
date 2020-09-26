import { StoryData } from './app/models/story-data.model';
import { AppName } from './app/models/app-name.model';
const storyData: StoryData = {
  sequences: [
    {
      beats: [
        { intro: true, auto: 1300, debugScene: 'intro', bgm: { name: '' } },
        {
          intro: true,
          bgm: { name: 'anxiety', fadeTime: 0.6 },
          choice: [
            {
              text: 'Start',
            },
          ],
        },
        {
          intro: true,
          text: {
            speaker: 'Tutorial',
            body:
              'This is a short tutorial. Use ENTER or SPACE key to progress the story when you see this down arrow ▽',
          },
        },
        {
          intro: true,
          text: {
            speaker: 'Tutorial',
            body:
              'It is recommended to have your sound on and to use Chrome browser. ▽',
          },
        },
        {
          intro: true,
          phone: { on: true, time: 'now' },
          text: {
            speaker: 'Tutorial',
            body: 'When available, use your mouse to interact with devices. ▽',
          },
        },
        {
          intro: true,
          phone: { on: false, time: 'now' },
          text: {
            speaker: 'Tutorial',
            body:
              'This story contains mature themes and reference to mental illnesses. Discretion is advised. ▽',
          },
        },
        {
          text: {
            speaker: 'Tutorial',
            body:
              "That's the end of the tutorial. Press start game to begin. ▽",
          },
          choice: [
            {
              id: 'start',
              text: 'Start Game',
            },
          ],
          intro: true,
        },
        {},
      ],
    },
    {
      choicePath: 'start',
      beats: [
        {
          auto: 2400,
          bgm: { name: '', fadeTime: 2 },
          debugScene: '1-1',
        },
        // ================================================================================================
        // 1-1
        // ================================================================================================
        { text: { body: 'Ugh. . . ▽' } },
        {
          bg: { path: 'assets/Bedroom.png', effects: 'fade' },
          auto: 800,
        },
        {
          text: { body: 'What time is it? I must have slept in again. ▽' },
        },
        { phone: { on: true, locked: true, time: '11:24' }, auto: 1600 },
        {
          text: {
            body:
              "It's been tough recently and it's hard keeping track of the days. ▽",
          },
        },
        {
          phone: { on: false, locked: true, time: '11:24' },
          bgm: { name: 'betterdays' },
          auto: 800,
        },
        {
          sfx: { name: 'door-knock' },
          auto: 1600,
        },
        {
          fg: { path: 'assets/Tris-smile.png', effects: 'fade' },
          auto: 1300,
        },
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: {
            speaker: 'Girl',
            body: 'Morning! I thought I heard you waking up. ▽',
          },
        },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: {
            body: 'This is my girlfriend Tristesse. ▽',
          },
        },
        {
          text: {
            body: "We've been together for as long as I can remember. ▽",
          },
        },
        {
          text: {
            body:
              "We live together in this small place. She's always been a part of my life. ▽",
          },
        },
        {
          text: {
            body:
              "But recently I don't know how I feel about us anymore. . . ▽",
          },
        },
        {
          choice: [
            {
              text: 'Morning Tris.',
            },
            {
              text: '. . .',
            },
          ],
        },
        {
          text: { speaker: 'Tristesse ', body: 'Did you sleep well? ▽' },
        },
        {
          text: {
            body: "There's a lot on my mind. ▽",
          },
        },
        {
          text: {
            body: "I haven't been very happy with myself. ▽",
          },
        },
        {
          text: {
            body: `I feel stuck and alone. ▽`,
          },
        },
        {
          fg: { path: 'assets/Tris-neutral.png' },
          text: { speaker: 'Tristesse ', body: 'You feeling okay? ▽' },
        },
        {
          choice: [
            {
              text: `Just tired that's all.`,
            },
            {
              text: `. . .`,
            },
          ],
        },
        {
          text: {
            speaker: 'Tristesse ',
            body: 'You are still thinking about your old job huh? ▽',
          },
        },
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: {
            speaker: 'Tristesse ',
            body: "Hey don't worry about it! ▽",
          },
        },
        {
          text: {
            speaker: 'Tristesse ',
            body:
              'That was a dead end job anyway. Nothing of value was lost. ▽',
          },
        },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: { speaker: 'Tristesse ', body: 'Right? ▽' },
        },
        {
          choice: [
            {
              text: 'Maybe you are right.',
            },
          ],
        },
        {
          fg: { path: 'assets/Tris-smile-creepy.png' },
          text: {
            speaker: 'Tristesse ',
            body: 'Look on the bright side. More time for us. ▽',
          },
        },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: {
            speaker: 'Tristesse ',
            body: "Come on get outta bed. I'll order us some food. ▽",
          },
        },
        {
          fg: { path: '', effects: 'fade' },
          auto: 1300,
        },
        {
          text: {
            body: "She's always so cheerful. ▽",
          },
        },
        {
          text: {
            body: "I'm angry at myself. ▽",
          },
        },
        {
          text: {
            body:
              "I'm angry that I'm so helpless and that I keep crawling back to her. ▽",
          },
        },
        {
          text: {
            body: `But life is easier this way. ▽`,
          },
        },
        { auto: 1600, debugScene: '1-1b' },
        {
          phone: {
            on: true,
            openApp: AppName.Facehook,
            time: '13:06',
            apps: [
              {
                name: AppName.Facehook,
                socialPosts: [
                  {
                    poster: 'Will',
                    posterImg: 'dp4',
                    bodyImg: 'beach',
                    likes: 15,
                    comments: 2,
                  },
                  {
                    poster: 'Mick',
                    posterImg: 'dp1',
                    bodyImg: '',
                    likes: 6,
                    comments: 11,
                  },
                  {
                    poster: 'Joe',
                    posterImg: 'dp3',
                    bodyImg: 'two-outdoor',
                    likes: 29,
                    comments: 9,
                  },
                  {
                    poster: 'Ashleigh',
                    posterImg: 'dp2',
                    bodyImg: 'large-group',
                    likes: 7,
                    comments: 0,
                  },
                ],
              },
            ],
          },
          auto: 1600,
        },
        { text: { body: 'These are my old friends from highschool. ▽' } },
        { text: { body: 'They all look so happy. ▽' } },
        {
          text: {
            body: "I don't know why. I just drifted away from everyone. ▽",
          },
        },
        {
          text: {
            body: `Their lives seem to get better and better. While I'm stuck here by myself. . . ▽`,
          },
        },
        {
          phone: {
            on: false,
          },
          auto: 1300,
        },
        { text: { body: 'I wanna talk with them. ▽' } },
        {
          text: { body: "But I'm afraid they'll think I'm a loser. . . ▽" },
        },

        { bg: { path: '', effects: 'fade' }, auto: 1600 },
        // ================================================================================================
        // 1-2
        // ================================================================================================
        {
          bg: { path: 'assets/PCroom.png', effects: 'fade' },
          auto: 1600,
          debugScene: '1-2',
        },

        { sfx: { name: 'text-notification' }, auto: 800 },
        {
          phone: {
            on: true,
            locked: true,
            time: '11:24',
            notification: {
              type: 'email',
              alert: '6 New emails',
              title: 'Your job application status',
              body:
                'Thank you for taking the time to apply. Unfortunately . . .',
              when: 'Just now',
            },
          },
          auto: 2400,
        },
        {
          text: {
            body: `I lost my job a month back and it's been impossible for me to find another. ▽`,
          },
        },
        {
          text: {
            body: `My email is always filled with rejected applications. ▽`,
          },
        },
        {
          phone: {
            on: false,
          },
          auto: 800,
        },
        {
          pc: {
            on: true,
            time: '13:05',
            effects: 'fade',
            openApp: AppName.Tmail,
            apps: [
              {
                name: AppName.Tmail,
                emails: [
                  {
                    title: 'Your job application status',
                    sender: 'Pro Recruitment',
                    body:
                      'Thank you for taking the time to apply. Unfortunately you did not meet the criteria.',
                    unread: true,
                  },
                  {
                    title: 'Dear Job Applicant',
                    sender: 'CBF Recruitment',
                    body: `Thank you for the application. Unfortunately we had too many applications and didn't read yours.`,
                    unread: true,
                  },
                  {
                    title: 'Automated Response',
                    sender: 'Telon Tusk',
                    body: `This email is to acknowledge that we've received your application. Thank you. Goodbye.`,
                    unread: true,
                  },
                  {
                    title: 'Your Real News Outlet',
                    sender: 'BBK News',
                    body:
                      'Tired of fake news? Subscribe to BBK today and get elite journalism delivered to your mail box.',
                    unread: true,
                  },
                  {
                    title: 'Thank you',
                    sender: 'Malwart',
                    body:
                      'Dear sir. Thank you for your application. Unfortunately we need someone with 14+ years of experience.',
                    unread: true,
                  },
                  {
                    title: `Try Nanosoft's Mixxer Platform Today!`,
                    sender: 'Nanosoft Gill Bates',
                    body:
                      'Hello sir, have you heard of the new streaming platform Mixxer? Try it today!',
                    unread: true,
                  },
                ],
              },
            ],
          },
          auto: 3200,
        },
        { text: { body: `Sigh. . . ▽` } },
        { auto: 1600 },
        { text: { body: `I guess I should apply for some more. ▽` } },
        {
          pc: {
            on: true,
            openApp: AppName.JobFinda,
            apps: [
              {
                name: AppName.JobFinda,
                jobs: [
                  {
                    title: 'Entry Position Available',
                    company: 'TT Recruiters',
                    body:
                      'Looking for someone with passion and a can do attitude. If this is you, apply now! Minimum 3 years experience.',
                    applied: false,
                  },
                  {
                    title: 'Motivated Individual Wanted',
                    company: 'Nanosoft',
                    body:
                      'Looking for a motivated individual with passion for quality work. Competitive compensation. Minimum 12 years experience.',
                    applied: false,
                  },
                  {
                    title: 'We Want You',
                    company: 'Malwart',
                    body:
                      'Are you someone who provide exceptional customer service with a great attitude? Then click apply now!',
                    applied: false,
                  },
                  {
                    title: 'Leader Position Available',
                    company: 'Pro Recruitment',
                    body:
                      'Are you able to lie through your teeth? Are you a pro at shifting the blame? Then we want you! Apply now!',
                    applied: false,
                  },
                  {
                    title: 'Junior Position Available',
                    company: 'Plow Inc',
                    body: `Looking for anyone new to the job market with attention to detail. Don't bother applying unless you have 2+ years of experience.`,
                    applied: false,
                  },
                ],
              },
            ],
          },
          auto: 3200,
        },
        {
          text: {
            body:
              "What's the point. Most won't even reply. Those that do are gonna reject me anyway. . . ▽",
          },
        },
        {
          pc: {
            on: false,
            effects: 'fade',
          },
          auto: 1300,
        },

        { sfx: { name: 'text-notification' }, auto: 800, debugScene: '1-2b' },
        {
          messenger: {
            time: '13:12',
            on: true,
            msg: [
              {
                online: true,
                body: 'Hey, heard you lost your job. You job hunting now?',
                sender: 'them',
                newLine: true,
              },
            ],
            typing: true,
          },
          auto: 2400,
        },
        {
          messenger: {
            on: true,
            msg: [{ online: true, body: "How's it going?", sender: 'them' }],
          },
          auto: 800,
        },
        { text: { body: 'Will is a good friend from highschool. ▽' } },
        {
          text: {
            body: "He's the only person that still occasionally talks to me. ▽",
          },
        },

        {
          choice: [
            {
              text: 'Not good.',
            },
            {
              text: 'Only rejection emails so far.',
            },
          ],
        },
        { auto: 1600 },
        {
          messenger: {
            on: true,
            msg: [],
            typing: true,
          },
          auto: 1600,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body: 'Haha yeah, you lack experience',
                sender: 'them',
              },
            ],
            typing: true,
          },
          auto: 2400,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body: 'You must be free all the time now, lucky!',
                sender: 'them',
              },
            ],
            typing: true,
          },
          auto: 2400,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body:
                  "Let's catch up this weekend. Finally got some free time from work",
                sender: 'them',
              },
            ],
          },
          auto: 800,
        },
        {
          messenger: {
            on: true,
            msg: [],
            typing: true,
          },
          auto: 1300,
        },
        {
          messenger: {
            on: true,
            msg: [],
            typing: false,
          },
          auto: 1300,
        },
        {
          messenger: {
            on: true,
            msg: [],
            typing: true,
          },
          auto: 1600,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body: "Haven't seen you since the funeral",
                sender: 'them',
              },
            ],
          },
          auto: 1600,
        },
        {
          text: {
            body:
              "Will was voted most likely to succeed in highschool. He's definitely living up to that expectation. ▽",
          },
        },
        {
          text: {
            body: "He's smart, good with people and has so many friends. ▽",
          },
        },
        {
          text: {
            body: "I've always envied him. ▽",
          },
        },
        {
          choice: [
            {
              text: 'Um, sure',
            },
            {
              text: 'Maybe, what time?',
            },
          ],
        },
        { auto: 1300 },

        {
          messenger: {
            on: true,
            msg: [],
            typing: true,
          },
          auto: 2400,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body:
                  "How about Saturday at 6? There's this restaurant I wanna try.",
                sender: 'them',
              },
            ],
            typing: true,
          },
          auto: 1600,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body:
                  'I might invite a few old friends from highschool, cool with that?',
                sender: 'them',
              },
            ],
          },
          auto: 1600,
        },
        {
          text: {
            body: "Ugh. I don't know how to act if lots of people show up. ▽",
          },
        },
        {
          choice: [
            {
              text: 'Okay',
            },
          ],
        },
        { auto: 800 },
        {
          messenger: {
            on: true,
            msg: [],
            typing: true,
          },
          auto: 1600,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body: "Don't worry about it. Can't wait to see you!",
                sender: 'them',
              },
            ],
          },
          auto: 800,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body: 'Gotta go now',
                sender: 'them',
              },
            ],
          },
          auto: 1600,
        },
        {
          text: {
            body: `Maybe I should spend more time with Will. It could help me find my confidence again. ▽`,
          },
          debugScene: '1-2c',
        },
        {
          messenger: {
            on: false,
            msg: [],
          },
          auto: 800,
        },
        {
          text: {
            body: 'But that would mean spending less time with Tris. ▽',
          },
        },
        {
          text: {
            body: `And she's not gonna be happy. . . ▽`,
          },
        },
        {
          auto: 1600,
        },
        {
          fg: { path: 'assets/Tris-smile.png', effects: 'fade' },
          auto: 1300,
        },
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: {
            speaker: 'Tristesse',
            body: 'Hey! Whatcha doing? ▽',
          },
        },
        {
          choice: [
            {
              id: 'restart',
              text: 'Just applying for jobs.',
            },
            {
              id: 'restart',
              text: 'Nothing much.',
            },
          ],
        },
        {},
      ],
    },
    // ================================================================================================
    // Choice path Restart
    // ================================================================================================
    {
      choicePath: 'restart',
      beats: [
        {
          bg: { path: 'assets/PCroom.png' },
          fg: { path: 'assets/Tris-neutral.png' },
          bgm: { name: 'betterdays' },
          text: {
            speaker: 'Tristesse',
            body: 'You sound upset. Is something wrong? ▽',
          },
          debugScene: '1-2R',
        },
        {
          choice: [
            {
              text: 'I was talking to Will. . .',
            },
          ],
        },
        {
          fg: { path: 'assets/Tris-gasp.png' },
          text: {
            body: "Tris doesn't like Will very much. ▽",
          },
        },
        {
          fg: { path: 'assets/Tris-neutral.png' },
          text: {
            body: "She thinks he's cocky and looks down on everyone. ▽",
          },
        },
        {
          text: {
            body:
              "But he has a reason to be. He's successful. That's why he has so many friends and lives a happy life. Unlike me. ▽",
          },
        },
        {
          choice: [
            {
              text: "If I was successful like Will I'd be happier",
            },
          ],
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `Are you sure that's what you want? ▽`,
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'Or is it some expectations you are trying to live up to? ▽',
          },
        },
        {
          choice: [
            {
              variable: 'bad-var',
              text: 'Maybe you are right. . .',
            },
            {
              text: 'What do you mean?',
            },
          ],
        },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: {
            speaker: 'Tristesse',
            body:
              'You need to be honest to yourself if you want to be happy. ▽',
          },
        },
        {
          text: {
            body: 'Be honest to myself. . . ? ▽',
          },
        },
        {
          text: {
            body:
              'Ever since I was a little my mother would set high expectations for me. ▽',
          },
        },
        {
          text: {
            body:
              'She worked a lot of jobs to make ends meet. So she was obsessed with pushing me to be successful. ▽',
          },
        },
        {
          text: {
            body: 'After she passed away maybe I took on her obsession. . . ▽',
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: "You don't need to prove anything to anyone. ▽",
          },
        },
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: {
            speaker: 'Tristesse',
            body: "I'll be here to cheer you up. ▽",
          },
        },
        { auto: 400 },
        { fg: { path: 'assets/Tris-smile.png' }, auto: 1300 },
        {
          fg: { path: 'assets/Tris-neutral.png' },
          text: {
            speaker: 'Tristesse',
            body: 'Oh my god. I just remembered! ▽',
          },
        },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: {
            speaker: 'Tristesse',
            body: 'Do you know what day it is today? ▽',
          },
        },
        {
          choice: [
            {
              text: 'Monday?',
            },
            {
              text: 'Um. . . Tuesday?',
            },
          ],
        },
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: {
            speaker: 'Tristesse',
            body: "No idiot! It's your birthday! ▽",
          },
        },
        {
          text: {
            body: 'Right. . .  ▽',
          },
        },
        {
          text: {
            body:
              "I completely forgot. Without anyone to celebrate it with I don't keep track of it anymore.  ▽",
          },
        },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: {
            speaker: 'Tristesse',
            body: 'You know what? How about I make you lunch today haha! ▽',
          },
        },
        {
          choice: [
            {
              text: 'Oh no. You are going to cook?',
            },
          ],
        },
        { auto: 400 },
        {
          fg: { path: 'assets/Tris-challenge.png' },
          text: {
            speaker: 'Tristesse',
            body: 'Oh screw you! ▽',
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: "I'll make you eat those words! ▽",
          },
        },
        { auto: 800 },
        {
          bg: { path: '', effects: 'fade' },
          fg: { path: '', effects: 'fade' },
          auto: 1600,
        },
        {
          text: {
            body: "When ever I feel lonely. She's always by my side. ▽",
          },
        },
        {
          text: {
            body:
              "I don't want it to be this way. But she's just too alluring. ▽",
          },
        },
        {
          text: {
            body: "Maybe because she's the last source of joy in my life. ▽",
          },
        },
        {
          text: {
            body:
              'And the closest thing to a friend or family I have left. . . ▽',
          },
        },
        { auto: 3200 },
        {
          text: {
            body: `I didn't do much this week. I feel a weight lifted off my shoulder. ▽`,
          },
        },
        { auto: 1600 },
        // ================================================================================================
        // 2-1
        // ================================================================================================
        {
          bg: { path: 'assets/Bedroom-night.png', effects: 'fade' },
          auto: 1300,
          debugScene: '2-1',
        },
        { auto: 1300 },
        {
          fg: { path: 'assets/Tris-smile.png', effects: 'fade' },
          auto: 800,
        },
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: {
            speaker: 'Tristesse',
            body: `Hey. ▽`,
          },
        },
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: {
            speaker: 'Tristesse',
            body: `You wanted to spend more time with me right? What do you wanna do today? ▽`,
          },
        },
        {
          bg: { path: '', effects: 'fade' },
          fg: { path: '', effects: 'fade' },
          auto: 2400,
        },
        {
          text: {
            body: `I've given in to her. ▽`,
          },
        },
        { auto: 800 },
        {
          text: {
            body: `If I let go I can try and enjoy myself and forget about tomorrow. ▽`,
          },
        },
        { auto: 1600 },
        {
          bg: { path: 'assets/PCroom-night.png', effects: 'fade' },
          auto: 1300,
        },
        {
          text: {
            body: `I feel like I've forgotten something. . . ▽`,
          },
        },
        {
          ifVariable: 'bad-var',
          text: {
            body: `It must not have been important. ▽`,
          },
        },
        { auto: 1300 },
        {
          fg: { path: 'assets/Tris-smile.png', effects: 'fade' },
          text: {
            speaker: 'Tristesse',
            body:
              "You know. Even though we've known each other for years. I still feel like we are getting closer every day. ▽",
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'Some days I feel like we are all we need in this world. ▽',
          },
        },
        {
          ifVariable: 'bad-var',
          choice: [
            {
              id: 'bad',
              text: `You are all I need Tris`,
            },
          ],
        },
        {
          choice: [
            {
              id: 'bad',
              text: `You are all I need Tris`,
            },
            {
              text: `Am I forgetting something?`,
            },
          ],
          debugScene: '2-1b',
        },
        {
          fg: { path: 'assets/Tris-neutral.png' },
          text: {
            speaker: 'Tristesse',
            body: 'What do you mean? ▽',
          },
        },
        {
          choice: [
            {
              text: 'Wait. What day is it today?',
            },
          ],
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'Um. Saturday. ▽',
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'Why? ▽',
          },
        },
        {
          choice: [
            {
              text: 'Shit! I promised to meet Will at 6.',
            },
          ],
        },
        { auto: 400 },
        {
          text: {
            speaker: 'Tristesse',
            body: "It's 7 now. ▽",
          },
        },
        { text: { body: "Oh no I'm late! ▽" } },
        {
          fg: { path: 'assets/Tris-crossed.png' },
          text: {
            speaker: 'Tristesse',
            body: 'Wait. ▽',
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: "Don't tell me you are ditching me to meet up with Will. ▽",
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'Right after I told you how much you mean to me? ▽',
          },
        },
        {
          fg: { path: 'assets/Tris-crossed-angry.png' },
          text: {
            speaker: 'Tristesse',
            body: 'You are always like this. ▽',
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'You only think about yourself. ▽',
          },
        },
        {
          choice: [
            {
              text: "I wasn't planning on going!",
            },
            {
              text: `I'm sorry!`,
            },
          ],
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'Whatever. ▽',
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'You do what you want. ▽',
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: "I'm outta here. ▽",
          },
        },
        { fg: { path: '', effects: 'fade' }, auto: 1600 },
        {
          text: {
            body: 'She can be so hot-headed sometimes. . . ▽',
          },
        },
        {
          text: {
            body: 'Sigh. . . Am I a good person? ▽',
          },
        },
        {
          text: {
            body: 'All I do is take. ▽',
          },
        },
        {
          text: {
            body: 'I never appreciate the things she does for me. ▽',
          },
        },
        { auto: 1300 },
        {
          text: {
            body: 'Maybe I should go and apologize. . . ▽',
          },
        },
        { auto: 1300 },
        { bg: { path: '', effects: 'fade' }, auto: 3200 },
        {
          sfx: { name: 'text-notification' },
          auto: 2400,
        },
        {
          bg: { path: 'assets/Bedroom.png', effects: 'fade' },
          text: {
            body: 'Who is that so early in the morning. ▽',
          },
          debugScene: '2-1c',
        },
        {
          messenger: {
            time: '08:56',
            on: true,
            msg: [
              {
                online: true,
                body: 'What the hell!?',
                sender: 'them',
                newLine: true,
              },
            ],
            typing: true,
          },
          auto: 1300,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body: "You didn't show yesterday.",
                sender: 'them',
              },
            ],
            typing: true,
          },
          auto: 1600,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body: 'I got a bunch of us together for your birthday.',
                sender: 'them',
              },
            ],
            typing: true,
          },
          auto: 2400,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body:
                  'You know how much effort it took me? We even got you a gift!',
                sender: 'them',
              },
            ],
            typing: true,
          },
          auto: 1300,
        },
        {
          text: {
            body: '. . . ▽',
          },
        },
        {
          messenger: {
            on: false,
            msg: [],
            typing: false,
          },
          auto: 800,
        },
        {
          text: {
            body: 'I let everyone down. . . ▽',
          },
        },
        { auto: 1600 },
        {
          text: {
            body: 'Will must hate me now. ▽',
          },
        },
        { bgm: { name: '', fadeTime: 4 }, auto: 800 },
        {
          bg: { path: '', effects: 'fade' },
          auto: 2400,
        },
        {
          text: {
            body: 'But I have Tris. ▽',
          },
        },
        {
          text: {
            body: 'None of this matters. ▽',
          },
        },
        { auto: 800 },
        {
          text: {
            body: `I should just let go and give in to her. ▽`,
          },
        },
        // ================================================================================================
        // 2-2
        // ================================================================================================
        { auto: 2400, debugScene: '2-2' },
        { bgm: { name: 'anxiety', fadeTime: 1 }, auto: 2400 },
        {
          text: {
            body: `I already have all I need. ▽`,
          },
        },
        { auto: 800 },
        { sfx: { name: 'call-vibe', volume: 0.2 }, auto: 7600 },
        {
          bg: { path: 'assets/Bedroom-night.png', effects: 'fade' },
          fg: { path: 'assets/Tris-smile-creepy.png', effects: 'fade' },
          auto: 1600,
        },
        {
          text: {
            body: '. . . ? ▽',
          },
        },
        {
          choice: [
            {
              text: 'Were you watching me sleep?',
            },
          ],
        },
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: {
            speaker: 'Tristesse',
            body: 'No. ▽',
          },
        },
        {
          fg: { path: 'assets/Tris-smile-creepy.png' },
          text: {
            speaker: 'Tristesse',
            body: 'What do you wanna do today? ▽',
          },
        },
        {
          text: {
            body: "Hmm let's see. ▽",
          },
        },
        {
          fg: { path: '', effects: 'fade' },
          bg: { path: '', effects: 'fade' },
          auto: 1300,
        },
        {
          bg: { path: 'assets/PCroom-night.png', effects: 'fade' },
          auto: 400,
        },
        {
          text: {
            body: 'This is freedom. ▽',
          },
        },
        {
          text: {
            body: 'I can do the things I want now. ▽',
          },
        },
        {
          text: {
            body: `I don't need to worry about anything or anyone. . . ▽`,
          },
        },

        { auto: 1600 },
        { bg: { path: '', effects: 'fade' }, auto: 2400 },

        {
          text: {
            body: `I'm happier now. ▽`,
          },
        },
        { auto: 2400 },
        { sfx: { name: 'call-vibe', volume: 0.2 }, auto: 7600 },
        {
          bg: { path: 'assets/Bedroom-night.png', effects: 'fade' },
          fg: { path: 'assets/Tris-smile-creepy.png', effects: 'fade' },
          auto: 1600,
        },
        {
          text: {
            body: '. . . ? ▽',
          },
        },
        {
          choice: [
            {
              text: 'Were you watching me sleep?',
            },
          ],
        },
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: {
            speaker: 'Tristesse',
            body: 'No. ▽',
          },
        },
        {
          fg: { path: 'assets/Tris-smile-creepy.png' },
          text: {
            speaker: 'Tristesse',
            body: 'What do you wanna do today? ▽',
          },
        },
        {
          text: {
            body: "Hmm let's see. ▽",
          },
        },
        {
          fg: { path: '', effects: 'fade' },
          bg: { path: '', effects: 'fade' },
          auto: 2400,
        },

        {
          text: {
            body: `I can rest easy now. ▽`,
          },
          debugScene: '2-2b',
        },
        { auto: 2400 },
        { sfx: { name: 'call-vibe', volume: 0.4 }, auto: 7400 },
        {
          text: {
            body: 'Huh. . . ? ▽',
          },
        },
        {
          bg: { path: 'assets/Bedroom-night.png', effects: 'fade' },
          fg: { path: 'assets/Tris-smile-creepy.png', effects: 'fade' },
          auto: 1300,
        },
        {
          choice: [
            {
              text: 'Did you hear something?',
            },
          ],
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'No. ▽',
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'What do you wanna do today? ▽',
          },
        },
        {
          text: {
            body: `Umm. . . I don't know. ▽`,
          },
        },
        {
          fg: { path: 'assets/Tris-neutral.png' },
          text: {
            speaker: 'Tristesse',
            body: 'Huh? You feeling okay? ▽',
          },
        },
        {
          choice: [
            {
              text: 'Yeah. Never been better.',
            },
          ],
        },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: {
            speaker: 'Tristesse',
            body: "That's good. ▽",
          },
        },
        {
          fg: { path: '', effects: 'fade' },
          bg: { path: '', effects: 'fade' },
          auto: 2400,
        },
        // ================================================================================================
        // 2-3
        // ================================================================================================

        {
          text: {
            speaker: 'Tristesse',
            body: 'Hey! Did you fall asleep in front of your computer again? ▽',
          },
          debugScene: '2-3',
        },
        { auto: 1600 },
        {
          bg: { path: 'assets/PCroom-night.png', effects: 'fade' },
          fg: { path: 'assets/Tris-neutral.png', effects: 'fade' },
          auto: 1300,
        },

        { choice: [{ text: '. . . What time is it?' }] },
        { auto: 800 },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: {
            speaker: 'Tristesse',
            body:
              "It's dinner time. I've got takeaways in the kitchen. Let's go. ▽",
          },
        },
        {
          bgm: { name: '', fadeTime: 3 },
          fg: { path: '', effects: 'fade' },
          auto: 1300,
        },
        {
          text: { body: "I'm not that hungry. . . ▽" },
        },
        { auto: 800 },
        {
          text: { body: 'The past few days have been a blur. ▽' },
        },
        {
          text: { body: 'Is this really how I wanna live? ▽' },
        },
        { auto: 800 },
        { sfx: { name: 'text-notification' }, auto: 1300 },
        {
          phone: {
            on: true,
            locked: true,
            time: '21:30',
            notification: {
              type: 'missed-call',
              alert: '8 Missed calls',
              title: 'Missed call from Will',
              when: '3 Hours ago',
            },
          },
          auto: 1600,
        },
        {
          text: { body: 'Why does Will keep calling me? ▽' },
        },
        {
          text: { body: 'I wonder what he thinks of me. ▽' },
        },
        {
          bgm: { name: 'main' },
          text: {
            body:
              'Am I that weird guy with no friends who needs to be pitied? ▽',
          },
        },
        {
          text: {
            body: "I'm lost and confused. ▽",
          },
          phone: {
            on: false,
            locked: true,
            time: '21:30',
            notification: {
              type: 'missed-call',
              alert: '8 Missed calls',
              title: 'Will',
              when: '3 Hours ago',
            },
          },
        },
        {
          text: {
            body:
              "I thought if I ignored him he'd go away and I'd finally be able to be happy. ▽",
          },
          bg: { path: '', effects: 'fade' },
        },
        { auto: 2400 },
        { sfx: { name: 'call-vibe', volume: 0.6 }, auto: 5600 },
        { bg: { path: 'assets/PCroom.png', effects: 'fade' }, auto: 1300 },
        {
          phone: {
            on: true,
            locked: true,
            time: '10:46',
            inCall: true,
          },
          auto: 1300,
        },
        {
          text: {
            speaker: 'Will',
            body: 'Hey you finally picked up. ▽',
          },
        },
        {
          text: {
            body: 'Wow. . . ▽',
          },
        },
        {
          text: {
            body: "It's oddly soothing to hear a real voice for once. ▽",
          },
        },
        {
          text: {
            speaker: 'Will',
            body: "You haven't responded to my calls in months! ▽",
          },
        },
        {
          text: {
            body: 'Has it really been that long? ▽',
          },
        },
        {
          text: {
            speaker: 'Will',
            body: `It must have been hard for you recently. ▽`,
          },
        },
        {
          text: {
            speaker: 'Will',
            body: `Let's forget about what happened before. I want to check that you are still doing okay since you live by yourself. ▽`,
          },
        },
        {
          choice: [
            {
              text: "I'm fine. . .",
            },
            {
              text: 'Why do you care?',
            },
          ],
        },
        {
          text: {
            speaker: 'Will',
            body:
              "It's cool if you are mad at me. That's not the reason I called. ▽",
          },
        },
        {
          text: {
            speaker: 'Will',
            body:
              'We have a new job opening coming up and I wanted to know if you are interested. ▽',
          },
        },
        {
          text: {
            body: '. . . ▽',
          },
        },
        {
          choice: [
            {
              text: "I don't need this. . . Leave me alone",
            },
          ],
        },
        {
          text: {
            speaker: 'Will',
            body: `I know it's tough in the current environment. . . ▽`,
          },
        },
        {
          text: {
            speaker: 'Will',
            body: 'But I can guarantee you an interview with our boss. ▽',
          },
        },
        {
          text: {
            body: 'I wanted to ignore Will. ▽',
          },
        },
        {
          text: {
            body: "But I can't bring myself to hang up the call. ▽",
          },
        },
        {
          text: {
            body: 'His voice felt so real and reassuring. . . ▽',
          },
        },
        {
          choice: [
            {
              text: 'What kind of job?',
            },
          ],
        },
        {
          text: {
            speaker: 'Will',
            body: 'Nothing fancy. But you know how it is. ▽',
          },
        },
        {
          text: {
            speaker: 'Will',
            body: "Beggars can't be choosers and what not. ▽",
          },
        },
        {
          text: {
            speaker: 'Will',
            body:
              "Trust me. I wouldn't tell you about this if I didn't think that you had a good chance of getting it. ▽",
          },
        },
        {
          text: {
            body:
              "Maybe it doesn't hurt to try. And it will stop him from bugging me. ▽",
          },
        },
        {
          choice: [
            {
              text: 'Fine. Count me in.',
            },
            {
              text: 'Okay. Only if you stop calling me.',
            },
          ],
        },
        {
          text: {
            speaker: 'Will',
            body: "Sweet! I'll send you the details later. ▽",
          },
        },
        { auto: 800 },
        {
          phone: {
            on: false,
            locked: true,
            inCall: true,
          },
          auto: 800,
        },
        {
          bg: { path: '', effects: 'fade' },
          auto: 1600,
        },
        {
          text: {
            body: 'Sigh. . . Why did I agree to that. ▽',
          },
        },
        { auto: 2400 },
        // ================================================================================================
        // 2-4
        // ================================================================================================
        {
          text: {
            speaker: 'Tristesse',
            body: 'Hey! Were you on the phone with Will yesterday? ▽',
          },
          debugScene: '2-4',
        },
        { auto: 1600 },
        {
          bg: { path: 'assets/PCroom.png', effects: 'fade' },
          fg: { path: 'assets/Tris-crossed-surprised.png', effects: 'fade' },
          auto: 1300,
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'He should really mind his own business. ▽',
          },
        },
        {
          choice: [
            {
              text: 'He called me about a job opening',
            },
          ],
        },
        { auto: 800 },
        {
          fg: { path: 'assets/Tris-gasp.png' },
          text: {
            speaker: 'Tristesse',
            body: 'What? ▽',
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: "Don't tell me you are actually going to apply? ▽",
          },
        },
        {
          choice: [
            {
              text: 'He said he could get me an interview. So I accepted.',
            },
          ],
        },
        { auto: 800 },
        {
          fg: { path: 'assets/Tris-neutral.png' },
          text: {
            speaker: 'Tristesse',
            body: "What's gotten into you? ▽",
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body:
              "I thought you were happy? You don't wanna spend time with me anymore? ▽",
          },
        },
        {
          choice: [
            {
              text: "No it's not that",
            },
            {
              text: 'I really need this',
            },
          ],
        },
        { auto: 800 },
        {
          fg: { path: 'assets/Tris-crossed.png' },
          text: {
            speaker: 'Tristesse',
            body:
              "Just because Will got you an interview doesn't mean you will get the job you know. ▽",
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: 'Remember all the rejection emails you got? ▽',
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body:
              "You couldn't even get past the first hurdle. And you think they'd accept someone like you? ▽",
          },
        },
        {
          text: {
            body: '. . . ▽',
          },
        },
        {
          text: {
            body: 'She has a good point. ▽',
          },
        },
        {
          text: {
            body: 'All those jobs must have rejected me for a reason. ▽',
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body:
              'All you are gonna do is embarrass yourself and embarrass Will. ▽',
          },
        },
        {
          text: {
            body: 'I should play it safe and tell Will to call it off. ▽',
          },
        },
        {
          choice: [
            {
              text: 'You are right. I will cancel it.',
            },
          ],
        },
        { auto: 800 },
        {
          text: {
            speaker: 'Tristesse',
            body: 'Yeah you do that. ▽',
          },
        },
        {
          fg: { path: '', effects: 'fade' },
          auto: 2400,
          debugScene: '2-4b',
        },
        {
          messenger: {
            time: '09:52',
            on: true,
            msg: [],
          },
          auto: 1300,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: false,
                body:
                  "Could you cancel the interview? I'm having second thoughts.",
                sender: 'you',
              },
            ],
          },
          auto: 2400,
        },

        {
          messenger: {
            on: true,
            msg: [],
            typing: true,
          },
          auto: 2400,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body: 'WTF man?',
                sender: 'them',
              },
            ],
          },
          auto: 800,
        },
        {
          messenger: {
            on: true,
            msg: [],
            typing: true,
          },
          auto: 1600,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body: 'Why you keep doing this to me?!',
                sender: 'them',
              },
            ],
            typing: true,
          },
          auto: 1600,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body:
                  "I already booked time with my boss. You can't just change your mind like that.",
                sender: 'them',
              },
            ],
            typing: true,
          },
          auto: 1300,
        },
        { auto: 1300 },
        {
          messenger: {
            on: true,
            msg: [],
            typing: true,
          },
          auto: 1300,
        },
        {
          text: {
            body: "Looks like this won't be easy. . . ▽",
          },
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body: "I ain't cancelling. The boss will be pissed",
                sender: 'them',
              },
            ],
            typing: true,
          },
          auto: 800,
        },
        {
          messenger: {
            on: true,
            msg: [],
            typing: true,
          },
          auto: 1600,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: false,
                body:
                  "You better show up or it's my head on the chopping block",
                sender: 'them',
              },
            ],
          },
          auto: 1600,
        },
        {
          text: {
            body: 'Do I have a choice. . . ? ▽',
          },
        },
        {
          messenger: {
            on: false,
            msg: [],
          },
          bg: { path: '', effects: 'fade' },
          auto: 3200,
        },
        // ================================================================================================
        // 3-1
        // ================================================================================================
        {
          text: {
            body: `Will's always been looking out for me. Even though he could have given up on me like everyone else. ▽`,
          },
          debugScene: '3-1',
        },
        { auto: 2400 },
        {
          bg: { path: 'assets/Office.png', effects: 'fade' },
          auto: 1300,
        },
        {
          text: {
            body: `I decided to come to the interview. ▽`,
          },
        },
        {
          text: {
            body: `I didn't wanna let him down. ▽`,
          },
        },
        { auto: 1600 },
        {
          text: {
            body: `I don't remember the last time I felt this nervous. ▽`,
          },
        },
        {
          text: {
            body: `I haven't been out like this in the past year. I've almost forgotten how to even shake hands. ▽`,
          },
        },
        { bg: { path: '', effects: 'fade' }, auto: 400 },
        {
          text: {
            body: `The interview was over quickly. ▽`,
          },
        },
        {
          text: {
            body: `I think I was too nervous. . . ▽`,
          },
        },
        { auto: 1300 },
        {
          text: {
            body: `The interviewer told me he will get back to me via email. ▽`,
          },
        },
        { auto: 3200 },
        // ================================================================================================
        // 3-2
        // ================================================================================================
        {
          bg: { path: 'assets/Bedroom.png', effects: 'fade' },
          fg: { path: 'assets/Tris-smile.png', effects: 'fade' },
          auto: 1300,
          debugScene: '3-2',
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `Morning! You're up early today. ▽`,
          },
        },
        { sfx: { name: 'text-notification' }, auto: 800 },
        {
          phone: {
            on: true,
            locked: true,
            time: '07:28',
            notification: {
              type: 'text',
              alert: 'New message',
              title: 'Will',
              body:
                'I heard you did great in that interview. Keep your head up high man!',
              when: 'Just now',
            },
          },
          auto: 1600,
        },
        {
          text: {
            body: `I think it's probably best I told Tris. ▽`,
          },
        },
        {
          phone: {
            on: false,
            locked: true,
            time: '07:28',
            notification: {
              type: 'text',
              alert: 'New message',
              title: 'Will',
              body:
                'I heard you did great in that interview. Keep your head up high man!',
              when: 'Just now',
            },
          },
          auto: 800,
        },

        {
          choice: [
            {
              text: 'So I went to the interview yesterday',
            },
          ],
        },
        {
          fg: { path: 'assets/Tris-crossed-surprised.png' },
          auto: 400,
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `You told me you cancelled it. ▽`,
          },
        },
        {
          fg: { path: 'assets/Tris-crossed-angry.png' },
          text: {
            speaker: 'Tristesse',
            body: `You lied to me? ▽`,
          },
        },
        {
          choice: [
            {
              text: 'Tris let me explain',
            },
          ],
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `You always took me for granted. I should have known. ▽`,
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `You are always like this! ▽`,
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `I've been there for you through it all. And all you think about is yourself. You ungrateful asshole! ▽`,
          },
        },
        {
          text: {
            body: `I just wanted to do something for myself. . . ▽`,
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `What are you trying to prove? Who are you trying to impress? ▽`,
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `I'm the only one you have left! ▽`,
          },
        },
        {
          text: {
            body: `She's right. ▽`,
          },
        },
        {
          text: {
            body: `She's the only one I have left. ▽`,
          },
        },
        {
          text: {
            body: `Is she. . . ? ▽`,
          },
        },
        {
          fg: { path: 'assets/Tris-crossed-v-angry.png' },
          text: {
            speaker: 'Tristesse',
            body: `You think Will cares about a loser like you?! ▽`,
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `You are worthless and no one out there will ever care about you! Not Will, not anyone. ▽`,
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `And when you need me I won't be here anymore. ▽`,
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `We are done. ▽`,
          },
        },
        {
          choice: [
            {
              text: 'Tris wait. . .',
            },
            {
              text: '. . .',
            },
          ],
        },
        {
          fg: { path: '', effects: 'fade' },
          auto: 2400,
        },
        {
          text: {
            body: `I watched as she packed her stuff. ▽`,
          },
        },
        {
          text: {
            body: `I didn't stop her. ▽`,
          },
        },
        {
          bgm: { name: '', fadeTime: 3 },
          text: {
            body: `With that, she was gone. . . ▽`,
          },
        },
        { bg: { path: '', effects: 'fade' }, auto: 4000 },
        // ================================================================================================
        // 3-3
        // ================================================================================================
        {
          bg: { path: 'assets/Bedroom.png', effects: 'fade' },
          auto: 1600,
          debugScene: '3-3',
        },
        {
          text: {
            body: `This place is so quiet now. ▽`,
          },
        },
        { auto: 1600 },
        {
          text: {
            body: `I'm alone. . . ▽`,
          },
        },
        {
          bg: { path: '', effects: 'fade' },
          auto: 800,
        },
        {
          bg: { path: 'assets/PCroom-night.png', effects: 'fade' },
          bgm: { name: 'betterdays' },
          auto: 2400,
        },
        {
          text: {
            body: `I don't have the urge to do anything now. . . ▽`,
          },
        },
        {
          messenger: {
            time: '21:06',
            on: true,
            msg: [],
          },
          auto: 1600,
        },
        {
          text: {
            body: `Will's not online. . . ▽`,
          },
        },
        {
          text: {
            body: `No updates on the interview either. . . ▽`,
          },
          messenger: {
            on: false,
            msg: [],
          },
        },
        {
          bg: { path: '', effects: 'fade' },
          auto: 3200,
        },
        {
          text: {
            body: `Maybe she was right. I am alone now. ▽`,
          },
        },
        {
          bg: { path: 'assets/Bedroom-night.png', effects: 'fade' },
          auto: 1300,
        },
        {
          phone: {
            on: true,
            locked: true,
            time: '20:50',
            inCall: true,
            calling: true,
          },
          auto: 3200,
        },
        {
          phone: {
            on: false,
            locked: true,
            inCall: true,
            calling: true,
          },
          text: {
            body: `I tried calling Will but he didn't pick up. ▽`,
          },
        },
        {
          text: {
            body: `What if I messed up the interview so bad that Will doesn't wanna talk to me anymore. ▽`,
          },
        },
        {
          text: {
            body: `Everything was easier when she was around. ▽`,
          },
        },
        {
          text: {
            body: `I need to think hard about what I want next. . . ▽`,
          },
        },
        {
          choice: [
            {
              id: 'tris',
              text:
                'I made a mistake. Tris was the only one who cared about me',
            },
            {
              id: 'will',
              text: 'I made the right choice. Tris was holding me back',
            },
          ],
        },
        {},
      ],
    },
    // ================================================================================================
    // Choice path Bad
    // ================================================================================================
    {
      choicePath: 'bad',
      beats: [
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: {
            speaker: 'Tristesse',
            body: 'Okay okay. Enough of this kind. ▽',
          },
          debugScene: 'end-3',
        },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: {
            speaker: 'Tristesse',
            body: 'That was getting too cheesy. ▽',
          },
        },
        { auto: 1300 },
        {
          text: {
            speaker: 'Tristesse',
            body: `Let's watch a movie, play some games or something! ▽`,
          },
        },
        { choice: [{ text: 'Yeah' }] },
        { auto: 800 },
        { fg: { path: '', effects: 'fade' }, auto: 2400 },
        {
          text: {
            body: `I don't want it to be this way. ▽`,
          },
        },
        {
          text: {
            body: `But I'm too weak. ▽`,
          },
        },
        {
          text: {
            body: `She is all my fears that I will be forever paralyzed by.▽`,
          },
        },
        {
          text: { body: `She is my comfort zone and I can never leave.▽` },
        },
        { bg: { path: '', effects: 'fade' }, auto: 1300 },
        {
          text: {
            body: `She will keep pulling me in until the day I die. ▽`,
          },
        },
        { bgm: { name: '', fadeTime: 4 }, auto: 3200 },
        {
          text: {
            speaker: `ENDING 3`,
            body: `▽`,
          },
        },
        {
          choice: [
            { id: 'restart', text: 'Retry from where the story branches' },
            { id: 'start', text: 'Restart from the very beginning' },
          ],
        },
        {},
      ],
    },
    // ================================================================================================
    // Choice path Tris
    // ================================================================================================
    {
      choicePath: 'tris',
      beats: [
        {
          text: {
            body: 'I was too stupid to see what mattered to me. ▽',
          },
          debugScene: 'end-1',
        },
        {
          text: {
            body:
              'Tris was always there to cheer me up. Always there when I needed her. ▽',
          },
        },
        {
          text: {
            body: 'And I just let her walk out without saying a word. ▽',
          },
        },
        {
          text: {
            body: `I'm lost without her. . . ▽`,
          },
        },
        {
          bg: { path: '', effects: 'fade' },
          auto: 1600,
        },
        { sfx: { name: 'text-notification' }, auto: 1300 },
        {
          phone: {
            on: true,
            locked: true,
            time: '10:17',
            notification: {
              type: 'email',
              alert: '1 New email',
              title: 'Thank you for the interview',
              body:
                'Thank you for the interview. Unfortunately you did not . . .',
              when: 'Just now',
            },
          },
          auto: 2400,
        },
        {
          text: {
            body: 'She was right all along. ▽',
          },
        },
        {
          phone: {
            on: false,
            locked: true,
          },
          auto: 3200,
        },
        {
          bg: { path: 'assets/Bedroom.png', effects: 'fade' },
          auto: 2400,
        },
        {
          text: { body: `I can't drag myself out of bed anymore. ▽` },
        },
        {
          text: { body: `Without her there's nothing left to do. ▽` },
        },
        { auto: 2400 },
        {
          text: {
            body: `I wish I could close my eyes and wake up from this nightmare. ▽`,
          },
        },
        {
          bg: { path: '', effects: 'fade' },
          auto: 2400,
        },
        {
          bg: { path: 'assets/Bedroom.png', effects: 'fade' },
          auto: 2400,
        },
        {
          text: { body: '. . . ▽' },
          auto: 1600,
        },
        {
          text: { speaker: 'Tristesse', body: `Morning! ▽` },
        },
        {
          text: { body: `Huh? ▽` },
        },
        { auto: 1300 },
        {
          fg: { path: 'assets/Tris-smile.png', effects: 'fade' },
          auto: 1600,
        },
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: { speaker: 'Tristesse', body: `Did you sleep well? ▽` },
        },
        { choice: [{ text: 'What?' }, { text: 'How?' }] },
        {
          fg: { path: 'assets/Tris-neutral.png' },
          text: { speaker: 'Tristesse', body: `What's wrong? ▽` },
        },
        {
          choice: [{ text: 'How did you get in?' }],
        },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: { speaker: 'Tristesse', body: `You don't remember? ▽` },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `You were all drunk last night and you called me. ▽`,
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `You sounded really sad and I was worried. ▽`,
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `So I came over and you let me in. ▽`,
          },
        },
        {
          text: { body: `. . . ▽` },
        },
        {
          text: { body: `I don't remember any of that. ▽` },
        },
        {
          fg: { path: 'assets/Tris-smile-eyes.png' },
          text: { speaker: 'Tristesse', body: `Don't worry about it now. ▽` },
        },
        { choice: [{ text: `Um, I'm sorry about. . .` }] },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: {
            speaker: 'Tristesse',
            body: `Ah, no need to be. We were both angry. I didn't mean anything I said. ▽`,
          },
        },
        {
          text: {
            speaker: 'Tristesse',
            body: `I just want us to be happy again. ▽`,
          },
        },
        {
          text: {
            body: `Me too. ▽`,
          },
        },
        { auto: 400 },
        { fg: { path: 'assets/Tris-smile-eyes.png' }, auto: 800 },
        {
          fg: { path: 'assets/Tris-smile.png' },
          text: { body: `I finally understand now. ▽` },
        },
        {
          text: { body: `Tris is a part of who I am. We are inseparable. ▽` },
        },
        {
          text: {
            body: `I cannot touch her or hold her. . . But she's closest thing to a friend or family I have left. ▽`,
          },
        },
        {
          bg: { path: '', effects: 'fade' },
          fg: { path: '', effects: 'fade' },
          auto: 2400,
        },
        {
          text: {
            body: `Without her I cannot cope. ▽`,
          },
        },
        { auto: 1600 },
        {
          text: { body: `I don't wanna be alone again. ▽` },
        },
        { bgm: { name: '', fadeTime: 4 }, auto: 3200 },
        {
          text: {
            speaker: `ENDING 1`,
            body: `▽`,
          },
        },
        {},
      ],
    },
    // ================================================================================================
    // Choice path Will
    // ================================================================================================
    {
      choicePath: 'will',
      beats: [
        {
          text: {
            body:
              'No, I made the right choice. Tris was there for me through it all and I will always love her for that. ▽',
          },
          debugScene: 'end-2',
        },
        {
          text: {
            body: 'But I became too reliant on her because I was afraid. ▽',
          },
        },
        {
          text: {
            body: 'Afraid to look past her. ▽',
          },
        },
        {
          text: {
            body: `But now I think I'm ready. ▽`,
          },
        },
        {
          text: {
            body: `She will always be a part of me. ▽`,
          },
        },
        {
          bg: { path: '', effects: 'fade' },
          auto: 1600,
        },
        { sfx: { name: 'text-notification' }, auto: 1300 },
        {
          phone: {
            on: true,
            locked: true,
            time: '10:17',
            notification: {
              type: 'email',
              alert: '1 New email',
              title: 'Thank you for the interview',
              body:
                'We are happy to extend the job offer to you. The contract is attached. . .',
              when: 'Just now',
            },
          },
          auto: 2400,
        },
        {
          text: {
            body: 'This is unreal! ▽',
          },
        },
        {
          text: {
            body: 'I better call Will to let him know! ▽',
          },
        },
        {
          phone: {
            on: false,
            locked: true,
          },
          auto: 3200,
        },
        {
          bg: { path: 'assets/Bedroom.png', effects: 'fade' },
          auto: 2400,
        },
        {
          text: { body: `It's been a while since I got a good night sleep. ▽` },
        },
        { auto: 2400 },
        { sfx: { name: 'text-notification' }, auto: 1300 },
        {
          messenger: {
            time: '08:12',
            on: true,
            msg: [
              {
                online: true,
                body: 'Yo. you did great on your first week!',
                sender: 'them',
              },
            ],
          },
          auto: 1600,
        },
        { choice: [{ text: 'Thanks' }] },
        { auto: 1300 },
        {
          messenger: {
            on: true,
            msg: [],
            typing: true,
          },
          auto: 1600,
        },
        {
          messenger: {
            on: true,
            msg: [
              {
                online: true,
                body: `I'm free this weekend. Let's hit the bar!`,
                sender: 'them',
              },
            ],
          },
          auto: 1600,
        },
        { choice: [{ text: `Okay` }] },
        { auto: 1300 },
        { messenger: { on: false, msg: [] }, auto: 1600 },
        {
          bg: { path: '', effects: 'fade' },
          auto: 3200,
        },
        {
          bg: { path: 'assets/Nightstreet.png', effects: 'fade' },
          auto: 3200,
        },
        {
          fg: { path: 'assets/Will-neutral.png', effects: 'fade' },
          auto: 1600,
        },
        {
          fg: { path: 'assets/Will-smile.png' },
          text: {
            speaker: 'Will',
            body: `Hey! It's good to see you again. ▽`,
          },
        },
        {
          text: {
            speaker: 'Will',
            body: `You are so skinny now what have you been feeding yourself? Chips and fizzy drinks? ▽`,
          },
        },
        {
          text: {
            body: `It's been a lifetime since I saw Will. ▽`,
          },
        },
        {
          text: {
            speaker: 'Will',
            body: `Must have been tough for you over the last year. ▽`,
          },
        },
        {
          text: {
            speaker: 'Will',
            body: `I know your mother was like everything to you. ▽`,
          },
        },
        {
          fg: { path: 'assets/Will-neutral.png' },
          text: {
            speaker: 'Will',
            body: `To have fucking drunk driver to take her away. . . Gets me mad just thinking about it. ▽`,
          },
        },
        {
          text: {
            body: `He hasn't changed a bit. Getting worked up over everything. ▽`,
          },
        },
        {
          text: {
            speaker: 'Will',
            body: `But I'm really glad to see you happy and well. ▽`,
          },
        },
        { choice: [{ text: 'Nice to see you too' }] },
        {
          fg: { path: 'assets/Will-smile.png' },
          text: {
            speaker: 'Will',
            body: `Wait, tonight is supposed to be positive! ▽`,
          },
        },
        {
          fg: { path: 'assets/Will-smile.png' },
          text: {
            speaker: 'Will',
            body: `We should be celebrating! ▽`,
          },
        },
        { auto: 1600 },
        { fg: { path: '', effects: 'fade' }, auto: 1600 },
        {
          text: {
            body: `We walked down the busy street together. ▽`,
          },
        },
        {
          text: {
            body: `I felt a wave of nostalgia. . . ▽`,
          },
        },
        { auto: 1600 },
        {
          fg: { path: 'assets/Will-smile.png', effects: 'fade' },
          text: {
            speaker: 'Will',
            body: `Hey you are single right? I wanna introduce you to someone. ▽`,
          },
        },
        {
          text: {
            speaker: 'Will',
            body: `I think she's totally your type. ▽`,
          },
        },
        {
          choice: [{ text: 'Yeah?' }, { text: 'Let me think about that' }],
        },
        {
          text: {
            speaker: 'Will',
            body: `Don't be nervous. I know you haven't dated in years. ▽`,
          },
        },
        {
          text: {
            speaker: 'Will',
            body: `We could do a double date next weekend? ▽`,
          },
        },
        { auto: 1300 },
        {
          fg: { path: '', effects: 'fade' },
          bg: { path: '', effects: 'fade' },
          auto: 2400,
        },
        {
          text: {
            body: `Maybe things are finally settling down for me. ▽`,
          },
        },
        { bgm: { name: '', fadeTime: 4 }, auto: 3200 },
        {
          text: {
            speaker: `ENDING 2`,
            body: `▽`,
          },
        },
        {},
      ],
    },
  ],
};
export default storyData;
