// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import IconCloud from 'react-icons/lib/fa/cloud-upload'
import IconDiamond from 'react-icons/lib/fa/diamond'
import IconQuestion from 'react-icons/lib/fa/question-circle'
import IconShuttle from 'react-icons/lib/fa/space-shuttle'
import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import DefineItem from 'numenta-web-shared-components/lib/DefineItem'
import DefineList from 'numenta-web-shared-components/lib/DefineList'
import DefineTitle from 'numenta-web-shared-components/lib/DefineTitle'
import Image from 'numenta-web-shared-components/lib/Image'
import ListItem from 'numenta-web-shared-components/lib/ListItem'
import ListOrder from 'numenta-web-shared-components/lib/ListOrder'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import Strong from 'numenta-web-shared-components/lib/Strong'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import Table from 'numenta-web-shared-components/lib/Table'
import TableHead from 'numenta-web-shared-components/lib/TableHead'
import TableBody from 'numenta-web-shared-components/lib/TableBody'
import TableRow from 'numenta-web-shared-components/lib/TableRow'
import TableTitle from 'numenta-web-shared-components/lib/TableTitle'
import TableCell from 'numenta-web-shared-components/lib/TableCell'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import ImageBusiness from './images/business.png'
import styles from './index.css'


/**
 * Business Strategy & IP - MainSection and page content - React view component.
 */
const SectionBusiness = (props, {config}) => {
  const {contact, links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="Numenta Office"
            respond="mw"
            src={ImageBusiness}
          />
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Numenta’s business strategy and approach to intellectual property
            (IP) is to create an active research community as well as to enable
            strong commercial opportunities. To that end, we follow these
            general principles:
          </Paragraph>
          <ListOrder marker="decimal">
            <ListItem>
              <Strong>Transparency</Strong>. We openly publish our scientific
                findings, software, intellectual property, and business
                strategy. There are no hidden agendas.
            </ListItem>
            <ListItem>
              <Strong>Scientific Use</Strong>. Anyone can freely use our
                software and intellectual property for non-commercial purposes.
            </ListItem>
            <ListItem>
              <Strong>Commercial Deployment</Strong>. We make reference software
                available (including relevant patents) for free under an AGPL
                license. If the AGPL license is not a good fit, or if you are
                interested in using our intellectual property without our
                software in a commercial application, we offer an IP license
                that enables commercial use.
            </ListItem>
          </ListOrder>
        </div>
      </div>

      <Anchor name="transparency" />
      <SubTitle level={2}>
        1. Transparency
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <IconDiamond className={styles.icon} />
        </div>
        <div className={styles.content}>
          <Paragraph>
            We have enabled a community of researchers and developers working on
            HTM technology in the NuPIC open source community
            at <TextLink to={links.out.org}>{links.out.org}.</TextLink> We post
            all of our application and algorithm code in NuPIC as well as our
            research updates as they occur. We <TextLink to={links.in.papers}>
            publish our work</TextLink> in peer-reviewed journals and submit
            pre-publication manuscripts to arXiv. We also speak at a variety of
            forums, such as machine learning, data science, neuroscience, and
            application-specific events. Other than confidential information
            relating to partner relationships, products or data, we work as much
            in the open as possible.
          </Paragraph>
          <Paragraph>
            Given the uniqueness of our work and our early focus on temporal
            data, we have been issued over thirty U.S. and international
            patents. The list of issued U.S. patents can
            be <TextLink to={links.out.patents}> found here.</TextLink> In
            addition, we have pending U.S. and international patents that are
            not included in this list. We believe these patents cover some of
            the foundational principles of machine intelligence.
          </Paragraph>
        </div>
      </div>

      <Anchor name="science" />
      <SubTitle level={2}>
        2. Scientific, Research and Academic Use
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <IconShuttle className={styles.icon} />
        </div>
        <div className={styles.content}>
          <Paragraph>
            Our reference software, along with its associated IP, is available
            at <TextLink to={links.out.org}>{links.out.org}</TextLink> under the
            AGPLv3 license at no cost. Scientists, researchers, and students are
            able to use our technology by agreeing to the terms of this open
            source license. For those researchers who are unable to use the
            AGPLv3 license, we have created a separate, <nobr>no-cost</nobr>
            , <nobr>non-commercial</nobr>, <TextLink to={links.out.trial}>
            trial license.</TextLink>
          </Paragraph>
          <Paragraph>
            For those scientists and researchers who want to use our
            intellectual property without our software, or whose work may be
            covered by our patents, we make a clear statement of non-assertion:
            as long as your work is for non-commercial use, we will not assert
            our patents.
          </Paragraph>
        </div>
      </div>

      <Anchor name="deployment" />
      <SubTitle level={2}>
        3. Commercial Deployment
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <IconCloud className={styles.icon} />
        </div>
        <div className={styles.content}>
          <Paragraph>
            In our terminology, commercial use means using the technology or
            patents to create a product or service that is sold, licensed,
            hosted, or offered to customers or business partners as standalone
            functionality or as part of another product, whether for a fee or
            not. In addition, commercial use includes deploying the technology
            or patents internally to be used in any business process. For
            example, if you use our technology or patents internally to monitor
            performance of your IT servers, even if you don’t offer it to
            others, we view this as commercial use.
          </Paragraph>
          <Paragraph>
            Commercial partners are welcome to use our software under the terms
            of the AGPLv3 license, which includes releasing their own software
            to the open source under the AGPLv3 license. For those who want to
            distribute derivative software and do not want to accept these
            terms, we have a <TextLink to={links.in.license}>commercial IP
            license available,</TextLink> which includes a license to the
            reference source code available in NuPIC. This custom license is
            also appropriate for those who want to license our patents. Please
            contact us at <TextLink to={`mailto:${contact.email.licenses}`}>
              {contact.email.licenses}</TextLink> if you are interested in this
            license.
          </Paragraph>
        </div>
      </div>

      <Anchor name="licenses" />
      <SubTitle level={3}>
        Summary of Numenta Licenses
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <div className={styles.licenses}>
            <Table border={true}>
              <TableHead>
                <TableRow>
                  <TableTitle />
                  <TableTitle>
                    Scientific, Research, and Academic Use
                  </TableTitle>
                  <TableTitle>
                    Commercial Use
                  </TableTitle>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Strong> Open Source License (AGPLv3)</Strong>
                  </TableCell>
                  <TableCell>
                    Includes reference software and associated intellectual
                    property
                    <br /> No cost
                  </TableCell>
                  <TableCell>
                    Includes reference software and associated intellectual
                    property Use internally – no cost
                    <br />Distribute derivative software – no cost if released
                    in accordance with the AGPLv3
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Strong>Trial License</Strong>
                  </TableCell>
                  <TableCell>
                    Includes reference software and associated intellectual
                    property without AGPLv3 requirements
                    <br />No commercial rights
                    <br />No cost
                  </TableCell>
                  <TableCell>
                    Includes reference software and associated intellectual
                    property without AGPLv3 requirements
                    <br />No commercial rights
                    <br />No cost
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Strong>Commercial IP License</Strong>
                  </TableCell>
                  <TableCell>
                    We agree not to assert our IP for non-commercial uses
                  </TableCell>
                  <TableCell>
                    Includes intellectual property and use of the reference
                    software
                    <br />Commercial rights
                    <br />Fee
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <Anchor name="faq" />
      <SubTitle level={3}>
        Numenta Licensing FAQ
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <IconQuestion className={styles.icon} />
        </div>
        <div className={styles.content}>
          <div className={styles.faq}>
            <DefineList>
              <DefineTitle>
                I operate a business. Why wouldn’t I use the free AGPL version
                for my product?
              </DefineTitle>
              <DefineItem>
                You are welcome to do so under the terms of that license. AGPL
                is a “copyleft” license. It requires that if you distribute or
                make available your software (either directly or through a SaaS
                model), you also must distribute the source code under the AGPL
                license. For some companies and some situations, that is an
                acceptable requirement. However, companies who want to keep the
                resulting code proprietary will prefer a commercial license.
              </DefineItem>
              <DefineTitle>
                If I do not intend to distribute or make available as a SaaS
                implementation any derivative software, then it seems to me that
                I can use the AGPL version internally without any additional
                license, even if it is for a commercial purpose. For example, I
                run a hedge fund and I figured out how to use NuPIC to
                advantage, but I don’t distribute the software or results, nor
                do I make it available to others. Is this correct?
              </DefineTitle>
              <DefineItem>
                Generally you may use the software and patents for internal use
                under the AGPL. Note, however, if you do not use our open-source
                software (and thus do not fall under the AGPL), you WOULD need a
                license for our IP. For example, say you do your own, very
                specific version of HTM for your hedge fund. Once you deploy
                that within your company for any productive purpose (as opposed
                  to research), you would need a commercial IP license from us
                  because you are not under the AGPL.
              </DefineItem>
              <DefineTitle>
                I’m a researcher who uses different machine learning techniques.
                I’m trying to add capabilities that are similar to Numenta, i.e.
                using temporal data streams in a hierarchy, but I’m not using
                your software. What are my obligations relative to Numenta?
              </DefineTitle>
              <DefineItem>
                For researchers who are doing work that is covered by Numenta
                patents, we have promised to not assert our patents for
                any <nobr>non-commercial</nobr> use including publications,
                teaching, and experimentation. We do ask that you provide
                appropriate citations of our work. Make sure to visit our
                current repository of <TextLink to={links.in.papers}>research
                papers.</TextLink> If you are a corporate researcher who is
                applying this technology to commercial use, then you will need
                to evaluate the Numenta patent portfolio to see if our patents
                cover your work. If so, you should contact us to explore a
                patent license.
              </DefineItem>
              <DefineTitle>
                Why do you call your software “reference code”?  Is it
                deployable?
              </DefineTitle>
              <DefineItem>
                In creating software, our principle mission is to enable the
                advancement of our research through experimentation.  In the
                past, we have created several sample applications and tools that
                could be very helpful to licensees to create deployable
                applications.  However, we are not adding certain functionality
                to facilitate deployment and are not providing technical
                support, so we offer the code as reference only and encourage
                licensees to develop their own deployable code.
              </DefineItem>
            </DefineList>
          </div>
        </div>
      </div>
    </article>
  )
}

SectionBusiness.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionBusiness
