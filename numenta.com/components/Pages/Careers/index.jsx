import React from 'react'

import Anchor from '../../../components/Anchor'
import Button from '../../../components/Button'
import DefineItem from '../../../components/DefineItem'
import DefineList from '../../../components/DefineList'
import DefineTitle from '../../../components/DefineTitle'
import Form from '../../../components/Form'
import FormInput from '../../../components/FormInput'
import FormLabel from '../../../components/FormLabel'
import FormRow from '../../../components/FormRow'
import FormTextArea from '../../../components/FormTextArea'
import Image from '../../../components/Image'
import ImageLink from '../../../components/ImageLink'
import List from '../../../components/List'
import ListItem from '../../../components/ListItem'
import Paragraph from '../../../components/Paragraph'
import SocialMedia from '../../../components/SocialMedia'
import Strong from '../../../components/Strong'
import SubTitle from '../../../components/SubTitle'
import Table from '../../../components/Table'
import TableBody from '../../../components/TableBody'
import TableCell from '../../../components/TableCell'
import TableRow from '../../../components/TableRow'
import TextLink from '../../../components/TextLink'

import ImageCareers from './images/careers.png'
import ImageCeleste from './images/team/celeste-baranski.jpg'
import ImageDonna from './images/team/donna-dubinsky.jpg'
import ImageEd from './images/team/ed-colligan.jpg'
import ImageHarry from './images/team/harry-saal.jpg'
import ImageJeff from './images/team/jeff-hawkins.jpg'
import ImageMap from './images/map.png'
import ImageMike from './images/team/mike-farmwald.jpg'
import ImageSubutai from './images/team/subutai-ahmad.jpg'
import styles from './style.css'

const fields = {  // wufoo ids
  first: 'Field861',
  last: 'Field862',
  title: 'Field757',
  company: 'Field114',
  email: 'Field9',
  phone: 'Field244',
  content: 'Field858',
  idstamp: 'idstamp',
}


/**
 *
 */
const PageCompany = (state, {config}) => {
  const {contact, links} = config

  return (
    <div>
      <Anchor name="careers" />
      <SubTitle>Careers</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Company culture is important to us, so why not join a startup that
            feels like a family? We may be busy cracking the code on machine
            intelligence, but we’ve got a work-hard, play-hard attitude. Our
            kitchen is stocked with salty and sweet snacks, and on Wednesdays
            we enjoy catered lunches from a variety of local restaurants.
          </Paragraph>
          <Paragraph>
            At the heart of the peninsula, our downtown Redwood City location
            is a short walk from the Caltrain station.  Outside the office, we
            blow off steam with company events, happy hours and other fun
            activities. In the past, we’ve cheered on the SF Giants, baked
            pies at Pie Ranch in Pescadero, and do-si-doed through the night.
          </Paragraph>

          <SubTitle level={3}>Current Openings</SubTitle>
          <List marker="disc">
            <ListItem>
              <TextLink to="">
                Research Internship
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to="">
                Internship Program
              </TextLink>
            </ListItem>
          </List>
        </div>
        <div className={styles.asideCenter}>
          <Image
            alt="Numenta Office Interior"
            respond="mw"
            src={ImageCareers}
          />
        </div>
      </div>

      <Anchor name="team" />
      <SubTitle>Management Team</SubTitle>

      <SubTitle level={4}>Donna Dubinsky</SubTitle>
      <SubTitle level={5}>CEO & Co-Founder</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            Donna first partnered with Jeff Hawkins at Palm, Inc. in 1992,
            where she served as president and CEO. She held this position
            throughout Palm’s acquisition by U.S Robotics and subsequently
            3Com Corporation. In 1998, Donna and Jeff co-founded Handspring,
            creator of the category-defining Treo smartphone. Handspring
            merged with Palm in 2003, and Donna continued to serve on Palm’s
            board until 2009. Previously, Donna spent 10 years at Apple Inc.
            in a multitude of sales, sales support, and logistics
            functions—both at Apple and at Claris, an Apple software
            subsidiary.
          </Paragraph>
          <Paragraph>
            Donna earned a B.A. from Yale University, and an M.B.A. from
            Harvard Business School. She is currently on the board of Yale
            University.
          </Paragraph>
        </div>
        <div className={styles.asideCenter}>
          <Image
            alt="Donna Dubinsky"
            respond="mw"
            src={ImageDonna}
          />
        </div>
      </div>

      <SubTitle level={4}>Jeff Hawkins</SubTitle>
      <SubTitle level={5}>Co-Founder</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            Jeff is an engineer, serial entrepreneur, scientist, inventor and
            author. His life-long interest in neuroscience and theories of the
            neocortex has driven his passion for building a technology based
            on neocortical theory. Previously, he founded two mobile computing
            companies, Palm and Handspring, and is the architect of many
            computing products such as the PalmPilot and Treo smartphone. In
            2002, he founded the Redwood Neuroscience Institute, a scientific
            institute focused on understanding how the neocortex processes
            information. The institute is currently located at U.C. Berkeley.
            In 2004 Jeff wrote the book, On Intelligence, which outlines
            Hierarchical Temporal Memory (HTM) and describes progress on
            understanding the neocortex.
          </Paragraph>
          <Paragraph>
            Jeff earned his B.S. in Electrical Engineering from Cornell
            University in 1979. He was elected to the National Academy of
            Engineering in 2003.
          </Paragraph>
        </div>
        <div className={styles.asideCenter}>
          <Image
            alt="Jeff Hawkins"
            respond="mw"
            src={ImageJeff}
          />
        </div>
      </div>

      <SubTitle level={4}>Subutai Ahmad</SubTitle>
      <SubTitle level={5}>VP of Research</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            Subutai brings experience across real time systems, computer
            vision and learning to Numenta. He has previously served as VP
            Engineering at YesVideo, Inc. where he helped grow the company
            from a three-person start-up to a leader in automated digital
            media authoring. In 1997, Subutai co- founded ePlanet Interactive,
            a spin-off from Interval Research. ePlanet developed the IntelPlay
            Me2Cam, the first computer vision product developed for consumers.
            He has served as a key researcher at Interval Research.
          </Paragraph>
          <Paragraph>
            Subutai holds a B.S. in Computer Science from Cornell University,
            and a Ph.D in Computer Science from the University of Illinois at
            Urbana-Champaign. While pursuing his Ph.D, Subutai completed a
            thesis on computational neuroscience models of visual attention.
          </Paragraph>
        </div>
        <div className={styles.asideCenter}>
          <Image
            alt="Subutai Ahmad"
            respond="mw"
            src={ImageSubutai}
          />
        </div>
      </div>

      <SubTitle level={4}>Celeste Baranski</SubTitle>
      <SubTitle level={5}>VP of Engineering</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            Celeste has vast experience in high tech engineering, design and
            management. Previously, Celeste was SVP Engineering & Operations
            at Panasas, a Big Data storage provider. She was CEO and
            Co-Founder of Vitamin D, one of the first developers to use the
            NuPIC platform. Celeste also served in VP Engineering roles at
            Palm and at Handspring, where she led the companies’ engineering
            efforts for handheld computers and smartphones. Celeste has built
            effective engineering teams, starting from a few to over 500 and
            has delivered numerous successful and award-winning products.
          </Paragraph>
          <Paragraph>
            Celeste holds both a B.S. and M.S. in electrical engineering from
            Stanford University.
          </Paragraph>
        </div>
        <div className={styles.asideCenter}>
          <Image
            alt="Celeste Baranski"
            respond="mw"
            src={ImageCeleste}
          />
        </div>
      </div>

      <Anchor name="board" />
      <SubTitle>Board of Directors</SubTitle>

      <SubTitle level={4}>Ed Colligan</SubTitle>
      <SubTitle level={5}>Former President & CEO, Palm, Inc.</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            Ed has been a part of the core team of five Silicon Valley
            start-ups. Ed’s first big success was Radius, Inc. where he was
            instrumental in building products and the brand. After Radius, Ed
            was the first vice president of marketing for Palm where he helped
            develop the original Palm Pilot, the Palm brand and Palm's product
            strategy. He moved on from Palm to found Handspring where Ed and
            his partners created the forbearer of all future smartphones; the
            Handspring Treo. Ed drove the transaction that reunited Palm and
            Handspring into a single Palm again. He established relationships
            with wireless carriers globally and drove Palm’s annual smartphone
            business to more than $2 billion. As the CEO of Palm, Ed
            spearheaded the transformation that created the WebOS platform and
            Palm Pre line of smartphones.
          </Paragraph>
          <Paragraph>
            Ed now spends his time investing in and mentoring entrepreneurs.
            Ed is a board member of Numenta, Inc., Active Mind Technology, and
            POPS Worldwide, and is an investor and on the board of advisors of
            six other start-up companies. Ed holds a B.S. from the University
            of Oregon.
          </Paragraph>
        </div>
        <div className={styles.asideCenter}>
          <Image
            alt="Ed Colligan"
            respond="mw"
            src={ImageEd}
          />
        </div>
      </div>

      <SubTitle level={4}>Donna Dubinsky</SubTitle>
      <SubTitle level={5}>CEO & Co-Founder</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            Donna first partnered with Jeff Hawkins at Palm, Inc. in 1992,
            where she served as president and CEO. She held this position
            throughout Palm’s acquisition by U.S Robotics and subsequently
            3Com Corporation. In 1998, Donna and Jeff co-founded Handspring,
            creator of the category-defining Treo smartphone. Handspring
            merged with Palm in 2003, and Donna continued to serve on Palm’s
            board until 2009. Previously, Donna spent 10 years at Apple Inc.
            in a multitude of sales, sales support, and logistics
            functions—both at Apple and at Claris, an Apple software
            subsidiary.
          </Paragraph>
          <Paragraph>
            Donna earned a B.A. from Yale University, and an M.B.A. from
            Harvard Business School. She is currently on the board of Yale
            University.
          </Paragraph>
        </div>
        <div className={styles.asideCenter}>
          <Image
            alt="Donna Dubinsky"
            respond="mw"
            src={ImageDonna}
          />
        </div>
      </div>

      <SubTitle level={4}>Mike Farmwald</SubTitle>
      <SubTitle level={5}>General Partner, Skymoon Ventures</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            Mike Farmwald is a successful serial entrepreneur. He has founded
            many companies with breakthrough technologies including FTL, a
            super computing company that merged with MIPs, Epigram, which was
            acquired by Broadcom, Rambus and Matrix Semiconductor, a creator
            of 3D integrated circuits.
          </Paragraph>
          <Paragraph>
            Mike currently sits on the board of Rambus (NASDAQ: RMBS). He is
            participating on the Numenta board as an individual, rather than
            as a representative of Skymoon Ventures. Mike holds a B.S. degree
            in Mathematics from Purdue University and a Ph.D. in Computer
            Science from Stanford University.
          </Paragraph>
        </div>
        <div className={styles.asideCenter}>
          <Image
            alt="Mike Farmwald"
            respond="mw"
            src={ImageMike}
          />
        </div>
      </div>

      <SubTitle level={4}>Jeff Hawkins</SubTitle>
      <SubTitle level={5}>Co-Founder</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            Jeff is an engineer, serial entrepreneur, scientist, inventor and
            author. His life-long interest in neuroscience and theories of the
            neocortex has driven his passion for building a technology based
            on neocortical theory. Previously, he founded two mobile computing
            companies, Palm and Handspring, and is the architect of many
            computing products such as the PalmPilot and Treo smartphone. In
            2002, he founded the Redwood Neuroscience Institute, a scientific
            institute focused on understanding how the neocortex processes
            information. The institute is currently located at U.C. Berkeley.
            In 2004 Jeff wrote the book, On Intelligence, which outlines
            Hierarchical Temporal Memory (HTM) and describes progress on
            understanding the neocortex.
          </Paragraph>
          <Paragraph>
            Jeff earned his B.S. in Electrical Engineering from Cornell
            University in 1979. He was elected to the National Academy of
            Engineering in 2003.
          </Paragraph>
        </div>
        <div className={styles.asideCenter}>
          <Image
            alt="Jeff Hawkins"
            respond="mw"
            src={ImageJeff}
          />
        </div>
      </div>

      <SubTitle level={4}>Harry Saal</SubTitle>
      <SubTitle level={5}>
        Chairman of ZERO1, The Arts & Technology Network
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            In 2002, Dr. Harry J. Saal was chosen by the US Department of
            Justice to lead the Technical Committee charged with monitoring
            and enforcing the Microsoft Antitrust case, and he served as
            Chairman of the Committee through the May 2011 expiration of the
            Judgment.
          </Paragraph>
          <Paragraph>
            Harry founded Nestar Systems, a pioneer in local area network
            systems, in 1978. In 1986, Harry became the founder and CEO of
            Network General Corporation, the first company wholly dedicated to
            the area of network diagnostics. From 1993 through 1995, Harry
            served as founding CEO and President of Smart Valley, Inc., a
            non-profit organization chartered to create a regional electronic
            community based on an advanced information infrastructure and the
            collective ability to use it.
          </Paragraph>
          <Paragraph>
            Harry is active in philanthropy and community affairs, and serves
            on the board of the American Institute of Mathematics, among
            others. Harry holds a B.A., M.A. and Ph.D. in Physics from
            Columbia University.
          </Paragraph>
        </div>
        <div className={styles.asideCenter}>
          <Image
            alt="Harry Saal"
            respond="mw"
            src={ImageHarry}
          />
        </div>
      </div>

      <Anchor name="contact" />
      <SubTitle>Contact</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            Want to get in contact with us? Send us a message by filling out
            this form or use the appropriate email.
          </Paragraph>
          <Form
            action="https://numenta.wufoo.com/forms/kcp312j1iehcj2/#public"
            name="form9"
          >
            <FormRow>
              <FormLabel htmlFor={fields.first}>First Name</FormLabel>
              <FormInput
                name={fields.first}
                stretch="medium"
                type="text"
                placeholder="Firstname"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.last}>Last Name</FormLabel>
              <FormInput
                name={fields.last}
                type="text"
                placeholder="Lastname"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.title}>Job Title</FormLabel>
              <FormInput
                name={fields.title}
                placeholder="Role"
                stretch="medium"
                type="text"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.company}>Company</FormLabel>
              <FormInput
                name={fields.company}
                placeholder="Company"
                stretch="small"
                type="text"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.email}>Email</FormLabel>
              <FormInput
                name={fields.email}
                placeholder="name@company.com"
                stretch="medium"
                type="email"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.phone}>Phone</FormLabel>
              <FormInput
                name={fields.phone}
                placeholder="+1-555-555-5555"
                stretch="small"
                type="tel"
              />
            </FormRow>
            <FormRow>
              <FormLabel htmlFor={fields.content}>How can we help?</FormLabel>
              <FormTextArea
                name={fields.content}
                placeholder="Comment here."
              />
            </FormRow>
            <FormRow>
              <FormLabel>&nbsp;</FormLabel>
              <Button theme="primary" type="submit">Send</Button>
            </FormRow>
            <FormInput
              name={fields.idstamp}
              type="hidden"
              value="hwFr746QGPGzzbeOEbIcrXFmpScleWw61VTW0cdscY4="
            />
          </Form>
        </div>
        <div className={styles.aside}>
          <div className={styles.emails}>
            <DefineList direction="vertical">
              <DefineTitle>
                Product Support:
              </DefineTitle>
              <DefineItem>
                <TextLink to={`mailto:${contact.email.support}`}>
                  {contact.email.support}
                </TextLink>
              </DefineItem>
              <DefineTitle>
                Press Contact:
              </DefineTitle>
              <DefineItem>
                <TextLink to={`mailto:${contact.email.press}`}>
                  {contact.email.press}
                </TextLink>
              </DefineItem>
              <DefineTitle>
                Licensing Inquiries:
              </DefineTitle>
              <DefineItem>
                <TextLink to={`mailto:${contact.email.sales}`}>
                  {contact.email.sales}
                </TextLink>
              </DefineItem>
            </DefineList>
          </div>
        </div>
      </div>

      <div className={styles.columns}>
        <div className={styles.content}>
          <Anchor name="office" />
          <SubTitle level={3}>Office</SubTitle>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Strong>Phone</Strong>
                </TableCell>
                <TableCell>
                  <TextLink to={`tel:${contact.phone.tel}`}>
                    {contact.phone.tel}
                  </TextLink>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Strong>Fax</Strong>
                </TableCell>
                <TableCell>{contact.phone.fax}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Strong>Address</Strong>
                </TableCell>
                <TableCell>
                  <address className={styles.address}>
                    791 Middlefield Road <br />
                    Redwood City, CA 94063
                  </address>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Strong>Map</Strong>
                </TableCell>
                <TableCell>
                  <TextLink to={links.out.map}>
                    Google Maps Link
                  </TextLink>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className={styles.office}>
            <List marker="disc">
              <ListItem>
                Reception is on the second floor on the left
              </ListItem>
              <ListItem>
                Street parking is available on surrounding streets
              </ListItem>
              <ListItem>
                The Jefferson Avenue Garage is the nearest parking structure
              </ListItem>
            </List>
          </div>

          <Anchor name="follow" />
          <SubTitle level={3}>Follow</SubTitle>
          <SocialMedia />
        </div>
        <div className={styles.asideCenter}>
          <ImageLink to={links.out.map}>
            <Image
              alt="Map to Numenta Office"
              shadow={false}
              respond="mw"
              src={ImageMap}
            />
          </ImageLink>
        </div>
      </div>
    </div>
  )
}

PageCompany.contextTypes = {
  config: React.PropTypes.object,
}

export default PageCompany
