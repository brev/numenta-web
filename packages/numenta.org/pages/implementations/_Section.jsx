// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Anchor from 'numenta-web-shared-components/Anchor'
import IconMarker from 'numenta-web-shared-components/IconMarker'
import Image from 'numenta-web-shared-components/Image'
import LogoMark from 'numenta-web-shared-components/LogoMark'
import Paragraph from 'numenta-web-shared-components/Paragraph'
import Strong from 'numenta-web-shared-components/Strong'
import SubTitle from 'numenta-web-shared-components/SubTitle'
import TextLink from 'numenta-web-shared-components/TextLink'

import ImageClojure from './images/clojure.png'
import ImageCpp from './images/cpp.png'
import ImageJava from './images/java.png'
import ImagePython from './images/python.png'
import styles from './index.css'


/**
 * Implemntations MainSection and page content - React view component.
 */
const SectionImplement = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.logomark}>
            <LogoMark />
          </div>
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Hierarchical Temporal Memory (HTM) is a theory of intelligence that
            can be implemented in most computer programming languages. Below are
            descriptions of several HTM implementations currently active within
            our community. For detailed descriptions of HTM algorithms, see our
            living text, {' '}
            <TextLink to={links.out.bami}>
              Biological and Machine Intelligence.
            </TextLink> {' '}
            It contains pseudocode for both the {' '}
            {/* eslint-disable max-len */}
            <TextLink to="http://numenta.com/assets/pdf/biological-and-machine-intelligence/0.4/BaMI-Spatial-Pooler.pdf">
              spatial pooling
            </TextLink> and {' '}
            <TextLink to="http://numenta.com/assets/pdf/biological-and-machine-intelligence/0.4/BaMI-Temporal-Memory.pdf">
              temporal memory
            </TextLink> algorithms (PDFs).
            {/* eslint-enable max-len */}
          </Paragraph>
          <Paragraph>
            <Strong>NuPIC</Strong>, or the {' '}
            <Strong>Numenta Platform for Intelligent Computing,</Strong> {' '}
            is an HTM implementation created by Numenta and open-sourced in June
            2013. This codebase is the original HTM codebase, and is architected
            in a way that allows algorithmic experimentation in Python, but more
            performant versions of HTM algorithms in C++.
          </Paragraph>
        </div>
      </div>

      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="C++ Logo"
            border={false}
            respond="mw"
            shadow={false}
            src={ImageCpp}
          />
        </div>
        <div className={styles.content}>
          <Anchor name="nupic-core" />
          <SubTitle>NuPIC Core (C++)</SubTitle>
          <Paragraph>
            Our C++ codebase contains all HTM algorithms written in C++, and
            SWiG language bindings to Python. Language bindings to other
            environments should be added here.
          </Paragraph>
          <Paragraph>
            This codebase exposes the {' '}
            <TextLink to="https://github.com/numenta/nupic/wiki/Network-API">
              Network API,
            </TextLink> {' '}
            which is the primary low-level interface for creating HTM systems.
          </Paragraph>
          <div className={styles.promote}>
            <IconMarker>
              <TextLink to="http://github.com/numenta/nupic.core">
                http://github.com/numenta/nupic.core
              </TextLink>
            </IconMarker>
          </div>
        </div>
      </div>

      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="Python Logo"
            border={false}
            respond="mw"
            shadow={false}
            src={ImagePython}
          />
        </div>
        <div className={styles.content}>
          <Anchor name="nupic-py" />
          <SubTitle>NuPIC (Python)</SubTitle>
          <Paragraph>
            The NuPIC Python codebase contains Python code implementations of
            HTM. Through this interface, uses may specify whether their code
            runs Python algorithms or the faster C++ algorithms using the Python
            bindings provided in <Strong>nupic.core</Strong>.
          </Paragraph>
          <Paragraph>
            In addition to providing Python bindings to the {' '}
            <Strong>nupic.core</Strong> {' '}
            <TextLink to="https://github.com/numenta/nupic/wiki/Network-API">
              Network API,
            </TextLink> {' '}
            this codebase also includes a higher-level client API called the
            Online Prediction Framework (OPF), which is tuned towards
            experimentation with predictions, anomaly detection, and identifying
            optimal model parameters
            (<TextLink to="https://github.com/numenta/nupic/wiki/Running-Swarms">
              swarming
            </TextLink>).
          </Paragraph>
          <div className={styles.promote}>
            <IconMarker>
              <TextLink to="http://github.com/numenta/nupic">
                http://github.com/numenta/nupic
              </TextLink>
            </IconMarker>
          </div>
        </div>
      </div>

      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="Java Logo"
            border={false}
            respond="mw"
            shadow={false}
            src={ImageJava}
          />
        </div>
        <div className={styles.content}>
          <Anchor name="htm-java" />
          <SubTitle>HTM.Java</SubTitle>
          <Paragraph>
            While the copyright to <Strong>HTM.Java</Strong> was generously
            donated to Numenta by it&apos;s {' '}
            <TextLink to="https://discourse.numenta.org/users/cogmission">
              author,
            </TextLink> {' '}
            it is a community-created and maintained port of NuPIC algorithms
            into Java. This JVM runtime provides a similar experience to the
            NuPIC Network API, and has algorithmic parity with NuPIC.
          </Paragraph>
          <div className={styles.promote}>
            <IconMarker>
              <TextLink to="http://github.com/numenta/htm.java">
                http://github.com/numenta/htm.java
              </TextLink>
            </IconMarker>
          </div>
        </div>
      </div>

      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="Clojure Logo"
            border={false}
            respond="mw"
            shadow={false}
            src={ImageClojure}
          />
        </div>
        <div className={styles.content}>
          <Anchor name="comportex" />
          <SubTitle>Comportex (Clojure)</SubTitle>
          <Paragraph>
            Comportex is an implementation of HTM as a Clojure library. It is
            not a port of NuPIC, it is a separate implementation based initially
            on the Numenta "CLA white paper" but significantly evolved.
          </Paragraph>
          <div className={styles.promote}>
            <IconMarker>
              <TextLink to="https://github.com/htm-community/comportex">
                https://github.com/htm-community/comportex
              </TextLink>
            </IconMarker>
          </div>
        </div>
      </div>
    </article>
  )
}

SectionImplement.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionImplement
