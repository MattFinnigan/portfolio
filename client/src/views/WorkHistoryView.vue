<template>
  <div class="work-view">
    <h2>Work History</h2>
    <div v-if="currRole" class="history-contain">
      <ul class="company-list">
        <li
          v-for="r in allRoles"
          :key="r.company"
          :class="['company', { active: currRole.company === r.company }]"
          @click="currRole = r"
        >
          {{ r.company }}
        </li>
      </ul>
      <div class="current-role">
        <h3>
          {{ currRole.name }}
          <a v-if="currRole.link" :href="currRole.link">@ {{ currRole.company }}</a>
          <span v-else>@ {{ currRole.company }}</span>
        </h3>
        <p class="mono">{{ currRole.dates }}</p>
        <ul class="resps">
          <li v-for="r in currRole.resps" :key="r">{{ r }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllWorkHistory } from '../utils/actions'

export default {
  data () {
    return {
      currRole: null,
      allRoles: []
    }
  },
  mounted () {
    getAllWorkHistory().then((res) => {
      this.allRoles = res.data.map((role) => { return { ...role, resps: JSON.parse(role.resps) } })
      this.currRole = this.allRoles[0]
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/theme.scss';
  .work-view {
    width: 100%;
    min-height: 75vh;
    .history-contain {
      display: flex;
      flex-direction: column;
      @media (min-width: 900px) {
        flex-direction: row;
      }
      .company-list {
        display: flex;
        overflow-x: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
        padding: 0;
        list-style: none;
        &::webkit-scrollbar {
          display:none;
        }
        @media (min-width:900px) {
          flex-direction: column;
          overflow-x: visible;
          margin-right: 2em;
        }
        .company {
          font-family: $font-mono;
          border-bottom: 3px solid $lightest-navy;
          padding: 0.75em 1em;
          cursor: pointer;
          @media (min-width:900px) {
            border-bottom: none;
            border-left: 3px solid $lightest-navy;
          }
          &.active {
            border-color: $green;
            color: $green;
          }
        }
      }
      .current-role {
        h3 {
          margin-bottom: 0;
          span {
            color: $secondary;
          }
        }
        p {
          margin-top: 0.25em;
        }
        .resps {
          padding: 0;
          padding-left: 1em;
          list-style: disclosure-closed;
          li {
            margin: 0.75em 0;
            padding-left: 0.75em;
            &::marker {
              color: $green;
            }
          }
        }
      }
    }
  }
</style>
