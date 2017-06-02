---
author: "Subutai Ahmad, Alexander Lavin, Scott Purdy, Zuha Agha"
brief: "This paper combines two of our existing papers, “Real-Time Anomaly Detection for Streaming Analytics” and “Evaluating Real-time Anomaly
Detection Algorithms - the Numenta Anomaly Benchmark” for a version that appears in a special issue of Neurocomputing that focuses on
anomaly detection."
category: machine-learning
date: 2017/06/06
hideImage: true
image: ../images/anomaly-detection-image.png
link: http://journal.frontiersin.org/article/10.3389/fncir.2016.00023/abstract
org: "Published in Neurocomputing, June 2017"
sort: d
title: "Unsupervised Real-Time Anomaly Detection for Streaming Data"
type: post
---

| | |
|-|-|
| **Authors** | S. Ahmad, A. Lavin, S. Purdy, and Z. Agha |
| **Journal** | Neurocomputing (2017) |
| **Online** | [Read or Download this Paper][1] |
| **Published** | June 2017 |

Across every industry, we are seeing an increase in the amount of
streaming, time-series data produced by connected real-time data
sources. Deriving value from these streams requires modeling each one in
an unsupervised fashion to detect anomalies in real time. This has
practical and significant value – from using medical sensors to know
when a patient is in distress to uncovering a bottleneck in your IT
infrastructure. Most people agree that detecting real-time anomalies is
important, but it’s also difficult to achieve. It requires anomaly
detection systems that process data in real-time as opposed to batches,
learn continuously and are fully automated. This paper demonstrates how
Numenta’s online sequence memory algorithm, Hierarchical Temporal Memory
(HTM), meets those requirements. The paper also presents results using
the Numenta Anomaly Benchmark (NAB), the first open-source benchmark
designed for testing anomaly detection algorithms on streaming data.

![Machine temperature readings](../images/anomaly-detection-image.png)
> *This data stream from NAB represents machine temperatures recorded
  over time. Anomalies are marked by a red circle within the pink
  shaded anomaly windows.*


## **Frequently asked questions about this research**

### **Q. What was the purpose of this paper?**

The purpose of this paper is to highlight the importance of anomaly
detection for streaming applications and introduce two contributions
within that field. The first is Hierarchical Temporal Memory (HTM), a
theoretical framework for sequence learning in the cortex. The second is
the Numenta Anomaly Benchmark (NAB), an open source tool that evaluates
anomaly detectors on streaming data.

We analyze the characteristics of an ideal detector and articulate how
HTM displays those characteristics. We then demonstrate the performance
of HTM with a comprehensive results on the Numenta Anomaly Benchmark
(NAB), the first open source benchmark for testing anomaly detection
algorithms on streaming data.

### **Q. What are the key takeaways?**

-   Anomaly detection represents one of the most significant
    applications for machine learning in IoT

-   Because of the unique characteristics of streaming data
    applications, the ideal streaming anomaly detector should meet a set
    of requirements:

    -   Predictions must be made online; they cannot look ahead

    -   Algorithms must learn continuously

    -   Algorithms must run unsupervised and automatically

    -   Algorithms must adapt to dynamic environments

    -   Algorithms should make anomaly detections as early as possible

    -   Algorithms should minimize both false positives and false
        negatives

-   Though HTM was not created specifically for anomaly detection,
    because HTM implementations operate in real-time and work well for
    prediction tasks, this approach can yield good results when applied
    to streaming anomaly detection

-   NAB provides a way to evaluate streaming anomaly detection
    algorithms. It contains a dataset with real-world, labeled data
    streams, a scoring methodology that rewards early detection and an
    open repository that allows anyone to use it.

### **Q. How does this research differ from other studies?**

Anomaly detection in time-series data has been actively studied for
decades. The subject has generated much interest within the data science
and machine learning communities. While there are many different anomaly
detection approaches, most of them are designed to process data in
batches, making them unsuitable for real-time streaming applications.

### **Q. How were the algorithms evaluated?**

Based on the criteria identified for the ideal anomaly detector, we
selected 7 algorithms to run on NAB, including HTM, Twitter’s Anomaly
Detection, Etsy’s Skyline, Multinomial Relative Entropy, EXPoSE,
Bayesian Online Changepoint detection, and a simple sliding threshold.
The source code and parameter settings are included in the NAB
repository for each algorithm tested.

### **Q. Can I replicate these results?**

Yes! In keeping with Numenta’s [open research
philosophy](http://numenta.com/blog/2014/09/17/increasing-research-transparency/),
we have incorporated the source code and parameter settings for all of
the above algorithms into the [NAB
repository](https://github.com/numenta/NAB). We also welcome questions
and discussion about the paper on the [HTM
Forum](https://discourse.numenta.org/).

### **Q. How does this paper make contributions in machine learning?**

Anomaly detection is one of the most significant, current applications
for machine learning in IoT. Yet streaming data introduce difficult
challenges for machine learning models. Unlike batch models, where the
full dataset is available, streaming models require processing and
learning with each data point. Additionally, sensor streams are often
seen in massive volumes and high velocities, which leaves little room
for human intervention, parameter tweaking or data labeling. This paper
demonstrates how you can use HTM to perform robust anomaly detection on
a variety of data streams. It also allows you to evaluate other machine
learning methods.

For more details on the key properties of HTM and how it compares to
other machine learning models, you can read this [peer-reviewed
paper](http://numenta.com/papers/continuous-online-sequence-learning-with-an-unsupervised-neural-network-model/),
which appears in Neural Computation, November 2016, Volume 28.

### **Q. Where can I find out more?**

The [HTM Forum](https://discourse.numenta.org/) is a great resource for
further questions and discussion on HTM, NAB and other related topics.
The authors of this paper are active participants in the forum.

### **Q. What is next for this research?**

We’ve identified several areas for future work. NAB is currently limited
to single metric data streams, but the error analysis indicates that the
errors across various algorithms (including HTM) are not always
correlated. Adding real-world multivariate data streams labeled with
anomalies could be valuable and allow for an ensemble-based approach,
which might provide a significant increase in accuracy.

[1]: http://journal.frontiersin.org/article/10.3389/fncir.2016.00023/full
