---
author: Christy Maver
brief: "A couple months ago, one of our engineers had an idea: What if we could dedicate a day or two to work on a Numenta project that may be outside our day-to-day responsibilities? From that, the first Internal Numenta Hackathon was born."
date: 2017/03/23
hideImage: false
image: ../images/hackathon_haiku_smaller_resized.jpg
org: Director of Marketing
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

![Hacakthon rules](../images/hackathon_rules.jpg)

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

![Hacakthon encoder team](../images/hackathon_encoder_team.jpg)

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

![Hacakthon team NIK](../images/hackathon_team_NIK.jpg)

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

![Hacakthon Clean Desk](../images/hackathon_clean_desk.jpg)

> *You can use your imagination for the “Before” shot*

There were no prizes or awards given, as this was more of a
team-building event than a contest. Don’t be fooled into thinking there
wasn’t any competition, however. To celebrate the end of the hackathon,
we headed over to [Home Chef Cooking
School](http://homechefcookingschool.com/) to engage in a fierce
“[Chopped](https://en.wikipedia.org/wiki/Chopped_(TV_series))”-style
cooking challenge.

![Cooking Competition Austin and Scott](../images/cooking_comp2.jpg)

> *Austin and Scott prepare to plate*

![Cooking Competition Matt](../images/cooking_comp2.jpg)

> *Matt explains the dish* 

![Cooking Competition Dig in](../images/cooking_comp1.jpg)

> *Digging in*

With the first Numenta internal hackathon in the books, now it’s back to
our regularly scheduled programming, but things are not exactly the same
as before. Some of these projects will continue, and many may help
inform our current work. More importantly, there’s a sense of renewed
enthusiasm and satisfaction among the team–the kind that can only come
from checking an item off a list you rarely get to touch. And we all
have a few new cooking tricks up our sleeves now.

What’s on your “If only I had time to do” list?

![Cooking Competition Dig in](../images/winner-winner-chicken-dinner.jpg)

> *The winning dish: cornucopia pepper with chicken stir-fry, roasted
purple cauliflower and zucchini with wilted spinach, and cold Thai
noodle salad*
