<template>
  <div class="projects-view">
    <h2>Some Things I've Built</h2>
    <div
      v-for="p in projects"
      :key="'p' + p.id"
      :class="['project-wrapper', { pointer: p.link }]"
      @click="goToLink(p.link)"
      :style="projectImage(p.img)"
    >
      <div class="image-container" :style="projectImage(p.img)"></div>
      <div class="project-content">
        <p class="type">{{ p.type }}</p>
        <h3>{{ p.name }}</h3>
        <div class="project-text" v-html="p.text"></div>
        <div class="project-tech">
          <span v-for="tech in p.tech_used" :key="p.id + ' ' + tech">{{ tech }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllProjects } from '../utils/actions'
export default {
  data () {
    return {
      projects: []
    }
  },
  mounted () {
    getAllProjects().then((res) => {
      this.projects = res.data.map((p) => { return { ...p, tech_used: JSON.parse(p.tech_used) } })
    })
  },
  methods: {
    projectImage (img) {
      return `background-image: url(${require('@/assets/img/projects/' + img)})`
    },
    goToLink (link) {
      window.open(link, '_blank').focus()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/theme.scss';
  .projects-view {
    width: 100%;
    min-height: 50vh;
    .project-wrapper {
      display: flex;
      flex-direction: column;
      box-shadow: 0 20px 30px -15px $navy-shadow;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 3em;
      @media (min-width: 900px) {
        background-image: unset !important;
        flex-direction: row;
        align-items: center;
        box-shadow: none;
      }
      .image-container {
        background-position: center center;
        background-repeat: no-repeat;
        display: none;
        @media (min-width: 900px) {
          display: inline-block;
          width: 65%;
          height: 300px;
          background-size: contain;
        }
      }
      .project-content {
        background: $light-navy-trans;
        padding: 30px 40px 30px;
        color: $secondary;
        @media (min-width: 900px) {
          background: transparent;
          width: 60%;
          margin-left: -5em;
          text-align: right;
        }
        .type {
          font-family: $font-mono;
          color: $green;
          margin-bottom: 5px;
        }
        h3 {
          margin-top: 0;
        }
        .project-text {
          @media (min-width:900px) {
            background: $light-navy;
            padding: 1em 1.5em;
            border-radius: 0.5em;
            box-shadow: 0 20px 30px -15px $navy-shadow;
          }
          :deep(p) {
            color: $secondary;
          }
        }
        .project-tech {
          margin-top: 1.5em;
          span {
            margin-right: 10px;
            font-family: $font-mono;
            color: $secondary;
          }
        }
      }
      &.pointer {
        cursor: pointer;
        h3:hover {
          color: $green;
        }
      }
      &:nth-child(odd) {
        @media (min-width: 900px) {
          flex-direction: row-reverse;
          .project-content {
            text-align: left;
            margin-left: 0;
            margin-right: -5em;
          }
        }
      }
    }
  }
</style>
