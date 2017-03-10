Temporal Memory Algorithm
=========================

In HTM, sequence memory is implemented by the Temporal Memory algorithm.
This algorithm learns sequences of Sparse Distributed Representations
(SDRs) formed by the Spatial Pooling algorithm, and makes predictions of
what the next input SDR will be. While we are working on a standalone
chapter for BAMI that will detail the Temporal Memory algorithm, for now
you can explore the following resources to learn more:


-   **HTM School episode about Temporal Memory** • **[HTM School](http://numenta.org/htm-school/)**
    is a video tutorial series that explains concepts of HTM with an emphasis on
    visualizations and examples. This episode talks about Temporal Memory.
    -   [Temporal Memory Part I](https://www.youtube.com/watch?v=UBzemKcUoOk) (Episode 11)
    -   Additional Temporal Memory episodes are in development


-   **Peer-reviewed papers •**
    -	 [Why Neurons Have Thousands of Synapses, a Theory of Sequence Memory in Neocortex](http://numenta.com/papers/why-neurons-have-thousands-of-synapses-theory-of-sequence-memory-in-neocortex/) This paper, authored by Jeff Hawkins and Subutai Ahmad, was published on March 30, 2016 in Frontiers in Neural Circuits. The paper, written from a neuroscience perspective, describes the core HTM theory for temporal memory (called “sequence memory” in the paper) and its relationship to the neocortex.
    -  [Continuous Online Sequence Learning with an Unsupervised Neural Network Model](http://www.mitpressjournals.org/doi/abs/10.1162/NECO_a_00893#.WMBBGBLytE6) This paper, authored by Yuwei Cui, Subutai Ahmad and Jeff Hawkins, was published in the November 2016 edition of Neural Computation. The paper, written from a machine learning perspective, analyses the Temporal Memory algorithm (called “HTM sequence memory” in the paper) and compares it to statistical and Deep Learning techniques.


-   **Temporal Memory algorithm details and pseudocode** • Pseudocode implementing
    the version of the Temporal Memory algorithm that is published in NuPIC,
    Numenta’s open source HTM platform.
    -   [Temporal Memory Algorithm Details](/assets/pdf/temporal-memory-algorithm/Temporal-Memory-Algorithm-Details.pdf)
