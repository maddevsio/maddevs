<template>
  <section id="open-source" class="open-source">
    <div class="container">
      <div class="open-source_wrap">
        <h2 class="sec-title">Мы постоянно занимаемся развитием команды <br> через опен-сорс проекты</h2>
        <div class="open-source_wrap-github">
          <div class="open-source_wrap-github-item github-link">
            <img src="../../assets/img/svg/openSource/avatar-md.svg" alt="Mad Devs logotype">
            <div class="github-link_desc">
              <h5>Mad Devs</h5>
              <a class="github-link" href="https://github.com/maddevsio">
                <img src="../../assets/img/svg/openSource/link.svg" alt="Link">
                https://github.com/maddevsio
              </a>
            </div>
          </div>
          <div class="open-source_wrap-github-item">
            <div class="github-info">
              <img src="../../assets/img/svg/openSource/calendar.svg" alt="Calendar">
              <p>Обновлено 3ч назад</p>
            </div>
            <div class="github-info">
              <img src="../../assets/img/svg/openSource/stars.svg" alt="Stars">
              <p>3863 звезд</p>
            </div>
          </div>
          <div class="open-source_wrap-github-item">
            <div class="github-info">
              <img src="../../assets/img/svg/openSource/repo.svg" alt="Repos">
              <p>{{ this.githubData.repos }} проектов</p>
            </div>
            <div class="github-info">
              <img src="../../assets/img/svg/openSource/commit.svg" alt="Commits">
              <p>16883 комитов</p>
            </div>
          </div>
          <div class="open-source_wrap-github-item">
            <div class="github-info">
              <img src="../../assets/img/svg/openSource/branch.svg" alt="Branch">
              <p>1327 форков</p>
            </div>
            <div class="github-info">
              <img src="../../assets/img/svg/openSource/issues.svg" alt="Issues">
              <p>72 задачи</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="open-source_wrap-projects">
      <h3>Проекты</h3>
      <div class="open-source_wrap-projects_list">
        <div class="open-source_wrap-projects_list-item op-proj-1">
          <div class="projects-img_wrap">
            <img src="../../assets/img/svg/openSource/id.svg" class="op-img-opensourse" alt="IDmatch">
          </div>
          <div class="projects-desc_wrap">
            <h4>IDmatch</h4>
            <p>Искусственный интеллект идентификации личности</p>
          </div>
        </div>
        <div class="open-source_wrap-projects_list-item op-proj-2">
          <div class="projects-img_wrap">
            <img src="../../assets/img/svg/openSource/madpwa.svg" class="op-img-madpwa" alt="MadPwa">
          </div>
          <div class="projects-desc_wrap">
            <h4>MADPWA</h4>
            <p>Быстрый, удобный и простой способ создания PWA</p>
          </div>
        </div>
        <div class="open-source_wrap-projects_list-item op-proj-3">
          <div class="projects-img_wrap">
            <img src="../../assets/img/svg/openSource/mlm.svg" class="op-img-mlm" alt="Mad Location Manager">
          </div>
          <div class="projects-desc_wrap">
            <h4>Mad Location Manager</h4>
            <p>Точные и «чистые» данные с GPS-приемников</p>
          </div>
        </div>
        <div class="open-source_wrap-projects_list-item op-proj-4">
          <div class="projects-img_wrap">
            <img src="../../assets/img/svg/openSource/sf.svg" class="op-img-sf" alt="Sensor fusion">
          </div>
          <div class="projects-desc_wrap">
            <h4>Sensor fusion</h4>
            <p>This application demonstrates the capabilities of various</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'open-source',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      githubData: {
        repos: 0,
        commits: 0,
        stars: 0,
        forks: 0,
        updated_at: 0,
        tasks: 0,
      }
    }
  },
  methods: {
    getGithubData() {
        // axios.get('https://api.github.com/users/maddevsio/repos?per_page=100000&type=owner')
        axios.get('https://api.github.com/users/maddevsio')
            .then((res) => {
                this.githubData.repos = res.data.public_repos;
            });
    }
  },
  mounted() {
      this.getGithubData();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
