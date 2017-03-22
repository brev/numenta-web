---
author: Christy Maver
brief: A couple months ago, one of our engineers had an idea: What if we could dedicate a day or two to work on a Numenta project that may be outside our day-to-day responsibilities? From that, the first Internal Numenta Hackathon was born.
date: 2017/03/23
hideImage: true
image: ../images/image.png
org: Marketing
tags: numenta machine intelligence htm htm school
title: "Pressing the Pause Button for Numenta’s First Internal Hackathon"
type: post
---

One of my favorite places in the Numenta office is the conference room.
It’s where we sit and chat over lunch every day, gather for company
updates, or even listen to guest speakers from time to time. Our
conversations in this room cover a wide range of topics, as you can
imagine. It’s not uncommon for seedlings of HTM projects to be planted
during those chats. Sometimes the seedlings can be cultivated, or shared
with the community for further exploration. Many times, however, they
are pushed to the back of our minds or relegated to that elusive, “If I
ever have free time, I’m going to work on this” list.

A couple months ago, one of our engineers had an idea: What if we could
dedicate a day or two to work on a Numenta project that may be outside
our day-to-day responsibilities? From that, the first Internal Numenta
Hackathon was born.

In the weeks leading up to the hackathon, we were encouraged to share
our ideas for projects, and decide whether we wanted to work in teams or
solo. As for the projects, nothing was off limits, and they were not
confined to engineering and technical hacks. The entire company was
involved, which meant we had projects ranging from writing to coding to
improving the office.

We kicked off the event Monday morning, where Matt briefly went over the
guidelines.

![](media/image2.jpeg){width="4.19in" height="2.76in"}

> *The first rule of internal hackathons: there are no rules *

And with that, we were off. So how did the projects turn out? Here are
some of the highlights:

## Marion and Thomas (Team French) – Encodeur Cochlée

Marion and Thomas, a visiting scholar, teamed up to tackle the creation
of a frequency encoder that was inspired by how the human cochlea
encodes sounds. The best part about this pairing was the fact that
they’re both native French speakers, so it was nice to hear a steady
stream of French in the office for two days.

If you’re interested in seeing the details or using the encoder, Marion
shared the results of this project with the community on the [HTM
Forum](https://discourse.numenta.org/t/new-frequency-encoder-a-k-a-cochlea-encoder/2015).

![](media/image3.jpeg){width="3.68in" height="2.76in"}

> *C’est tres bien! – Marion and Thomas discuss their encoder*

## Marcus – Visualization: Stacks of Time Series

About a year ago, Marcus created a really cool visualization of "segment
lifetimes," which you can view on
his [blog](http://www.mrcslws.com/blocks/2016/04/28/life-and-times-of-dendrite-segment.html).
This visualization was useful, but not easily reusable. So Marcus used
the two days to do the inverse of a hack. As he put it, “Most of my life
is a hackathon.” He wanted to create something that could be easily
recreated by anyone, including himself.

“That blog post involved lots of duct tape,” Marcus explained. “I later
found myself wishing I could see the segment lifetimes of lots of HTM
experiments, so it was worth putting in some time to actually ship
it.” The end result is now available for anyone to use
at <https://github.com/htm-community/sanity-nupic>.

## Luiz and Subutai (Team Nik) – Numenta Inverse Kinematics

Luiz and Subutai joined forces to explore whether we can learn [inverse
kinematics](https://en.wikipedia.org/wiki/Inverse_kinematics) using HTM.
This is a concept well known in robotics that computes the desired
position of a figure.  It’s essentially figuring out: if I know the
position I want to move to, how do I position the body to get there? For
example, if I want to reach out and touch something at a known location,
how would I position my arm so that my fingers are actually touching the
object?  The brain has to solve the same problem, so they wanted to
figure out if we could learn inverse mappings using biologically
plausible HTM neurons.

![](media/image4.jpeg){width="3.68in" height="2.76in"}

> *Team Nik hacking away*

Learning inverse kinematics is a challenging task in general. The
results are preliminary but after two days of hacking, all signs point
to yes, you can use HTM to learn inverse kinematics.

“The hackathon was a fun way to prototype something cool that is not
directly related to our day to day work. We hope to keep working on it
in our spare time to get it more solid,” said Subutai. If you’re
interested in learning more about the work Luiz and Subutai did, you can
view the project details at
<https://github.com/numenta/nupic.research/tree/master/projects/nik>.

## Celeste - HTM Education for Younger Children

Inspired by talks she has given recently at local schools, Celeste took
on an education project. She wanted to come up with ways to interest
students in the brain and HTM at a younger age than college, and
particularly encourage girls and students of color. She identified
education approaches and content based on age groups – from kindergarten
through high school. “I’m always impressed by how engaged young students
are when I speak at schools,” Celeste said. “They’re fascinated by how
the brain works. I’d love to see a day when they’re taught brain theory
from an early age.” With potential targets for prototypes of HTM Youth
Education, perhaps Celeste’s project is a first step to getting us
there.

## Austin – Touch Bar Hack

Anyone who has seen the latest MacBook Pro has also seen the new [Touch
Bar](http://www.apple.com/macbook-pro/) feature. Advertised as a
built-in touch strip that provides “instant access to the tools you
want, right when you want them,” Austin figured, why not use this
feature to display HTM anomaly results? He created an app that you can
use on canned data sources. Download it
[here](https://github.com/oxtopus/Pictures-Came-With-NSTouchBar) if you
want to try it. You can also view a short video Austin created to
describe the project
[here](https://drive.google.com/file/d/0B4hLSXk6en8-T2EzU0FRNUNoMDA/view).

## The Mystery Hack

Perhaps the most impressive hack was one done by a team member that had
to be out of town during the hackathon. She surprised us all with a
top-secret project that was waiting for us Monday morning: the Clean
Desk Hack.

![](media/image5.jpeg){width="3.68in" height="2.76in"}

> *You can use your imagination for the “Before” shot*

There were no prizes or awards given, as this was more of a
team-building event than a contest. Don’t be fooled into thinking there
wasn’t any competition, however. To celebrate the end of the hackathon,
we headed over to [Home Chef Cooking
School](http://homechefcookingschool.com/) to engage in a fierce
“[Chopped](https://en.wikipedia.org/wiki/Chopped_(TV_series))”-style
cooking challenge.

![](media/image6.jpeg){width="2.07in" height="2.76in"}

> *Austin and Scott prepare to plate

![](media/image7.jpeg){width="2.07in" height="2.76in"}

> *Matt explains the dish 

![](media/image8.jpeg){width="2.07in" height="2.76in"}

> *Digging in

With the first Numenta internal hackathon in the books, now it’s back to
our regularly scheduled programming, but things are not exactly the same
as before. Some of these projects will continue, and many may help
inform our current work. More importantly, there’s a sense of renewed
enthusiasm and satisfaction among the team–the kind that can only come
from checking an item off a list you rarely get to touch. And we all
have a few new cooking tricks up our sleeves now.

What’s on your “If only I had time to do” list?

![](media/image9.jpeg){width="3.0758945756780403in"
height="2.759411636045494in"}

> *The winning dish: cornucopia pepper with chicken stir-fry, roasted
purple cauliflower and zucchini with wilted spinach, and cold Thai
noodle salad*


In the two years I’ve been at Numenta, I’ve seen the field of AI grow to become
a focal point of technology news. During this same time, I’ve also witnessed the
interest in our work continues to grow.  

So it didn’t come as a surprise when I learned a Chinese TV crew wanted to film
an interview with our co-founder, Jeff Hawkins, at our office. But it did come
as a surprise to hear that the interview was with Yang Lan, a prominent
broadcast journalist and figure who has been referred to as
[the Oprah of China][1]. She hosts several TV talk shows, is the cofounder and
chairperson of [Sun Media Group][2] and Sun Culture Foundation, and was listed
by Forbes as one of the [top 100 most powerful women][3].  

The interview with Jeff is to be featured as part of Yang Lan’s upcoming
documentary series on Artificial Intelligence. Yang Lan and her team travelled
across the globe to interview knowledgeable researchers, technologists and
leaders on their opinions and findings. The documentary series is set to air in
China at the end of this year and will be seen by upwards of a billion people;
there will be an English version afterwards as well.

*We’ll update this blog when the interview becomes available, with instructions
on how to access it.*

## The View Behind the Scenes

The film and production crew of 11 (yes eleven!) people arrived at our office in
Redwood City, CA; a bit early for the 8:30 a.m. appointment and quickly took
over our office. A coordinator based on the west coast had visited Numenta a
week prior to the interview, to discuss details and scout the office for filming
locations. The team chose to set up two chairs in the middle of the office, with
a view of a neuron mural from neuroscientist Santiago Ramon y Cajal, on our wall
in the background.

We have a small team at Numenta, around 15 employees plus a few interns that
join us every summer, so our office is small. Thursday is a no-meeting day, when
many employees choose to work from home. This worked well to accommodate the
large film crew, as the staff members who were present were displaced from their
desks to various locations around the office.  

![Yang Lan interview crew at Numenta office](../images/image2.png)

> *This photo only shows half of the production crew. Other members were busy in
  one of our conference rooms.*

Yang Lan arrived once the cameras were setup, and was greeted by our eager staff
and her production crew. After a few introductions, sound checks and lighting
adjustments, the cameras began rolling.  

Her first few questions focused on Jeff’s background and how he arrived at
Numenta’s mission today - [reverse-engineering the neocortex][4]. Jeff
referenced his prior work as “computers were fun to work on, but my real passion
was brains.” He described solving brains as a difficult problem, but also as one
of the most important problems in the world.  

The next series of questions from Yang Lan evoked a more lively discussion. It
was clear that she knew Numenta’s approach was different than traditional
machine learning methods, but she wanted Jeff to explain why. He went into
detail on why Numenta is studying the neocortex as a blueprint for machine
intelligence. Jeff defined intelligence and highlighted one of the crucial
processes involved when learning a model of the world: “the brain works on
time-based data.” He also addressed the fears from those concerned with the
creation of intelligent machines, a highly debated topic in artificial
intelligence.

![Yang Lan interviewing Jeff Hawkins at Numenta](../images/image.png)

> *Yang Lan interviews Jeff Hawkins at our office.*

The interview went smoothly, with the exception of an interruption from a
deliveryman at our door. After the interview, Jeff showed Yang Lan several of
our example applications and visualizations, to help her audience visualize our
technology. A Numenta employee, who was working remotely, signed on to our
tele-presence robot (made by Double Robotics) and introduced himself while
navigating the robot through the office for Yang Lan and her film crew.

Between set-up, the interview, b-roll footage and takedown, the production team
spent four hours at our office, but by the afternoon, the office had returned to
its norm. Seeing the effort that occurs behind the scenes of a documentary film
interview was impressive. The real highlight though was witnessing the live,
uncut version of an interview with Yang Lan. We don’t know what the final piece
will look like and how the producers plan to include Numenta, but it was
exciting to be a part of this documentary series.

[1]: http://time.com/2907444/yang-lan-the-oprah-of-china-expands-her-reach/
[2]: http://www.chinasunmedia.com/en/?page_id=2468
[3]: http://www.forbes.com/pictures/fjed45ed/yang-lan/#66b8dfc972ef
[4]: /
