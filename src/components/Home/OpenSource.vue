<template>
  <section id="open-source" class="open-source">
    <div class="open-source_wrap">
      <div class="container">
        <h2 class="sec-title">{{$t('Besides the main work, our teams contribute to open source')}}</h2>
        <a class="open-source_wrap_btn" href="https://github.com/maddevsio" target="_blank">
          <img src="../../assets/img/svg/openSource/github-light.svg" alt="Github">
          Mad Devs on GitHub
        </a>
      </div>
    </div>
    <div class="open-source_wrap-projects">
      <h3>{{$t('Projects')}}</h3>
      <div class="open-source_wrap-projects_list">
        <a href="https://github.com/maddevsio/idmatch" target="_blank" class="open-source_wrap-projects_list-item op-proj-1">
          <div class="projects-img_wrap">
            <img src="../../assets/img/svg/openSource/id.svg" class="op-img-opensourse" alt="IDmatch">
          </div>
          <div class="projects-desc_wrap">
            <h4>IDmatch</h4>
            <p>{{$t('Artificial Intelligence Identification')}}</p>
          </div>
        </a>
        <a href="https://gitlab.com/maddevs/madpwa" target="_blank" class="open-source_wrap-projects_list-item op-proj-2">
          <div class="projects-img_wrap">
            <img src="../../assets/img/svg/openSource/madpwa.svg" class="op-img-madpwa" alt="MadPwa">
          </div>
          <div class="projects-desc_wrap">
            <h4>MADPWA</h4>
            <p>{{$t('Quick, convenient and easy way to create PWA')}}</p>
          </div>
        </a>
        <a href="https://gitlab.com/maddevs/mad-locations-manager" target="_blank" class="open-source_wrap-projects_list-item op-proj-3">
          <div class="projects-img_wrap">
            <img src="../../assets/img/svg/openSource/mlm.svg" class="op-img-mlm" alt="Mad Location Manager">
          </div>
          <div class="projects-desc_wrap">
            <h4>Mad Location Manager</h4>
            <p>{{$t('Accurate and “clean” data from GPS receivers')}}</p>
          </div>
        </a>
        <a href="https://gitlab.com/peklostudio/peklo" target="_blank" class="open-source_wrap-projects_list-item op-proj-4">
          <div class="projects-img_wrap">
            <img src="../../assets/img/svg/openSource/PKL.svg" class="op-img-sf" alt="Sensor fusion">
          </div>
          <div class="projects-desc_wrap">
            <h4>Peklo Tool</h4>
            <p>{{$t('Tool for automatization of contextual advertising creation')}}</p>
          </div>
        </a>
        <a href="https://github.com/maddevsio/heimdall" target="_blank" class="open-source_wrap-projects_list-item op-proj-5">
          <div class="projects-img_wrap">
            <img src="../../assets/img/svg/openSource/Heimdall.svg" class="op-img-sf" alt="Heimdall">
          </div>
          <div class="projects-desc_wrap">
            <h4>Heimdall</h4>
            <p>{{$t('Tool for analyzing smart contracts using mythril')}}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'open-source',
  data() {
    return {
      githubData: {
        repos: 0,
        commits: 0,
        stars: 0,
        forks: 0,
        updated_at: 0,
        tasks: 0
      }
    };
  },
  methods: {
    getGithubData() {
      axios.get('https://api.github.com/users/maddevsio').then(res => {
        this.githubData.repos = res.data.public_repos;
      });
    }
  },
  mounted() {
    this.getGithubData();
  }
};
</script>
