<template>
  <div class="landing-page">
    <section class="introduction-contain container">
      <div class="info-contain">
        <h1>Hello, I'm Matt & I'm a Full Stack Web Engineer</h1>
        <div class="buttons-contain">
          <button class="secondary large" @click="scrollTo('projects')">See my work</button>
          <button class="primary large" @click="scrollTo('contact')">Let's work together</button>
        </div>
      </div>
      <div class="gfx-contain">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </section>
    <section class="exp-contain container" id="exp">
      <h2>Skills & Experience</h2>
      <div class="buttons-contain">
        <button :class="['button', 'secondary', 'full', 'large', { active: expActive === 'technical' }]" @click="expActive = 'technical'">Technical</button>
        <button :class="['button', 'secondary', 'full', 'large', { active: expActive === 'nontechnical' }]" @click="expActive = 'nontechnical'">Non-technical</button>
      </div>
      <div v-show="expActive === 'technical'" class="exp-info-contain technical-exp">
        <div class="text-contain">
          <ul>
            <li>5+ years experience with full stack web development.</li>
            <li>Extensive experience with Vue.js, versions 2-3 using both composition & option APIs (5+ years).</li>
            <li>Extensive experience working with Laravel & MySQL in both commercial & personal projects.</li>
            <li>Extensive experience using GIT for source control in collaborative & personal projects.</li>
            <li>Proficient experience using React.js, React Native, PHP (vanillia), jQuery, MariaDB, Linux command line, Figma & other development related tools.</li>
            <li>Currently developing experience in writing & executing automatic testing suites (Unit, E2E testing with Cypress & Playwright)</li>
            <li>Currently developing experience in writing Python for mostly recreational use (AI, RaspberryPi dev & other small projects)</li>
          </ul>
        </div>
        <div class="graphic-contain">
          <div class="graphic-inner">
            <img src="@/assets/react.png"/>
            <img src="@/assets/mysql.png"/>
            <img src="@/assets/laravel.png"/>
            <img src="@/assets/git.png"/>
            <img src="@/assets/vue.png"/>
          </div>
        </div>
      </div>
      <div v-show="expActive === 'nontechnical'" class="exp-info-contain nontechnical-exp">
        <div class="text-contain">
          <ul>
            <li>Experience in explaining technical concepts to non-technical clients and understanding their requirements.</li>
            <li>Planning, researching, and designing websites while managing multiple client projects.</li>
            <li>Providing web development tutoring, explaining complex concepts in an understandable way.</li>
            <li>Tracking and optimizing SEO performance to improve website visibility.</li>
            <li>Conducting user interface & user experience research and design to enhance website usability and user satisfaction.</li>
          </ul>
        </div>
        <div class="graphic-contain">
          <div class="graphic-inner">
            <img src="@/assets/communication.png"/>
            <img src="@/assets/responsive.png"/>
            <img src="@/assets/tutor.png"/>
            <img src="@/assets/seo.png"/>
            <img src="@/assets/ui.png"/>
          </div>
        </div>
      </div>
    </section>
    <section class="projects-contain container" id="projects">
      <h2>Projects</h2>
      <div v-if="currProject" class="current-project">
        <div class="title-contain">
          <h4>{{ currProject.name }}</h4>
          <a v-if="currProject.github" class="button icon github" :href="currProject.github" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/github.png" alt="Github icon"/>
          </a>
          <a v-if="currProject.figma" class="button icon figma" :href="currProject.figma" target="_blank" rel="noopener noreferrer">
            <img src="@/assets/figma.svg" alt="Figma icon"/>
          </a>
        </div>
        <div class="project-content">
          <div class="image-contain">
            <img :src="currProject.image" alt="Project image"/>
          </div>
          <div class="text-contain">
            <div class="buttons-contain">
              <button :class="['button', 'secondary', 'full', 'large', { active: projActive === 'technical' }]" @click="projActive = 'technical'">Technical</button>
              <button v-if="currProject.points.nonTechnical.length" :class="['button', 'secondary', 'full', 'large', { active: projActive === 'nontechnical' }]" @click="projActive = 'nontechnical'">Non-technical</button>
            </div>
            <div class="link-contain">
              <a :href="currProject.link.url">{{ currProject.link.text }}</a>
            </div>
            <div v-show="projActive === 'technical'" class="points-contain">
              <ul>
                <li v-for="point in currProject.points.technical">{{ point }}</li>
              </ul>
            </div>
            <div v-show="projActive === 'nontechnical'" class="points-contain">
              <ul>
                <li v-for="point in currProject.points.nonTechnical">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="project-cards">
        <Card v-for="project in projects" :key="project.name" @click="currProject = project">
          <template v-slot:image>
            <img :src="project.image" alt="Project image"/>
          </template>
          <template v-slot:heading>
            <p>{{ project.name }}</p>
          </template>
          <template v-slot:content>
            <div class="icons-contain">
              <img v-for="tech in project.tech" :key="tech" :src="tech" alt="Tech icon"/>
            </div>
          </template>
        </Card>
      </div>
    </section>
    <section class="contact-contain container" id="contact">
      <h2>Contact</h2>
      <p v-if="!formSuccess && !formError">Want to work together? I'd love to hear from you!</p>
      <div v-if="!formSuccess && !formError" class="form-container">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Your name</label>
            <input v-model="form.name" type="text" id="name" name="name" required/>
          </div>
          <div class="form-group">
            <label for="email">Your email</label>
            <input v-model="form.email" type="email" id="email" name="email" required/>
          </div>
          <div class="form-group">
            <label for="message">Your message</label>
            <textarea v-model="form.message" id="message" name="message" required></textarea>
          </div>
          <div class="submit-contain">
            <button type="submit" class="button large primary">Submit</button>
          </div>
        </form>
      </div>
      <div v-if="formSuccess" class="form-success">
        <p>Thanks for getting in touch! I'll get back to you as soon as I can.</p>
      </div>
      <div v-if="formError" class="form-error">
        <p><em>There was an error submitting the form. Please try again later.</em></p>
      </div>
    </section>
  </div>
</template>

<script>
import Card from './common/Card.vue'
export default {
  name: 'LandingPage',
  components: {
    Card
  },
  props: {
    msg: String
  },
  data () {
    return {
      expActive: 'technical',
      projActive: 'technical',
      currProject: null,
      projects: [],
      form: {
        name: '',
        email: '',
        message: ''
      },
      formSuccess: false,
      formError: false
    }
  },
  mounted () {
    document.title = 'MFWebDesign'
    const pjs = [
      {
        name: 'Garden planner/journal',
        link: { text: 'A garden planner/journal for gardeners to plan, track, and share their gardens (Full stack development)', url: 'http://garden.mfwebdesign.com.au' },
        tech: ['vue', 'laravel', 'mysql', 'git'],
        points: {
          technical: ['Work in Progress'],
          nonTechnical: ['Work in Progress'],
        },
        image: 'garden.png',
        github: 'https://github.com/MattFinnigan/garden',
        figma: 'https://www.figma.com/design/i7Xf3wtu7H2WLbGbMSH0yj/Garden?node-id=33-5&t=kWqxB3lMDccrSioO-1'
      },
      {
        name: 'Personal Portfolio',
        link: { text: 'My personal website, showcasing my work, skills, and experience (Full stack development)', url: 'https://mfwebdesign.com.au' },
        tech: ['vue', 'laravel', 'mysql', 'git'],
        points: {
          technical: [
            'Designed, developed & maintained the website',
            'Developed & maintained the contact form, where users can send me messages'
          ],
          nonTechnical: []
        },
        image: 'portfolio.png',
        github: 'https://github.com/MattFinnigan/portfolio',
        figma: 'https://www.figma.com/design/RXPHklgwjkEVBE7GO9KJfd/Untitled?node-id=0-1&t=SBmZNrpoU9Wqbdp0-1'
      },
      {
        name: 'Auralia & Musition',
        link: { text: 'An ear training & music theory learning platform for universities, high schools & independent learners. (Front end development)', url: 'https://www.risingsoftware.com' },
        tech: ['vue', 'git'],
        points: {
          technical: [
            'Collaborate with back end, database, and other front end devs in designing, developing & maintaining the app',
            'Porting features from the existing desktop app into the web version',
            'Develop & maintain the admin portal, where teachers and other admins can design their own quizzies, worksheets, exams & formal assements',
            'Develop & maintain new features for instructors to better customise their curriculum needs. eg. Editing provided content, importing audio, notation, images & Youtube links for their own'
          ],
          nonTechnical: [
            'Collaborate with the client to understand their requirements and provide feedback on the best way to implement them',
            'Conducted UX/UI research to improve website usability, leading to a better user experience.',
            'Provide tutoring to the client on how to use the admin portal, and how to maintain it'
          ]
        },
        image: 'auralia.png'
      },
      {
        name: 'Penrite Oil Website',
        link: { text: 'An end-user platform for Penrite Oil, a leading Australian oil manufacturer (Full stack development)', url: 'https://penriteoil.com.au/' },
        tech: ['vue', 'laravel', 'mysql', 'git'],
        points: {
          technical: [
            'Collaborate with other devs & designers in designing, developing & maintaining the website & product selector app',
            'Develop & maintain the product selector tool, where customers can input their vehicle details to find the right oil for their car',
            'Develop & maintain the product pages, where customers can view, filter, sort, and purchase products',
            'Develop & maintain a technical forum, where users can ask questions, and get answers from the Penrite team',
            'Develop & maintain the account pages, where users can save their vehicles, manage their account details, and view their forum activity'
          ],
          nonTechnical: [
            'Collaborate with the client to understand their requirements and provide feedback on the best way to implement them',
            'Conducted UX/UI research to improve website usability, leading to a better user experience.',
            'Optimized websites for SEO, increasing visibility and search rankings for clients.',
            'Identified and resolved technical and design challenges to ensure smooth functionality of websites and apps.'
          ]
        },
        image: 'penrite.png'
      }
    ]
    pjs.forEach((project, i) => {
      project.image = new URL(`../assets/${project.image}`, import.meta.url).href
      project.tech.forEach((tech, j) => {
        project.tech[j] = new URL(`../assets/${tech}.png`, import.meta.url).href
      })
    })
    this.projects = pjs
    this.currProject = this.projects[0]
  },
  methods: {
    handleSubmit () {
      this.$axios.post('/contact', this.form).then(() => {
        this.formSuccess = true
        this.form = {
          name: '',
          email: '',
          message: ''
        }
      }).catch((err) => {
        console.error(err)
        this.formError = true
      })
    },
    scrollTo (id) {
      const el = document.getElementById(id)
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
<style scoped lang="scss">
.landing-page {
  margin: 0 auto;
  section {
    padding: 25px;
    padding-bottom: 110px;
    scroll-margin: 55px;
    h2, h4 {
      text-align: center;
      margin: 0;
      margin-bottom: 1em;
    }
    h2 {
      overflow: hidden;
      margin-left: -25px;
      margin-right: -25px;
      &::before, &::after {
        background-color: colours.$textColour;
        content: "";
        display: inline-block;
        height: 1px;
        position: relative;
        vertical-align: middle;
        width: 50%;
        margin-top: -6px;
      }
      &::before {
        right: 0.5em;
        margin-left: -50%;
      }
      &::after {
        left: 0.5em;
        margin-right: -50%;
      }
      @include devices.device('phone', 'all') {
        &::before {
          right: 0.2em;
        }
        &::after {
          left: 0.2em;
        }
      }
    }
    ul {
      padding-left: 1.8em;
      list-style-type: disclosure-closed;
      li {
        margin-bottom: 0.5em;
        padding-left: 5px;
        &::marker {
          font-size: 1.65em;
        }
      }
    }
    .buttons-contain {
      display: flex;
      button.active {
        background-color: colours.$textColour;
        color: colours.$background;
      }
    }
  }
  .introduction-contain {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 450px;
    background: colours.$dark;
    .info-contain {
      height: 300px;
      flex: 0.5;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h1 {
        margin: 0;
        margin-bottom: 0.25em;
      }
      .buttons-contain {
        display: flex;
      }
      @include devices.device('tablet', 'portrait') {
        justify-content: center;
        align-items: center;
        h1 {
          margin-bottom: 0.5em;
        }
      }
      @include devices.device('phone', 'all') {
        justify-content: center;
        align-items: center;
        h1 {
          margin-bottom: 0.5em;
        }
      }
    }
    .gfx-contain {
      height: 300px;
      flex: 0.5;
      position: relative;
      .shape {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        border-left: 14vw solid transparent;
        border-right: 14vw solid transparent;
        border-bottom: 20vw solid;
        &.shape-1 {
          z-index: 3;
          border-bottom-color: colours.$primary;
        }
        &.shape-2 {
          left: 75px;
          z-index: 2;
          border-bottom-color: colours.$secondary;
        }
        &.shape-3 {
          left: 150px;
          z-index: 1;
          border-bottom-color: colours.$textColour;
        }
      }
      @media screen and (min-width: 1200px) {
        .shape {
          border-left: 225px solid transparent;
          border-right: 225px solid transparent;
          border-bottom: 300px solid;
        }
      }
      @include devices.device('phone', 'all') {
        display: none;
      }
      @include devices.device('tablet', 'portrait') {
        display: none;
      }
      @include devices.device('tablet', 'landscape') {
        .shape {
          top: 25%;
        }
      }
    }
  }
  .exp-contain {
    margin-top: -55px;
    .exp-info-contain {
      margin-top: 2em;
      display: flex;
      .text-contain {
        flex: 0.6;
      }
      .graphic-contain {
        flex: 0.4;
        display: grid;
        .graphic-inner {
          position: relative;
          width: 300px;
          height: 300px;
          margin: auto;
          img {
            width: 75px;
            position: absolute;
            &:first-child {
              top: 0;
              left: 0;
            }
            &:nth-child(2) {
              top: 0;
              right: 0;
            }
            &:nth-child(3) {
              bottom: 0;
              left: 0;
            }
            &:nth-child(4) {
              bottom: 0;
              right: 0;
            }
            &:nth-child(5) {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
  }
  .projects-contain {
    background: colours.$dark;
    h2 {
      margin-top: -55px;
    }
    .title-contain {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1em;
      h4 {
        margin: 0;
      }
      a {
        margin: 0;
        &.github {
          img {
            width: 30px;
            height: auto;
          }
        }
        &.figma {
          padding-left: 0.25em;
          img {
            width: 15px;
            height: auto;
          }
        }
      }
    }
    .project-content {
      display: flex;
      gap: 20px;
      .text-contain, .image-contain {
        flex: 0.5;
      }
      .image-contain {
        img {
          width: 100%;
          border-radius: 0.5em;
        }
      }
      .text-contain .link-contain {
        margin-top: 1em;
      }
    }
    .project-cards {
      margin-top: 2em;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      .icons-contain {
        img {
          width: 17px;
          height: auto;
          margin-right: 15px;
        }
      }
    }
  }
  .contact-contain {
    h2 {
      margin-top: -55px;
    }
    p {
      text-align: center;
      margin-bottom: 1em;
    }
    .form-container {
      display: flex;
      justify-content: center;
      form {
        width: 50%;
        .form-group {
          margin-bottom: 1em;
          textarea {
            height: 150px;
          }
        }
        .submit-contain {
          display: flex;
          justify-content: center;
        }
      }
    }
    .form-success, .form-error {
      text-align: center;
      margin-top: 1em;
    }
    .form-success {
      color: colours.$primary;
    }
    .form-error {
      color: colours.$error;
    }
  }
  @include devices.device('phone', 'all') {
    .contact-contain {
      .form-container {
        form {
          width: 100%;
        }
      }
    }
    ul {
      text-align: left;
    }
    .exp-info-contain {
      flex-direction: column;
      .text-contain {
        margin-bottom: 2em;
      }
    }
    .projects-contain {
      img {
        max-width: 400px;
        margin: 0 auto;
      }
      .project-content {
        flex-direction: column;
      }
      .project-cards {
        flex-direction: column;
        gap: 20px;
        align-items: center;
      }
    }
    section {
      flex-direction: column-reverse;
      text-align: center;
    }
  }
  @include devices.device('tablet', 'portrait') {
    ul {
      text-align: left;
    }
    .exp-info-contain {
      flex-direction: column;
      .text-contain {
        margin-bottom: 2em;
      }
    }
    .projects-contain {
      img {
        max-width: 400px;
        margin: 0 auto;
      }
      .project-content {
        flex-direction: column;
      }
    }
    section {
      flex-direction: column-reverse;
      text-align: center;
    }
  }
}
</style>
